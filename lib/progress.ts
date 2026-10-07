// lib/progress.ts — medalhas e sequência de dias (tudo salvo só no aparelho)
import AsyncStorage from "@react-native-async-storage/async-storage";
import perguntasPT from "../data/constants/perguntas";

const KEY = "cosmo.progress";
const TOTAL_QUESTIONS = perguntasPT.length;

export type Stats = {
  games: number;
  totalCorrect: number;
  seen: number[]; // ids de perguntas já respondidas
  dayStreak: number;
  bestDayStreak: number;
  lastPlayDay: string | null; // "AAAA-MM-DD" no horário local
  dailyStreak: number; // dias seguidos jogando o Desafio do Dia
  lastDailyDay: string | null;
  unlocked: Record<string, number>; // id da medalha -> data (ms)
};

export type GameSummary = {
  total: number;
  correct: number;
  nivel: "iniciante" | "medio";
  daily: boolean;
  answers: { id: number; escolhida: number; correta: number }[];
};

type Medal = {
  id: string;
  emoji: string;
  // condição avaliada depois de cada partida
  earned: (s: Stats, g: GameSummary) => boolean;
  // progresso opcional para medalhas de contagem: [atual, meta]
  progress?: (s: Stats) => [number, number];
};

function bestRun(answers: GameSummary["answers"]) {
  let run = 0;
  let best = 0;
  for (const a of answers) {
    run = a && a.escolhida === a.correta ? run + 1 : 0;
    best = Math.max(best, run);
  }
  return best;
}

export const MEDALS: Medal[] = [
  { id: "decolagem", emoji: "🚀", earned: (s) => s.games >= 1 },
  { id: "explorador", emoji: "🪐", earned: (_, g) => g.nivel === "medio" },
  { id: "pouso_lunar", emoji: "🌕", earned: (_, g) => g.total >= 10 && g.correct === g.total },
  { id: "supernova", emoji: "⭐", earned: (_, g) => bestRun(g.answers) >= 10 },
  { id: "maratona", emoji: "🛰️", earned: (_, g) => g.total >= 35 },
  {
    id: "cometa",
    emoji: "☄️",
    earned: (s) => s.dailyStreak >= 3,
    progress: (s) => [Math.min(s.dailyStreak, 3), 3],
  },
  {
    id: "viajante",
    emoji: "🌌",
    earned: (s) => s.dayStreak >= 7,
    progress: (s) => [Math.min(s.dayStreak, 7), 7],
  },
  {
    id: "constelacao",
    emoji: "✨",
    earned: (s) => s.games >= 25,
    progress: (s) => [Math.min(s.games, 25), 25],
  },
  {
    id: "chuva_acertos",
    emoji: "🌠",
    earned: (s) => s.totalCorrect >= 100,
    progress: (s) => [Math.min(s.totalCorrect, 100), 100],
  },
  {
    id: "astronomo",
    emoji: "🔭",
    earned: (s) => s.seen.length >= TOTAL_QUESTIONS,
    progress: (s) => [Math.min(s.seen.length, TOTAL_QUESTIONS), TOTAL_QUESTIONS],
  },
];

const EMPTY: Stats = {
  games: 0,
  totalCorrect: 0,
  seen: [],
  dayStreak: 0,
  bestDayStreak: 0,
  lastPlayDay: null,
  dailyStreak: 0,
  lastDailyDay: null,
  unlocked: {},
};

function dayKey(d: Date) {
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function yesterdayKey(now: Date) {
  const y = new Date(now);
  y.setDate(y.getDate() - 1);
  return dayKey(y);
}

/** Sequência que ainda vale hoje (zera se a pessoa pulou um dia). */
function liveStreak(streak: number, last: string | null, now = new Date()) {
  return last === dayKey(now) || last === yesterdayKey(now) ? streak : 0;
}

export async function getStats(): Promise<Stats> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    const s: Stats = raw ? { ...EMPTY, ...JSON.parse(raw) } : { ...EMPTY };
    return {
      ...s,
      dayStreak: liveStreak(s.dayStreak, s.lastPlayDay),
      dailyStreak: liveStreak(s.dailyStreak, s.lastDailyDay),
    };
  } catch {
    return { ...EMPTY };
  }
}

/** Registra uma partida terminada e devolve as medalhas recém-conquistadas. */
export async function recordGame(g: GameSummary) {
  const s = await getStats();
  const now = new Date();
  const today = dayKey(now);
  const yesterday = yesterdayKey(now);

  s.games += 1;
  s.totalCorrect += g.correct;
  s.seen = Array.from(new Set([...s.seen, ...g.answers.filter(Boolean).map((a) => a.id)]));

  if (s.lastPlayDay !== today) {
    s.dayStreak = s.lastPlayDay === yesterday ? s.dayStreak + 1 : 1;
    s.lastPlayDay = today;
  }
  s.bestDayStreak = Math.max(s.bestDayStreak, s.dayStreak);

  if (g.daily && s.lastDailyDay !== today) {
    s.dailyStreak = s.lastDailyDay === yesterday ? s.dailyStreak + 1 : 1;
    s.lastDailyDay = today;
  }

  const newMedals = MEDALS.filter((m) => !s.unlocked[m.id] && m.earned(s, g));
  newMedals.forEach((m) => (s.unlocked[m.id] = Date.now()));

  await AsyncStorage.setItem(KEY, JSON.stringify(s)).catch(() => {});
  return { newMedals, stats: s };
}
