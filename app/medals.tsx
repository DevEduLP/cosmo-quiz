// app/medals.tsx
import React from "react";
import { Stack, useRouter } from "expo-router";
import { View, Text, StyleSheet, FlatList, ImageBackground, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CosmicButton from "../components/ui/CosmicButton";
import { t, getLocale } from "../src/i18n";
import { MEDALS, getStats, type Stats } from "../lib/progress";
import {
  isSignedIn,
  playGamesAvailable,
  showPlayGamesAchievements,
  signInPlayGames,
} from "../lib/playGames";

const BG = require("../assets/images/background.png");

function days(n: number) {
  return n === 1 ? t("medals.day") : t("medals.days", { n });
}

export default function MedalsScreen() {
  const router = useRouter();
  const [stats, setStats] = React.useState<Stats | null>(null);
  const [pgSignedIn, setPgSignedIn] = React.useState(isSignedIn());

  async function onPlayGames() {
    if (pgSignedIn) {
      showPlayGamesAchievements();
      return;
    }
    if (await signInPlayGames()) setPgSignedIn(true);
  }

  React.useEffect(() => {
    getStats().then(setStats);
  }, []);

  const earned = stats ? MEDALS.filter((m) => stats.unlocked[m.id]).length : 0;

  return (
    <ImageBackground source={BG} resizeMode="cover" style={{ flex: 1 }} imageStyle={{ opacity: 0.9 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Screen options={{ headerShown: false }} />
        <Text style={s.title}>{t("medals.title")}</Text>
        <Text style={s.count}>{t("medals.count", { n: earned, total: MEDALS.length })}</Text>

        <View style={s.streakRow}>
          <View style={s.streakBox}>
            <Text style={s.streakLabel}>{t("medals.streak_now")}</Text>
            <Text style={s.streakVal}>🔥 {days(stats?.dayStreak ?? 0)}</Text>
          </View>
          <View style={s.streakBox}>
            <Text style={s.streakLabel}>{t("medals.streak_best")}</Text>
            <Text style={s.streakVal}>🏆 {days(stats?.bestDayStreak ?? 0)}</Text>
          </View>
        </View>

        <FlatList
          data={MEDALS}
          numColumns={2}
          keyExtractor={(m) => m.id}
          columnWrapperStyle={{ gap: 10 }}
          contentContainerStyle={{ padding: 16, gap: 10 }}
          renderItem={({ item }) => {
            const when = stats?.unlocked[item.id];
            const prog = !when && stats && item.progress ? item.progress(stats) : null;
            return (
              <View style={[s.card, when ? s.cardOn : s.cardOff]}>
                <Text style={[s.emoji, !when && { opacity: 0.25 }]}>{item.emoji}</Text>
                <Text style={[s.name, !when && { color: "#9FB2C8" }]}>{t(`medal.${item.id}.name`)}</Text>
                <Text style={s.desc}>{t(`medal.${item.id}.desc`)}</Text>
                {when ? (
                  <Text style={s.date}>
                    {t("medals.earned_on", { date: new Date(when).toLocaleDateString(getLocale()) })}
                  </Text>
                ) : prog ? (
                  <View style={s.barWrap}>
                    <View style={[s.bar, { width: `${(prog[0] / prog[1]) * 100}%` }]} />
                    <Text style={s.barTxt}>
                      {prog[0]}/{prog[1]}
                    </Text>
                  </View>
                ) : null}
              </View>
            );
          }}
        />

        <View style={s.footer}>
          {playGamesAvailable() && (
            <Pressable onPress={onPlayGames} style={s.pgBtn} accessibilityRole="button">
              <Text style={s.pgTxt}>{t(pgSignedIn ? "medals.pg_open" : "medals.pg_signin")}</Text>
            </Pressable>
          )}
          <CosmicButton width={200} onPress={() => router.replace("/")} style={{ marginBottom: 40 }}>
            {t("home")}
          </CosmicButton>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  title: {
    marginTop: 60,
    textAlign: "center",
    color: "#FFF",
    fontFamily: "CHAKRAPETCH_SEMIBOLD",
    fontSize: 28,
  },
  count: { textAlign: "center", color: "#B9C2CC", marginTop: 2, fontSize: 13 },
  streakRow: { flexDirection: "row", gap: 10, paddingHorizontal: 16, marginTop: 14 },
  streakBox: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderWidth: 1,
    borderColor: "rgba(255,170,60,0.35)",
  },
  streakLabel: { color: "#9FB2C8", fontSize: 12 },
  streakVal: { color: "#FFFFFF", fontSize: 17, fontWeight: "700", marginTop: 2 },
  card: {
    flex: 1,
    alignItems: "center",
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
  },
  cardOn: { backgroundColor: "rgba(140,120,255,0.18)", borderColor: "rgba(183,169,255,0.6)" },
  cardOff: { backgroundColor: "rgba(0,0,0,0.3)", borderColor: "rgba(255,255,255,0.08)" },
  emoji: { fontSize: 34 },
  name: {
    color: "#FFFFFF",
    fontFamily: "CHAKRAPETCH_SEMIBOLD",
    fontSize: 15,
    marginTop: 4,
    textAlign: "center",
  },
  desc: { color: "#B9C2CC", fontSize: 12, textAlign: "center", marginTop: 2 },
  date: { color: "#6BFFA8", fontSize: 11, marginTop: 6 },
  barWrap: {
    alignSelf: "stretch",
    height: 16,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.08)",
    marginTop: 8,
    overflow: "hidden",
    justifyContent: "center",
  },
  bar: { position: "absolute", left: 0, top: 0, bottom: 0, backgroundColor: "rgba(140,120,255,0.55)" },
  barTxt: { color: "#FFFFFF", fontSize: 10, fontWeight: "700", textAlign: "center" },
  footer: { alignItems: "center", paddingTop: 6 },
  pgBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(107,255,168,0.5)",
    backgroundColor: "rgba(0,0,0,0.3)",
    marginBottom: 10,
  },
  pgTxt: { color: "#6BFFA8", fontSize: 13, fontWeight: "700" },
});
