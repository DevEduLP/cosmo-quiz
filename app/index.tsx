// app/index.tsx
import React from "react";
import { Stack, useRouter } from "expo-router";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  Modal,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CosmicButton from "../components/ui/CosmicButton";
import { t, getLang, setLang, type Lang } from "../src/i18n"; // <-- caminho correto (minúsculo)
import { StatusBar } from "expo-status-bar";

const BG = require("../assets/images/background.png");
const LOGO = require("../assets/images/icon.png");

const LANG_KEY = "@cosmoquiz/lang";
const PRESETS = [10, 15, 20];

export default function Home() {
  const router = useRouter();

  const [lang, setLangState] = React.useState<Lang>(getLang());
  const [openLang, setOpenLang] = React.useState(false);

  // modal "quantas perguntas"
  const [openQty, setOpenQty] = React.useState(false);
  const [n, setN] = React.useState("");
  const [difficulty, setDifficulty] = React.useState<"iniciante" | "medio">(
    "iniciante"
  );
  const [daily, setDaily] = React.useState(false);
  const FOOTER_LOGO = require("../assets/images/logo-footer.png");

  React.useEffect(() => {
    AsyncStorage.getItem(LANG_KEY).then((saved) => {
      const v = saved === "pt" || saved === "en" ? (saved as Lang) : null;
      if (v && v !== getLang()) {
        setLang(v);
        setLangState(v);
      }
    });
  }, []);

  async function chooseLanguage(next: Lang) {
    setLang(next);
    setLangState(next);
    setOpenLang(false);
    try {
      await AsyncStorage.setItem(LANG_KEY, next);
    } catch {}
  }

  function startGame(preset?: number) {
    const raw = preset ? String(preset) : n;
    const val = clampInt(raw, 5, 50, 15);
    setOpenQty(false);
    router.push({
      pathname: "/quiz",
      params: { n: String(val), nivel: difficulty, daily: daily ? "1" : "0" },
    });
  }

  return (
    <ImageBackground
      source={BG}
      resizeMode="cover"
      style={styles.bg}
      imageStyle={{ opacity: 0.9 }}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      <SafeAreaView style={styles.overlay}>
        {/* Top bar */}
        <View style={styles.headerBar}>
          <View style={{ width: 44 }} />
          <Pressable
            onPress={() => setOpenLang(true)}
            style={styles.langBtn}
            android_ripple={{ color: "rgba(255,255,255,0.15)", radius: 18 }}
          >
            <Text style={styles.langFlag}>{lang === "pt" ? "🇧🇷" : "🇺🇸"}</Text>
          </Pressable>
        </View>

        {/* Content */}
        <View style={styles.wrap}>
          <View style={styles.header}>
            <View style={styles.logoCircle}>
              <Image source={LOGO} style={styles.logoImg} resizeMode="cover" />
            </View>
            <Text style={styles.title}>{t("home.title")}</Text>
            <Text style={styles.sub}>{t("home.subtitle")}</Text>
          </View>

          <View style={{ marginTop: 24, marginBottom: 35 }}>
            <CosmicButton
              label={t("home.play")}
              onPress={() => setOpenQty(true)} // abre o MODAL
              width={240}
              style={{ marginBottom: 30 }}
            />
            <CosmicButton
              width={240}
              onPress={() => router.replace("/history")}
              style={{ marginBottom: 30 }}
            >
              {t("home.history")}
            </CosmicButton>
          </View>

          <View style={styles.footer}>
            <Image
              source={FOOTER_LOGO}
              style={styles.footerLogo}
              resizeMode="contain"
              accessible
              accessibilityRole="image"
              accessibilityLabel="App logo"
            />
          </View>
        </View>
      </SafeAreaView>

      {/* MODAL: idioma */}
      <Modal
        visible={openLang}
        transparent
        animationType="fade"
        onRequestClose={() => setOpenLang(false)}
      >
        <Pressable
          style={styles.modalBackdrop}
          onPress={() => setOpenLang(false)}
        >
          <View style={styles.langCard}>
            <Text style={styles.langTitle}>
              {lang === "pt" ? "Idioma" : "Language"}
            </Text>

            <Pressable
              style={styles.langRow}
              onPress={() => chooseLanguage("pt")}
            >
              <Text style={styles.langEmoji}>🇧🇷</Text>
              <Text style={styles.langText}>Português (Brasil)</Text>
              {lang === "pt" && <Text style={styles.langMark}>✓</Text>}
            </Pressable>

            <Pressable
              style={styles.langRow}
              onPress={() => chooseLanguage("en")}
            >
              <Text style={styles.langEmoji}>🇺🇸</Text>
              <Text style={styles.langText}>English (US)</Text>
              {lang === "en" && <Text style={styles.langMark}>✓</Text>}
            </Pressable>

            <CosmicButton
              width={160}
              onPress={() => setOpenLang(false)}
              style={{ marginTop: 10 }}
            >
              {lang === "pt" ? "Fechar" : "Close"}
            </CosmicButton>
          </View>
        </Pressable>
      </Modal>

      {/* MODAL: quantas perguntas + dificuldade + daily */}
      <Modal
        visible={openQty}
        transparent
        animationType="fade"
        onRequestClose={() => setOpenQty(false)}
      >
        <View style={styles.qModalBackdrop}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={styles.qCard}
          >
            <Text style={styles.qTitle}>{t("modal.title")}</Text>

            <View style={styles.presetRow}>
              {PRESETS.map((v) => (
                <Pressable
                  key={v}
                  onPress={() => startGame(v)}
                  style={styles.pill}
                >
                  <Text style={styles.pillTxt}>{v}</Text>
                </Pressable>
              ))}
            </View>

            <Text style={styles.qHint}>{t("modal.hint")}</Text>
            <TextInput
              value={n}
              onChangeText={setN}
              keyboardType="number-pad"
              placeholder="15"
              placeholderTextColor="#8fa0b3"
              style={styles.input}
              maxLength={2}
            />

            <Text style={styles.qHint}>{t("modal.difficulty")}</Text>
            <View style={styles.toggleRow}>
              <Pressable
                onPress={() => setDifficulty("iniciante")}
                style={[
                  styles.toggle,
                  difficulty === "iniciante" && styles.toggleOn,
                ]}
              >
                <Text
                  style={[
                    styles.toggleTxt,
                    difficulty === "iniciante" && styles.toggleTxtOn,
                  ]}
                >
                  {t("difficulty.beginner")}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setDifficulty("medio")}
                style={[
                  styles.toggle,
                  difficulty === "medio" && styles.toggleOn,
                ]}
              >
                <Text
                  style={[
                    styles.toggleTxt,
                    difficulty === "medio" && styles.toggleTxtOn,
                  ]}
                >
                  {t("difficulty.medium")}
                </Text>
              </Pressable>
            </View>

            <Pressable
              onPress={() => setDaily((v) => !v)}
              style={styles.dailyRow}
            >
              <Text style={styles.dailyChk}>{daily ? "☑" : "☐"}</Text>
              <Text style={styles.dailyTxt}>{t("modal.dailyToggle")}</Text>
            </Pressable>

            <View style={styles.qButtons}>
              <CosmicButton
                width={140}
                onPress={() => setOpenQty(false)}
                style={{ marginRight: 8 }}
              >
                {t("modal.cancel")}
              </CosmicButton>
              <CosmicButton width={160} onPress={() => startGame()}>
                {t("modal.start")}
              </CosmicButton>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </ImageBackground>
  );
}

