import React from 'react'
import Paragrafo from '../Paragrafo/index.tsx'
import Titulo from '../Titulo/index.tsx'
import styled from 'styled-components'
import { Card, LinkBotao } from './styles.ts'

const Projeto = () => (
  // eslint-disable-next-line prettier/prettier
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundaria">Lista de tarefas feita com VueJs</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
