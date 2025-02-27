import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles.ts'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 24px;
`

export const BotaoTema = styled.button`
  font-weight: bold;
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 16px;
  background-color: #282a35;
  cursor: pointer;
  border: none;
`

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
