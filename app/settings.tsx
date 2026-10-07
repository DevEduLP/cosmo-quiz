import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  ImageBackground,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import * as Haptics from "expo-haptics";
import CosmicButton from "../components/ui/CosmicButton";
import { useSettings } from "../lib/settings";

const BG = require("../assets/images/background.png");

export default function SettingsScreen() {
  const router = useRouter();
  const { cfg, setCfg, loaded } = useSettings();

  if (!loaded) {
    return (
      <ImageBackground source={BG} style={{ flex: 1 }} imageStyle={{ opacity: 0.35 }}>
        <SafeAreaView style={[s.overlay, { alignItems: "center", justifyContent: "center" }]}>
          <Text style={{ color: "#fff" }}>Carregando…</Text>
        </SafeAreaView>
      </ImageBackground>
    );
  }

  async function resetAll() {
    await setCfg({ haptics: true }); // só vibração na V1
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
  }

  return (
    <ImageBackground source={BG} resizeMode="cover" style={{ flex: 1 }} imageStyle={{ opacity: 0.35 }}>
      <SafeAreaView style={s.overlay}>
        <Stack.Screen options={{ headerShown: false }} />
        <Text style={s.title}>Configurações</Text>

        <View style={s.card}>
          {/* HAPTICS */}
          <Row
            label="Vibração (Haptics)"
            description="Vibrar ao tocar botões e respostas."
            right={
              <Switch
                value={cfg.haptics}
                onValueChange={async (v) => {
                  await setCfg({ haptics: v });
                  if (v) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
                }}
                thumbColor={cfg.haptics ? "#00E5FF" : "#8893a0"}
                trackColor={{ false: "rgba(255,255,255,0.15)", true: "rgba(0,229,255,0.35)" }}
              />
            }
          />
        </View>

        <View style={{ gap: 12, alignItems: "center", marginTop: 18 }}>
          <CosmicButton label="Salvar e voltar" onPress={() => router.replace("/")} width={220} />
          <CosmicButton
            label="Resetar para o padrão"
            onPress={resetAll}
            width={220}
            style={{ borderWidth: 1, borderColor: "rgba(0,229,255,0.25)" }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

function Row({
  label,
  description,
  right,
}: {
  label: string;
  description?: string;
  right: React.ReactNode;
}) {
  return (
    <View style={s.row}>
      <View style={{ flex: 1 }}>
        <Text style={s.label}>{label}</Text>
        {!!description && <Text style={s.desc}>{description}</Text>}
      </View>
      <View>{right}</View>
    </View>
  );
}

const s = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(11,16,32,0.45)",
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 6,
    fontSize: 28,
    color: "#FFFFFF",
    fontFamily: "RUBIKMOONROCKS",
  },
  card: {
    width: "100%",
    alignSelf: "center",
    maxWidth: 560,
    marginTop: 10,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(255,255,255,0.12)",
  },
  label: { color: "#FFFFFF", fontSize: 16, fontFamily: "SpaceMission" },
  desc: { color: "#B9C2CC", fontSize: 12, marginTop: 4, fontFamily: "SolarSpace" },
});
