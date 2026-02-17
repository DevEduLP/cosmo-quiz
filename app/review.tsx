// app/review.tsx
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Pressable,
} from "react-native";
import CosmicButton from "../components/ui/CosmicButton";
import { t, getLang } from "../src/i18n";

import perguntasPT from "../data/constants/perguntas";
import perguntasEN from "../data/constants/perguntas_en";

const BG = require("../assets/images/background.png");

// tipo comum para PT/EN
type Perg = {
  id: number;
  enunciado: string;
  opcoes: string[];
  resposta: number;
  explicacao?: string;
};

type Resp = { id: number; escolhida: number; correta: number };

export default function ReviewScreen() {
  const router = useRouter();
  const { review = "[]" } = useLocalSearchParams<{ review?: string }>();

  // escolhe o banco conforme o idioma atual
  const perguntasBank: Perg[] =
    getLang() === "en" ? (perguntasEN as Perg[]) : (perguntasPT as Perg[]);

  const respostas: Resp[] = React.useMemo(() => {
    try {
      return JSON.parse(String(review) || "[]");
    } catch {
      return [];
    }
  }, [review]);

  const items = React.useMemo(() => {
    // mapeia id -> pergunta no idioma atual
    const map = new Map<number, Perg>();
    perguntasBank.forEach((p) => map.set(p.id, p));

    const joined = respostas
      .map((r) => ({ r, p: map.get(r.id)! }))
      .filter((j) => !!j.p);

    // erradas primeiro
    joined.sort((a, b) => {
      const ea = a.r.escolhida === a.r.correta ? 1 : 0;
      const eb = b.r.escolhida === b.r.correta ? 1 : 0;
      return ea - eb;
    });

    return joined;
  }, [respostas, perguntasBank]);

  return (
    <ImageBackground
      source={BG}
      resizeMode="cover"
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.9 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Screen options={{ headerShown: false }} />
        <Text style={s.title}>{t("review.title")}</Text>

        <FlatList
          contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 40 }}
          data={items}
          keyExtractor={(it) => String(it.p.id)}
          renderItem={({ item }) => {
            const { p, r } = item;
            const acertou = r.escolhida === r.correta;

            return (
              <View
                style={[
                  s.card,
                  {
                    borderColor: acertou
                      ? "rgba(0,200,120,0.4)"
                      : "rgba(255,80,80,0.4)",
                  },
                ]}
              >
                <Text style={s.enun}>{p.enunciado}</Text>

                <View style={s.row}>
                  <Text style={s.tagTitle}>{t("review.your_answer")}:</Text>
                  <Text style={[s.tagVal, !acertou && { color: "#FF8A8A" }]}>
                    {p.opcoes[r.escolhida]}
                  </Text>
                </View>

                {!acertou && (
                  <View style={s.row}>
                    <Text style={s.tagTitle}>
                      {t("review.correct_answer")}:
                    </Text>
                    <Text style={[s.tagVal, { color: "#6BFFA8" }]}>
                      {p.opcoes[r.correta]}
                    </Text>
                  </View>
                )}

                <Pressable style={s.explBox} disabled={!p.explicacao}>
                  <Text
                    style={[s.explTitle, !p.explicacao && { opacity: 0.6 }]}
                  >
                    {t("review.explanation")}
                  </Text>
                  <Text style={s.explTxt}>
                    {p.explicacao ?? t("review.no_explanation")}
                  </Text>
                </Pressable>
              </View>
            );
          }}
          ListEmptyComponent={<Text style={s.empty}>{t("review.empty")}</Text>}
        />

        <View style={s.footer}>
          <CosmicButton width={220} onPress={() => router.replace("/")} style={{marginBottom: 50}}>
            {t("review.home")}
          </CosmicButton>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  title: {
    marginTop: 110,
    color: "#FFF",
    textAlign: "center",
    fontFamily: "CAPITOLCITY",
    fontSize: 26,
    marginBottom: 8,
  },
  card: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  enun: { color: "#fff", fontSize: 14, marginBottom: 8, fontWeight: "700" },
  row: {
    flexDirection: "row",
    gap: 6,
    alignItems: "baseline",
    marginBottom: 2,
  },
  tagTitle: { color: "#9FB2C8", fontSize: 12 },
  tagVal: { color: "#fff", fontSize: 11, fontWeight: "700"},
  explBox: {
    marginTop: 8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(0,229,255,0.12)",
  },
  explTitle: { color: "#9FB2C8", fontSize: 12, marginBottom: 4 },
  explTxt: { color: "#E7EEF6", fontSize: 13, lineHeight: 18 },
  empty: { color: "#B9C2CC", textAlign: "center", marginTop: 20, flexDirection:'row',flexWrap:'wrap', alignItems:'flex-start', columnGap: 6,  },
  footer: { alignItems: "center", paddingBottom: 24 },
});
