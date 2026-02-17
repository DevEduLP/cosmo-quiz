import React from "react";
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Platform,
  StyleProp,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

type Props = {
  onPress: () => void;
  disabled?: boolean;
  width?: number | string;
  style?: StyleProp<ViewStyle>;
  label?: string;                 // opcional
  children?: React.ReactNode;     // opcional
};

const R = 16;

export default function CosmicButton({
  label,
  children,
  onPress,
  disabled,
  width = 160,
  style,
}: Props) {
  const text = (children ?? label ?? "OK") as React.ReactNode;

  return (
    <View style={[styles.container, { opacity: disabled ? 0.6 : 1}, style]}>
      {/* Borda/halo */}
      <LinearGradient
        colors={["#0B3D91", "#2A2D6B", "#5A189A"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.animatedBorder}
      />

      {/* Corpo “glass” */}
      <View style={[styles.innerWrap, { width }]}>
        <BlurView intensity={Platform.OS === "ios" ? 30 : 20} tint="dark" style={styles.blur} />
        <LinearGradient
          colors={["rgba(255,255,255,0.05)", "rgba(255,255,255,0.02)"]}
          style={StyleSheet.absoluteFill}
        />

        {/* estrelinhas */}
        <View pointerEvents="none" style={StyleSheet.absoluteFillObject}>
          <View style={[styles.star, { top: 6, left: 12 }]} />
          <View style={[styles.star, { top: 12, right: 18, width: 3, height: 3 }]} />
          <View style={[styles.star, { bottom: 10, left: 38, opacity: 0.7 }]} />
          <View style={[styles.star, { bottom: 14, right: 46, width: 2, height: 2, opacity: 0.6 }]} />
        </View>

        <Pressable
          accessibilityRole="button"
          disabled={disabled}
          onPress={onPress}
          android_ripple={{ borderless: false }}
          style={({ pressed }) => [styles.press, pressed && { transform: [{ scale: 0.98 }] }]}
        >
          <Text style={styles.label}>{text}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { borderRadius: R, alignItems: "center", overflow: "visible", alignSelf: "center" },
  animatedBorder: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: R,
    shadowColor: "#2A2D6B",
    shadowOpacity: 0.45,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
  innerWrap: {
    borderRadius: R,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(0,229,255,0.3)",
  },
  blur: { ...StyleSheet.absoluteFillObject, borderRadius: R },
  press: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "CAPITOLCITY",
    letterSpacing: 0.3,
  },
  star: {
    position: "absolute",
    width: 2.5,
    height: 2.5,
    borderRadius: 2.5,
    backgroundColor: "white",
  },
});
