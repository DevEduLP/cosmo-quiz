// data/model/Pergunta.ts
export default interface Pergunta {
    id: number
    enunciado: string
    opcoes: string[]
    resposta: number
    nivel?: 'iniciante' | 'medio' | 'avancado'
    explicacao?: string
  }
  
