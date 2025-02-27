import React from 'react'
import Titulo from '../../components/Titulo/index.tsx'
import Avatar from '../../components/Avatar/index.tsx'
import P from '../../components/Paragrafo/index.tsx'
import { Descricao, BotaoTema, SideBarContainer } from './styles.ts'

type Props = {
  trocaTema: () => void;
}

const Sidebar = (props: Props) => (
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
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
