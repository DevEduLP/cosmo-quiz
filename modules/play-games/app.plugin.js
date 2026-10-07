// Config plugin do Play Games.
// projectId = "ID do projeto" do Play Games Services (Play Console → Play Games Services →
// Configuração e gerenciamento → Configuração). É um número, ex.: "123456789012".
// Sem projectId, o SDK fica desligado e o app funciona normalmente sem Play Games.
const { withAndroidManifest, withStringsXml, AndroidConfig } = require("expo/config-plugins");

const META_APP_ID = "com.google.android.gms.games.APP_ID";
const INIT_PROVIDER = "com.google.android.gms.games.provider.PlayGamesInitProvider";

module.exports = function withPlayGames(config, { projectId = "" } = {}) {
  const id = String(projectId).trim();

  config = withStringsXml(config, (c) => {
    if (id) {
      c.modResults = AndroidConfig.Strings.setStringItem(
        [{ $: { name: "game_services_project_id", translatable: "false" }, _: id }],
        c.modResults
      );
    }
    return c;
  });

  return withAndroidManifest(config, (c) => {
    const manifest = c.modResults.manifest;
    manifest.$["xmlns:tools"] = "http://schemas.android.com/tools";
    const app = AndroidConfig.Manifest.getMainApplicationOrThrow(c.modResults);

    app["meta-data"] = (app["meta-data"] || []).filter((m) => m.$["android:name"] !== META_APP_ID);
    app.provider = (app.provider || []).filter((p) => p.$["android:name"] !== INIT_PROVIDER);

    if (id) {
      app["meta-data"].push({
        $: { "android:name": META_APP_ID, "android:value": "@string/game_services_project_id" },
      });
    } else {
      // sem projeto configurado: não deixa o SDK iniciar sozinho
      app.provider.push({
        $: {
          "android:name": INIT_PROVIDER,
          "android:authorities": "${applicationId}.playgamesinitprovider",
          "tools:node": "remove",
        },
      });
    }
    return c;
  });
};
