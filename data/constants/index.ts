// data/constants/index.ts
import { getLang } from "../../src/i18n";
import perguntasPT from "./perguntas";
import perguntasEN from "./perguntas_en";
const perguntas = getLang() === "pt" ? perguntasPT : perguntasEN;
export default perguntas;
