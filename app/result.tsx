import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Resultado from "../components/questionario/Resultado";
import CosmicButton from "../components/ui/CosmicButton";
import { addResult } from "../lib/history";
import ViewShot, { captureRef } from "react-native-view-shot";
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
  } = useLocalSearchParams<{
    pontuacao?: string;
    totalDePerguntas?: string;
    review?: string;
  }>();

  const pts = Number(pontuacao);
  const tot = Number(totalDePerguntas);
  const percent = Math.round((pts / Math.max(1, tot)) * 100);

  const savedRef = React.useRef(false);
  React.useEffect(() => {
    if (savedRef.current) return;
    savedRef.current = true;
    addResult(pts, tot).catch(() => {});
  }, [pts, tot]);

  const shotRef = React.useRef<View>(null);

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
              onPress={() => router.replace("/")}
              width={220}
              style={{ marginBottom: 8 }}
            >
              {t("result.home")}
            </CosmicButton>

            <CosmicButton
              onPress={() =>
                router.replace({
                  pathname: "/quiz",
                  params: { n: String(tot) },
                })
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
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  shareTitle: {
    color: "#fff",
    fontFamily: "RUBIKMOONROCKS",
    fontSize: 22,
  },
  shareScore: { color: "#fff", fontSize: 48, fontWeight: "800", marginTop: 6 },
  shareSub: { color: "#B9C2CC", marginTop: 4 },
});
