// lib/playGames.ts — espelha as medalhas do app como conquistas do Google Play Games.
// As medalhas continuam funcionando sem o Play Games; isto é só um extra.
import PlayGames from "../modules/play-games";
import { getStats, type Stats } from "./progress";

// ⚠️ IDs das conquistas criadas no Play Console (Play Games Services → Conquistas).
// Cada ID tem o formato "CgkI...". Enquanto um ID estiver vazio, a medalha não é enviada.
// "steps" = conquista progressiva (o total de etapas no Console deve ser igual).
const ACHIEVEMENTS: Record<string, { id: string; steps?: (s: Stats) => number }> = {
  decolagem: { id: "" },
  explorador: { id: "" },
  pouso_lunar: { id: "" },
  supernova: { id: "" },
  maratona: { id: "" },
  cometa: { id: "" },
  viajante: { id: "" },
  constelacao: { id: "", steps: (s) => s.games }, // 25 etapas
  chuva_acertos: { id: "", steps: (s) => s.totalCorrect }, // 100 etapas
  astronomo: { id: "", steps: (s) => s.seen.length }, // 200 etapas
};

let signedIn = false;

export function playGamesAvailable() {
  return !!PlayGames && PlayGames.isConfigured();
}

/** Envia todas as medalhas e progressos atuais (setSteps/unlock não duplicam nada). */
export function syncAchievements(stats: Stats) {
  if (!signedIn || !PlayGames) return;
  for (const [medal, a] of Object.entries(ACHIEVEMENTS)) {
    if (!a.id) continue;
    if (a.steps) {
      const n = a.steps(stats);
      if (n > 0) PlayGames.setSteps(a.id, n);
    }
    if (stats.unlocked[medal]) PlayGames.unlock(a.id);
  }
}

/** Ao abrir o app: o Play Games tenta entrar sozinho e, se der certo, sincroniza. */
export async function initPlayGames() {
  if (!playGamesAvailable()) return;
  try {
    signedIn = await PlayGames!.isAuthenticated();
    if (signedIn) syncAchievements(await getStats());
  } catch {}
}

export function isSignedIn() {
  return signedIn;
}

/** Botão "Entrar no Play Games" (quando o login automático não aconteceu). */
export async function signInPlayGames() {
  if (!playGamesAvailable()) return false;
  try {
    signedIn = await PlayGames!.signIn();
    if (signedIn) syncAchievements(await getStats());
  } catch {
    signedIn = false;
  }
  return signedIn;
}

export function showPlayGamesAchievements() {
  return PlayGames?.showAchievements() ?? Promise.resolve(false);
}