function clampInt(txt: string, min: number, max: number, fallback: number) {
  const v = parseInt(String(txt).replace(/\D+/g, "") || "", 10);
  if (Number.isNaN(v)) return fallback;
  return Math.min(max, Math.max(min, v));
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  overlay: { flex: 1 },

  headerBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 6,
  },
  langBtn: {
    marginTop: 80,
    width: 45,
    height: 45,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  langFlag: { fontSize: 20 },

  wrap: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
    justifyContent: "space-between",
  },
  header: { alignItems: "center" },
  logoCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    alignSelf: "center",
  },
  logoImg: { width: 120, height: 120, borderRadius: 60 },
  title: {
    color: "#FFFFFF",
    fontSize: 35,
    textAlign: "center",
    fontFamily: "SOLARSPACEDEMO-Regular",
    marginTop: 16,
  },
  sub: {
    color: "#B9C2CC",
    marginTop: 12,
    fontSize: 15,
    textAlign: "center",
    fontFamily: "CAPITOLCITY",
  },

  // modal idioma
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 70,
    paddingRight: 12,
  },
  langCard: {
    width: 260,
    borderRadius: 14,
    backgroundColor: "rgba(6,12,28,0.95)",
    borderWidth: 1,
    borderColor: "rgba(0,229,255,0.25)",
    padding: 12,
  },
  langTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
  },
  langRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.04)",
    marginBottom: 6,
  },
  langEmoji: { fontSize: 18 },
  langText: { color: "#E7EEF6", fontSize: 14, flex: 1 },
  langMark: { color: "#6BFFA8", fontWeight: "800", fontSize: 14 },

  // modal quiz
  qModalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    padding: 20,
  },
  qCard: {
    borderRadius: 16,
    backgroundColor: "rgba(6,12,28,0.95)",
    borderWidth: 1,
    borderColor: "rgba(0,229,255,0.25)",
    padding: 16,
  },
  qTitle: { color: "#fff", fontSize: 18, fontWeight: "800", marginBottom: 10 },
  presetRow: { flexDirection: "row", gap: 8, marginBottom: 8 },
  pill: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(0,229,255,0.2)",
  },
  pillTxt: { color: "#E7EEF6", fontWeight: "700" },
  qHint: { color: "#9FB2C8", fontSize: 12, marginTop: 8, marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0,229,255,0.2)",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: "#fff",
  },
  toggleRow: { flexDirection: "row", gap: 8, marginTop: 8 },
  toggle: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0,229,255,0.2)",
    backgroundColor: "rgba(255,255,255,0.04)",
  },
  toggleOn: {
    borderColor: "rgba(0,229,255,0.5)",
    backgroundColor: "rgba(0,229,255,0.12)",
  },
  toggleTxt: { color: "#E7EEF6", fontWeight: "700" },
  toggleTxtOn: { color: "#FFFFFF" },
  dailyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 10,
  },
  dailyChk: { color: "#fff", fontSize: 16 },
  dailyTxt: { color: "#E7EEF6", fontSize: 14 },
  qButtons: { flexDirection: "row", justifyContent: "flex-end", marginTop: 12 },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 700,
  },
  footerLogo: {
    width: 350, // ajuste como preferir
    height: 120, // ajuste conforme a proporção da tua logo
    opacity: 0.9,
  },
});
