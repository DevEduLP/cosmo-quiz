import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";

export interface ResultadoProps {
  pontuacao: number;
  totalDePerguntas: number;
  reiniciar: () => void;
}

export default function Resultado(props: ResultadoProps) {
  const { pontuacao, totalDePerguntas, reiniciar } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>VOCÊ ACERTOU</Text>
      <Text style={styles.destaque}>
        {Math.round((pontuacao / totalDePerguntas) * 100)}%
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 15,
  },
  texto: {
    color: "#bbb",
    fontSize: 20,
    fontFamily: 'CAPITOLCITY'
  },
  destaque: {
    color: "white",
    fontSize: 60,
    fontFamily: 'CAPITOLCITY',
  },
  botao: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 40,
  },
  textoBotao: {
    color: "white",
  },
});
