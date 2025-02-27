import React from 'react'
import Titulo from '../../components/Titulo/index.tsx'
import Avatar from '../../components/Avatar/index.tsx'
import P from '../../components/Paragrafo/index.tsx'
import { Descricao, BotaoTema, SideBarContainer } from './styles.ts'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar src="https://github.com/enzonagasava.png" />
      <Titulo fontSize={20}>Enzo Yuta Nagasava</Titulo>
      <P tipo="secundaria" fontSize={16}>
        enzonagasava
      </P>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-End
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
