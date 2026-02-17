// lib/history.ts
import AsyncStorage from "@react-native-async-storage/async-storage";

export type QuizResult = {
  id: string;           // uuid simples
  pontos: number;
  total: number;
  perc: number;         // 0..1
  ts: number;           // Date.now()
};

const KEY = "cosmo.history";

export async function addResult(pontos: number, total: number) {
  const perc = total > 0 ? pontos / total : 0;
  const item: QuizResult = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    pontos,
    total,
    perc,
    ts: Date.now(),
  };
  const raw = await AsyncStorage.getItem(KEY);
  const arr: QuizResult[] = raw ? JSON.parse(raw) : [];
  const next = [item, ...arr].slice(0, 10); // mantém só 10
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
}

export async function getLastResults(): Promise<QuizResult[]> {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function clearHistory() {
  await AsyncStorage.removeItem(KEY);
}
