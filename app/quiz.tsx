// app/quiz.tsx
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Enunciado from "../components/questionario/Enunciado";
import Opcao from "../components/questionario/Opcao";
import CosmicButton from "../components/ui/CosmicButton";
import { t, getLang } from "../src/i18n";
import * as Haptics from "expo-haptics";
import { useSettings } from "../lib/settings";

// IMPORTA OS DOIS BANCOS
import perguntasPT from "../data/constants/perguntas";
import perguntasEN from "../data/constants/perguntas_en";

const BG = require("../assets/images/background.png");

// ---- Tipos canônicos
type NivelAny = "iniciante" | "medio" | "avancado" | "beginner" | "medium";
type PerguntaCanon = {
  id: number;
  enunciado: string;
  opcoes: string[];
  resposta: number;
  nivel?: NivelAny;
  explicacao?: string;
  orig?: number[]; // posição embaralhada -> índice original da alternativa
};

// ---- Helpers
function clampInt(txt: string, min: number, max: number, fallback: number) {
  const v = parseInt(String(txt).replace(/\D+/g, "") || "", 10);
  if (Number.isNaN(v)) return fallback;
  return Math.min(max, Math.max(min, v));
}
function xmur3(str: string) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function rngFromSeed(seed: string) {
  const seedFn = xmur3(seed);
  return mulberry32(seedFn());
}
function fisherYatesSeeded<T>(arr: T[], rnd: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function shuffleOpcoes(q: PerguntaCanon, rnd: () => number): PerguntaCanon {
  const pairs = q.opcoes.map((t, i) => ({ t, i }));
  for (let k = pairs.length - 1; k > 0; k--) {
    const j = Math.floor(rnd() * (k + 1));
    [pairs[k], pairs[j]] = [pairs[j], pairs[k]];
  }
  const opcoes = pairs.map((p) => p.t);
  const resposta = pairs.findIndex((p) => p.i === q.resposta);
  return { ...q, opcoes, resposta, orig: pairs.map((p) => p.i) };
}
function dailySeed() {
  const d = new Date();
  return `${d.getUTCFullYear()}-${d.getUTCMonth() + 1}-${d.getUTCDate()}`;
}
function normLevel(n?: NivelAny): "iniciante" | "medio" {
  const v = (n || "iniciante").toLowerCase();
  return v === "medio" || v === "medium" ? "medio" : "iniciante";
}

// ---- Normaliza o banco (aceita PT ou EN)
function normalizeBank(raw: any): PerguntaCanon[] {
  const arr = Array.isArray(raw) ? raw : [];
  return arr
    .map((it: any, idx: number) => {
      const id = Number(it?.id ?? idx + 1);
      const enunciado: string =
        it?.enunciado ?? it?.question ?? it?.pergunta ?? "";
      const opcoes: string[] =
        it?.opcoes ?? it?.options ?? it?.alternativas ?? [];
      const resposta: number =
        typeof it?.resposta === "number"
          ? it.resposta
          : typeof it?.answer === "number"
          ? it.answer
          : -1;
      const nivel: NivelAny | undefined =
        it?.nivel ?? it?.level ?? it?.difficulty ?? undefined;
      const explicacao: string | undefined =
        it?.explicacao ?? it?.explanation ?? undefined;

      // valida
      if (
        !enunciado ||
        !Array.isArray(opcoes) ||
        opcoes.length === 0 ||
        typeof resposta !== "number" ||
        resposta < 0 ||
        resposta >= opcoes.length
      ) {
        return null;
      }
      return { id, enunciado, opcoes, resposta, nivel, explicacao };
    })
    .filter(Boolean) as PerguntaCanon[];
}

export default function QuizScreen() {
  const router = useRouter();
  const { n = "15", nivel = "iniciante", daily = "0" } = useLocalSearchParams<{
    n?: string;
    nivel?: string;
    daily?: "0" | "1";
  }>();

  const N = clampInt(String(n), 5, 35, 15);
  const NIVEL: "iniciante" | "medio" = nivel === "medio" ? "medio" : "iniciante";
  const lang = getLang();

  // Escolhe o banco conforme idioma e normaliza
  const bank = React.useMemo(
    () => normalizeBank(lang === "en" ? (perguntasEN as any) : (perguntasPT as any)),
    [lang]
  );

  // Se não há perguntas válidas, volta pra Home (evita q undefined)
  React.useEffect(() => {
    if (bank.length === 0) {
      console.warn("[Quiz] Banco vazio ou inválido. Verifique export default e chaves.");
      router.replace("/");
    }
  }, [bank.length, router]);

  const rnd = React.useMemo(
    () => (daily === "1" ? rngFromSeed(`cosmo-${dailySeed()}-${NIVEL}-${lang}`) : Math.random),
    [daily, NIVEL, lang]
  );

  const qs = React.useMemo<PerguntaCanon[]>(() => {
    if (bank.length === 0) return [];
    const normalized = bank.map((p) => ({ ...p, nivel: normLevel(p.nivel) }));
    let pool =
      NIVEL === "iniciante"
        ? normalized.filter((p) => normLevel(p.nivel) === "iniciante")
        : normalized.filter((p) => normLevel(p.nivel) === "medio");

    if (pool.length === 0) pool = normalized;

    const shuffled = fisherYatesSeeded(pool, typeof rnd === "function" ? rnd : Math.random);
    const picked = shuffled.slice(0, Math.min(N, shuffled.length));
    return picked.map((q) => shuffleOpcoes(q, typeof rnd === "function" ? rnd : Math.random));
  }, [N, NIVEL, rnd, bank]);

  const total = qs.length;

  // Hooks sempre antes de qualquer return condicional (regras dos Hooks)
  const [i, setI] = React.useState(0);
  const [acertos, setAcertos] = React.useState(0);
  const [selecionada, setSelecionada] = React.useState<number | null>(null);
  const [locked, setLocked] = React.useState(false);
  const lockRef = React.useRef(false);
  const answersRef = React.useRef<{ id: number; escolhida: number; correta: number }[]>([]);
  const { cfg } = useSettings();

  // Se não tem perguntas, não renderiza (já redirecionou no useEffect)
  if (total === 0) return null;

  if (i >= total) {
    lockRef.current = false;
    router.replace({
      pathname: "result",
      params: {
        pontuacao: String(acertos),
        totalDePerguntas: String(total),
        review: JSON.stringify(answersRef.current),
        nivel: NIVEL,
        daily,
      },
    });
    return null;
  }

  const q = qs[i]; // <- garantido existir nesse ponto

  function selecionar(ind: number) {
    if (locked || lockRef.current) return;
    lockRef.current = true;
    setSelecionada(ind);
    setLocked(true);
    if (ind === q.resposta) setAcertos((v) => v + 1);
    if (cfg.haptics) {
      Haptics.notificationAsync(
        ind === q.resposta
          ? Haptics.NotificationFeedbackType.Success
          : Haptics.NotificationFeedbackType.Error
      ).catch(() => {});
    }
    // guarda os índices ORIGINAIS do banco, para a revisão mostrar os textos certos
    const orig = q.orig ?? q.opcoes.map((_, k) => k);
    answersRef.current[i] = { id: q.id, escolhida: orig[ind], correta: orig[q.resposta] };
  }

  function proxima() {
    if (i + 1 < total) {
      setSelecionada(null);
      setI((v) => v + 1);
      setLocked(false);
      lockRef.current = false;
    } else {
      lockRef.current = false;
      router.replace({
        pathname: "result",
        params: {
          pontuacao: String(acertos),
          totalDePerguntas: String(total),
          review: JSON.stringify(answersRef.current),
          nivel: NIVEL,
          daily,
        },
      });
    }
  }

  return (
    <ImageBackground source={BG} resizeMode="cover" style={{ flex: 1 }} imageStyle={{ opacity: 0.9 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={s.container}>
          <Text style={s.appTitle}>{t("app_title")}</Text>

          <View style={s.card}>
            <Enunciado enunciado={q.enunciado} />
            <View style={s.opcoes}>
              {q.opcoes.map((txt, idx) => (
                <View
                  key={`${q.id}-${idx}`}
                  style={{ marginBottom: 12, opacity: locked && selecionada !== idx ? 0.6 : 1 }}
                >
                  <Opcao
                    indice={idx}
                    texto={txt}
                    selected={selecionada === idx}
                    disabled={locked}
                    onPress={() => selecionar(idx)}
                  />
                </View>
              ))}
            </View>

            <CosmicButton width={220} onPress={proxima} disabled={!locked} style={{ marginTop: 8 }}>
              {i + 1 < total ? t("quiz.next") : t("quiz.finish")}
            </CosmicButton>

            <Text style={s.progress}>
              {t("quiz.question")} {i + 1} {t("quiz.of")} {total} — {t("quiz.correct")}: {acertos}
              {daily === "1" && ` • ${t("quiz.daily_badge")}`}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, alignItems: "center" },
  appTitle: {
    marginTop: 110,
    color: "#FFFFFF",
    fontSize: 25,
    fontFamily: "RUBIKMOONROCKS",
    letterSpacing: 0.5,
  },
  card: {
    flex: 1,
    width: "100%",
    maxWidth: 520,
    alignSelf: "center",
    justifyContent: "center",
    gap: 16,
  },
  opcoes: { marginTop: 8 },
  progress: {
    marginTop: 6,
    color: "#B9C2CC",
    fontSize: 11,
    fontFamily: "CHAKRAPETCH_SEMIBOLD",
    textAlign: "center",
  },
});
