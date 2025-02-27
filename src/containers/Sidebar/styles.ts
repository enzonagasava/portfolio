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
  color: ${(props) => props.theme.corDeFundo};
  font-size: 16px;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
  border: none;
`

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
