import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export interface OpcaoProps {
  indice?: number
  texto: string
  onPress: () => void
  bgOpacity?: number
  selected?: boolean
  disabled?: boolean
}

export default function Opcao({
  indice,
  texto,
  onPress,
  bgOpacity = 0.85,
  selected = false,
  disabled = false,
}: OpcaoProps) {
  const innerOpacity = selected ? Math.min(1, bgOpacity + 0.15) : bgOpacity
  const glowOpacity = selected ? 0.6 : 0.45

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={indice != null ? `Alternativa ${indice + 1}: ${texto}` : texto}
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.shadow,
        { shadowOpacity: glowOpacity },
        pressed && !disabled && { opacity: 0.9 },
      ]}
    >
      <LinearGradient
        colors={selected ? ['#7C3AED', '#00FFA3', '#00E5FF'] : ['#00E5FF', '#7C3AED', '#00FFA3']}
        locations={[0, 0.6, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.spaceBorder}
      >
        <LinearGradient
          colors={[`rgba(0,0,0,${innerOpacity})`, `rgba(2,13,79,${innerOpacity})`]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.inner,
            selected && styles.innerSelected,
            // ✅ só “apaga” as NÃO selecionadas quando locked/disabled
            disabled && !selected && { opacity: 0.6 },
          ]}
        >
          <View pointerEvents="none" style={StyleSheet.absoluteFillObject}>
            <View style={[styles.star, { top: 6, left: 14 }]} />
            <View style={[styles.star, { top: 12, right: 22, width: 3, height: 3 }]} />
            <View style={[styles.star, { bottom: 8, left: 40, opacity: 0.7 }]} />
            <View style={[styles.star, { bottom: 12, right: 42, width: 2, height: 2, opacity: 0.6 }]} />
          </View>

          {/* Texto sempre branco e legível */}
          <Text style={[styles.texto, selected && styles.textoSelected]}>{texto}</Text>
        </LinearGradient>
      </LinearGradient>
    </Pressable>
  )
}

const R = 50

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7C3AED',
    shadowOpacity: 0.45,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
    borderRadius: R,
  },
  spaceBorder: {
    borderRadius: R,
    padding: 1,
  },
  inner: {
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 520,
    alignSelf: 'center',
  },
  innerSelected: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.45)',
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textoSelected: {
    textShadowColor: 'rgba(255,255,255,0.25)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },
  star: {
    position: 'absolute',
    width: 2.5,
    height: 2.5,
    borderRadius: 2.5,
    backgroundColor: 'white',
  },
})
