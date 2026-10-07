// Contorna um bug do react-native-google-mobile-ads 17.2 no Android com Expo:
// sem a chave "react-native-google-mobile-ads" no topo do app.json, o build.gradle
// da biblioteca lê uma propriedade inexistente e o Gradle falha. Definindo
// RNGMA_ANDROID_BACKEND, a biblioteca usa esse valor e nem chega nessa leitura.
// Pode ser removido quando a biblioteca corrigir (veja android/build.gradle dela).
const { withGradleProperties } = require("expo/config-plugins");

module.exports = function withAdsAndroidBackend(config) {
  return withGradleProperties(config, (c) => {
    c.modResults = c.modResults.filter(
      (p) => !(p.type === "property" && p.key === "RNGMA_ANDROID_BACKEND")
    );
    c.modResults.push({ type: "property", key: "RNGMA_ANDROID_BACKEND", value: "classic" });
    return c;
  });
};
