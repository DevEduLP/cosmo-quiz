// components/questionario/Pergunta.tsx
import React from 'react'
import { View } from 'react-native'
import PerguntaModel from '@/data/model/Pergunta'
import Enunciado from './Enunciado'
import Opcao from './Opcao'

export interface PerguntaProps {
  pergunta: PerguntaModel
  onSelecionar: (indice: number) => void
  selecionada?: number | null
  locked?: boolean
}

export default function Pergunta({
  pergunta,
  onSelecionar,
  selecionada = null,
  locked = false,
}: PerguntaProps) {
  return (
    <View style={{ gap: 25 }}>
      <Enunciado enunciado={pergunta.enunciado} />
      <View style={{ gap: 15 }}>
        {pergunta.opcoes.map((opcao, indice) => (
          <Opcao
            key={indice}
            indice={indice}
            texto={opcao}
            selected={selecionada === indice}
            disabled={locked}
            onPress={() => onSelecionar(indice)}
          />
        ))}
      </View>
    </View>
  )
}
