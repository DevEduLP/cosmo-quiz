import * as Localization from "expo-localization";

export type Lang = "pt" | "en";

function getLanguageTag(): string {
  const anyLoc = Localization as any;
  if (typeof anyLoc.getLocales === "function") {
    const arr = anyLoc.getLocales();
    if (Array.isArray(arr) && arr[0]?.languageTag) return arr[0].languageTag;
  }
  return anyLoc.locale ?? "en";
}

const tag = getLanguageTag();
let current: Lang = tag.toLowerCase().startsWith("pt") ? "pt" : "en";

export const setLang = (l: Lang) => { current = l; };
export const getLang = (): Lang => current;
export const getLocale = () => (current === "pt" ? "pt-BR" : "en-US");


type Dict = Record<string, string>;

const pt: Dict = {
  // --- App ---
  app_title: "Cosmo Quiz",

  // --- Home ---
  "home.title": "Cosmo Quiz",
  "home.subtitle": "Perguntas rápidas sobre o Universo",
  "home.play": "Jogar Agora",
  "home.history": "Últimos Resultados",

  // --- Modal: jogar ---
  "modal.title": "Quantas perguntas?",
  "modal.hint": "Ou defina um número (5 a 50):",
  "modal.difficulty": "Dificuldade",
  "modal.dailyToggle": "Desafio do dia (mesmo conjunto p/ todos)",
  "modal.cancel": "Cancelar",
  "modal.start": "Começar",

  // --- Dificuldade ---
  "difficulty.beginner": "Iniciante",
  "difficulty.medium": "Médio",

  // --- Quiz ---
  "quiz.next": "Próxima",
    "quiz.finish": "Finalizar",
    "quiz.question": "Pergunta",
    "quiz.of": "de",
    "quiz.correct": "Acertos",
    "quiz.daily_badge": "Desafio do dia",

  // --- Badge (correto/errado) ---
  "review.badge_correct": "Acertou",
  "review.badge_wrong": "Errou",

  // --- Result ---
  "result.title": "Resultado",
  "result.see_explanations": "Ver explicações",
  "result.home": "Início",
  "result.play_again": "Jogar novamente",
  "result.share_result": "Compartilhar resultado",
  "result.scored_percent": "Você acertou {{percent}}%",
  "share.dialog_title": "Meu resultado no Cosmo Quiz",

  // --- Review ---
  "review.title": "Revisão da Partida",
  "review.your_answer": "Sua resposta",
  "review.correct_answer": "Correta",
  "review.explanation": "Explicação",
  "review.no_explanation": "Ainda sem explicação para esta pergunta.",
  "review.empty": "Nada para revisar.",
  "review.home": "Início",

  // --- History ---
  "last_results": "Últimos Resultados",
  "empty_history": "Sem resultados ainda. Jogue uma partida!",
  "clear_history": "Limpar histórico",
  "clear_history_msg": "Deseja apagar os últimos resultados?",
  "cancel": "Cancelar",
  "delete": "Apagar",
  "home": "Início",
  "play_now": "Jogar",

  "result.percent": "Você acertou {{percent}}%",

};



const en: Dict = {
  // --- App ---
  app_title: "Cosmo Quiz",

  // --- Home ---
  "home.title": "Cosmo Quiz",
  "home.subtitle": "Fast questions about the Universe",
  "home.play": "Play Now",
  "home.history": "Recent Results",

  // --- Modal: play ---
  "modal.title": "How many questions?",
  "modal.hint": "Or set a number (5 to 50):",
  "modal.difficulty": "Difficulty",
  "modal.dailyToggle": "Daily challenge (same set for everyone)",
  "modal.cancel": "Cancel",
  "modal.start": "Start",

  // --- Difficulty ---
  "difficulty.beginner": "Beginner",
  "difficulty.medium": "Medium",

  // --- Quiz ---
  "quiz.next": "Next",
"quiz.finish": "Finish",
"quiz.question": "Question",
"quiz.of": "of",
"quiz.correct": "Correct",
"quiz.daily_badge": "Daily challenge",

  // --- Badge ---
  "badge.correct": "Correct",
  "badge.wrong": "Wrong",

  // --- Result ---
  "result.title": "Result",
  "result.see_explanations": "See Explanations",
  "result.home": "Home",
  "result.play_again": "Play again",
  "result.share_result": "Share result",
  "result.scored_percent": "You scored {{percent}}%",
  "share.dialog_title": "My Cosmo Quiz result",

  // --- Review ---
  "review.title": "Match Review",
  "review.your_answer": "Your answer",
  "review.correct_answer": "Correct",
  "review.explanation": "Explanation",
  "review.no_explanation": "No explanation available for this question yet.",
  "review.empty": "Nothing to review.",
  "review.home": "Home",

  // --- History ---
  "last_results": "Recent Results",
  "empty_history": "No results yet. Play a match!",
  "clear_history": "Clear History",
  "clear_history_msg": "Do you want to delete recent results?",
  "cancel": "Cancel",
  "delete": "Delete",
  "home": "Home",
  "play_now": "Play Now",

  "result.percent": "You scored {{percent}}%",

};

const dicts: Record<Lang, Dict> = { pt, en };

// Interpolação simples: t("key", { x: "valor" })
export function t(key: string, vars?: Record<string, string | number>) {
  const dict = dicts[current] || dicts.en;
  let out = dict[key] ?? key; // se faltar chave, mostra a própria key (melhor que quebrar)
  if (vars) {
    Object.keys(vars).forEach((k) => {
      out = out.replaceAll(`{{${k}}}`, String(vars[k]));
    });
  }
  return out;
}
