import React from "react";
import { Stack, useRouter } from "expo-router";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Pressable,
  Alert,
} from "react-native";
import { getLastResults, clearHistory, QuizResult } from "../lib/history";
import CosmicButton from "../components/ui/CosmicButton";
import { t, getLocale } from "../src/i18n";

const BG = require("../assets/images/background.png");

function fmtDate(ts: number) {
  try {
    return new Date(ts).toLocaleString(getLocale(), {
      dateStyle: "short",
      timeStyle: "short",
    });
  } catch {
    return String(ts);
  }
}

export default function HistoryScreen() {
  const router = useRouter();
  const [items, setItems] = React.useState<QuizResult[]>([]);

  const load = React.useCallback(() => {
    getLastResults()
      .then(setItems)
      .catch(() => setItems([]));
  }, []);

  React.useEffect(() => {
    load();
  }, [load]);

  const clearAll = React.useCallback(() => {
    Alert.alert(t("clear_history"), t("clear_history_msg"), [
      { text: t("cancel"), style: "cancel" },
      {
        text: t("delete"),
        style: "destructive",
        onPress: async () => {
          await clearHistory();
          load();
        },
      },
    ]);
  }, [load]);

  return (
    <ImageBackground
      source={BG}
      resizeMode="cover"
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.9 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Screen options={{ headerShown: false }} />
        <Text style={s.title}>{t("last_results")}</Text>

        <FlatList
          contentContainerStyle={{ padding: 16, gap: 10 }}
          data={items}
          keyExtractor={(it) => it.id}
          ListEmptyComponent={<Text style={s.empty}>{t("empty_history")}</Text>}
          renderItem={({ item }) => {
            const percent = Math.round(item.perc * 100);
            const good = percent >= 70;
            return (
              <View style={s.card}>
                <View style={{ flex: 1 }}>
                  <Text style={s.when}>{fmtDate(item.ts)}</Text>
                  <Text style={s.score}>
                    {item.pontos}/{item.total}
                  </Text>
                </View>
                <View
                  style={[
                    s.badge,
                    {
                      backgroundColor: good
                        ? "rgba(0,200,120,0.18)"
                        : "rgba(255,80,80,0.18)",
                      borderColor: good
                        ? "rgba(0,200,120,0.5)"
                        : "rgba(255,80,80,0.5)",
                    },
                  ]}
                >
                  <Text style={s.badgeTxt}>{percent}%</Text>
                </View>
              </View>
            );
          }}
        />

        <View style={s.footer}>
          <CosmicButton width={220} onPress={() => router.replace("/quiz")}>
            {t("play_now")}
          </CosmicButton>

          <CosmicButton
            width={200}
            onPress={() => router.replace("/")}
            style={{ marginTop: 4 }}
          >
            {t("result.home")}
          </CosmicButton>

          <Pressable
            onPress={clearAll}
            android_ripple={{ color: "rgba(255,80,80,0.25)" }}
            style={s.clearBtn}
          >
            <Text style={s.clearTxt}>🗑 {t("clear_history")}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  title: {
    marginTop: 120,
    textAlign: "center",
    color: "#FFF",
    fontFamily: "CAPITOLCITY",
    fontSize: 28,
    marginBottom: 8,
  },
  empty: {
    textAlign: "center",
    color: "#B9C2CC",
    marginTop: 24,
    fontFamily: "CAPITOLCITY",
    fontSize: 15,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderWidth: 1,
    borderColor: "rgba(0,229,255,0.15)",
  },
  when: { color: "#9FB2C8", fontSize: 12, marginBottom: 2 },
  score: { color: "#FFFFFF", fontSize: 18, fontWeight: "700" },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1,
  },
  badgeTxt: { color: "#FFFFFF", fontWeight: "700" },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 18,
    gap: 8,
  },
  clearBtn: {
    marginTop: 8,
    marginBottom: 60,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,100,100,0.55)",
    backgroundColor: "rgba(255,60,60,0.08)",
    alignSelf: "center",
  },
  clearTxt: { color: "#FF8A8A", fontWeight: "700", letterSpacing: 0.3 },
});
