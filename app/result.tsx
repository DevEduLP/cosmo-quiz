import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Resultado from "../components/questionario/Resultado";
import CosmicButton from "../components/ui/CosmicButton";
import { addResult } from "../lib/history";
import { recordGame, MEDALS } from "../lib/progress";
import { registerRoundFinished, showAdThen } from "../lib/ads";
import { syncAchievements } from "../lib/playGames";
import ViewShot, { captureRef, type ViewShotRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import { Image as ExpoImage } from "expo-image";
import { t } from "../src/i18n";

const BG = require("../assets/images/background.png");

export default function ResultScreen() {
  const router = useRouter();
  const {
    pontuacao = "0",
    totalDePerguntas = "0",
    review = "[]",
    nivel = "iniciante",
    daily = "0",
  } = useLocalSearchParams<{
    pontuacao?: string;
    totalDePerguntas?: string;
    review?: string;
    nivel?: string;
    daily?: string;
  }>();

  const pts = Number(pontuacao);
  const tot = Number(totalDePerguntas);
  const percent = Math.round((pts / Math.max(1, tot)) * 100);

  const [newMedals, setNewMedals] = React.useState<typeof MEDALS>([]);
  const [streak, setStreak] = React.useState(0);

  const savedRef = React.useRef(false);
  React.useEffect(() => {
    if (savedRef.current) return;
    savedRef.current = true;
    addResult(pts, tot).catch(() => {});
    registerRoundFinished();
    let answers = [];
    try {
      answers = JSON.parse(String(review) || "[]");
    } catch {}
    recordGame({
      total: tot,
      correct: pts,
      nivel: nivel === "medio" ? "medio" : "iniciante",
      daily: daily === "1",
      answers,
    })
      .then(({ newMedals, stats }) => {
        setNewMedals(newMedals);
        setStreak(stats.dayStreak);
        syncAchievements(stats);
      })
      .catch(() => {});
  }, [pts, tot, review, nivel, daily]);

  const shotRef = React.useRef<ViewShotRef>(null);

  async function shareImage() {
    try {
      const uri = await captureRef(shotRef, {
        format: "png",
        quality: 1,
        result: "tmpfile",
      });
      const available = await Sharing.isAvailableAsync();
      if (available)
        await Sharing.shareAsync(uri, {
          dialogTitle: t("result.share_result"),
        });
    } catch {}
  }

  return (
    <ImageBackground
      source={BG}
      resizeMode="cover"
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.9 }}
    >
      <SafeAreaView style={s.overlay}>
        <Stack.Screen options={{ headerShown: false }} />
        <Text style={s.titleTxt}>{t("result.title")}</Text>

        <View style={s.wrap}>
          {/* Cartão para compartilhar */}
          <ViewShot ref={shotRef} style={s.shareCard}>
            <ExpoImage
              source={BG}
              style={StyleSheet.absoluteFill}
              contentFit="cover"
              transition={0}
            />
            <View style={s.shareTint} />
            <Text style={s.shareTitle}>{t("app_title")}</Text>
            <Text style={s.shareScore}>
              {pts} / {tot}
            </Text>
            <Text style={s.shareSub}>{t("result.percent", { percent })}</Text>
          </ViewShot>

          {newMedals.length > 0 ? (
            <Pressable style={s.medalBanner} onPress={() => router.push("/medals")}>
              <Text style={s.medalTitle}>🏅 {t("result.new_medal")}</Text>
              <Text style={s.medalNames}>
                {newMedals.map((m) => `${m.emoji} ${t(`medal.${m.id}.name`)}`).join("   ")}
              </Text>
            </Pressable>
          ) : streak >= 2 ? (
            <Text style={s.streakTxt}>{t("result.streak", { n: streak })}</Text>
          ) : null}

          <View style={s.btnCol}>
            <CosmicButton
              onPress={() =>
                router.push({
                  pathname: "/review",
                  params: { review: String(review ?? "[]") },
                })
              }
              width={240}
              style={{ marginBottom: 8 }}
            >
              {t("result.see_explanations")}
            </CosmicButton>

            <CosmicButton
              onPress={() => showAdThen(() => router.replace("/"))}
              width={220}
              style={{ marginBottom: 8 }}
            >
              {t("result.home")}
            </CosmicButton>

            <CosmicButton
              onPress={() =>
                showAdThen(() =>
                  router.replace({
                    pathname: "/quiz",
                    params: { n: String(tot), nivel: String(nivel) },
                  })
                )
              }
              width={220}
              style={{ marginBottom: 8 }}
            >
              {t("result.play_again")}
            </CosmicButton>

            <CosmicButton onPress={shareImage} width={270} style={{ marginBottom: 20 }}>
              {t("result.share_result")}
            </CosmicButton>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.3)" },
  wrap: { flex: 1, padding: 20, justifyContent: "center", gap: 2 },
  titleTxt: {
    fontFamily: "CHAKRAPETCH_BOLD",
    marginTop: 120,
    color: "#FFFFFF",
    fontSize: 32,
    textAlign: "center",
    alignItems: 'center'
  },
  btnCol: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 45,
    gap: 8,
  },
  shareCard: {
    height: 220,
    marginTop: 50,
    borderRadius: 16,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(0,229,255,0.25)",
  },
  shareTint: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  shareTitle: {
    color: "#fff",
    fontFamily: "RUBIKMOONROCKS",
    fontSize: 22,
  },
  shareScore: { color: "#fff", fontSize: 48, fontWeight: "800", marginTop: 6 },
  shareSub: { color: "#B9C2CC", marginTop: 4 },
  medalBanner: {
    marginTop: 14,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 14,
    backgroundColor: "rgba(140,120,255,0.22)",
    borderWidth: 1,
    borderColor: "rgba(183,169,255,0.7)",
  },
  medalTitle: { color: "#FFFFFF", fontFamily: "CHAKRAPETCH_BOLD", fontSize: 16 },
  medalNames: { color: "#E6E0FF", fontSize: 14, marginTop: 2, textAlign: "center" },
  streakTxt: { marginTop: 14, textAlign: "center", color: "#FFC27A", fontWeight: "700" },
});
