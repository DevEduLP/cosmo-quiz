// lib/ads.native.ts — anúncio intersticial (AdMob) no fim das rodadas.
// No web o app usa lib/ads.ts (sem anúncios).
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants, { ExecutionEnvironment } from "expo-constants";
import type { InterstitialAd } from "react-native-google-mobile-ads";

// O Expo Go não tem o módulo nativo do AdMob: lá o jogo roda sem anúncios.
const IN_EXPO_GO = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;
const Ads: typeof import("react-native-google-mobile-ads") | null = IN_EXPO_GO
  ? null
  : require("react-native-google-mobile-ads");

// ⚠️ IDs REAIS do bloco de anúncio (AdMob → Apps → Cosmo Quiz → Blocos de anúncios).
// Enquanto estiverem vazios, o build de produção NÃO mostra anúncios.
// Lembre de trocar também o androidAppId no app.json.
const PROD_INTERSTITIAL = Platform.select({
  android: "",
  ios: "",
  default: "",
});

// Builds de teste (dev, preview e apk no eas.json) usam os anúncios de teste do Google.
// Nunca clique nos seus próprios anúncios reais.
const USE_TEST_ADS = __DEV__ || process.env.EXPO_PUBLIC_ADS_TEST === "1";
const AD_UNIT = !Ads ? "" : USE_TEST_ADS ? Ads.TestIds.INTERSTITIAL : PROD_INTERSTITIAL;

// Regras de frequência
const FREE_ROUNDS = 1; // as primeiras rodadas de quem acabou de instalar não têm anúncio
const ROUNDS_BETWEEN_ADS = 2; // no máximo 1 anúncio a cada 2 rodadas
const MIN_INTERVAL_MS = 3 * 60 * 1000; // e pelo menos 3 minutos entre anúncios

const KEY_ROUNDS = "cosmo.ads.rounds";

let ad: InterstitialAd | null = null;
let loaded = false;
let started = false;
let totalRounds = 0;
let roundsSinceAd = 0;
let lastAdAt = 0;

function load() {
  if (!ad) return;
  loaded = false;
  ad.load();
}

/** Pede consentimento (Europa/Reino Unido), inicia o SDK e pré-carrega o anúncio. */
export async function initAds() {
  if (started || !Ads || !AD_UNIT) return;
  started = true;
  const { default: mobileAds, AdEventType, AdsConsent, InterstitialAd, MaxAdContentRating } = Ads;
  try {
    totalRounds = Number(await AsyncStorage.getItem(KEY_ROUNDS)) || 0;

    const consent = await AdsConsent.gatherConsent().catch(() => null);
    if (consent && !consent.canRequestAds) return;

    await mobileAds().setRequestConfiguration({
      maxAdContentRating: MaxAdContentRating.T, // público 13+
    });
    await mobileAds().initialize();

    ad = InterstitialAd.createForAdRequest(AD_UNIT);
    ad.addAdEventListener(AdEventType.LOADED, () => {
      loaded = true;
    });
    ad.addAdEventListener(AdEventType.ERROR, () => {
      loaded = false;
      setTimeout(load, 60 * 1000); // tenta de novo em 1 min
    });
    load();
  } catch {
    // sem anúncio não é erro: o jogo segue normalmente
  }
}

/** Chamar uma vez quando uma rodada termina (tela de resultado). */
export function registerRoundFinished() {
  totalRounds += 1;
  roundsSinceAd += 1;
  AsyncStorage.setItem(KEY_ROUNDS, String(totalRounds)).catch(() => {});
}

function shouldShow() {
  return (
    !!ad &&
    loaded &&
    totalRounds > FREE_ROUNDS &&
    roundsSinceAd >= ROUNDS_BETWEEN_ADS &&
    Date.now() - lastAdAt >= MIN_INTERVAL_MS
  );
}

/**
 * Mostra o anúncio se as regras permitirem e chama `next` quando ele fechar.
 * Se não houver anúncio, chama `next` na hora.
 */
export function showAdThen(next: () => void) {
  if (!Ads || !ad || !shouldShow()) {
    next();
    return;
  }
  const { AdEventType } = Ads;
  const current = ad;
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    unsubClosed();
    unsubError();
    next();
    load(); // prepara o próximo
  };
  const unsubClosed = current.addAdEventListener(AdEventType.CLOSED, finish);
  const unsubError = current.addAdEventListener(AdEventType.ERROR, finish);

  roundsSinceAd = 0;
  lastAdAt = Date.now();
  loaded = false;
  current.show().catch(finish);
}
