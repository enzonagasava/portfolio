import { P } from './styles.ts'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundaria'
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)
export default Paragrafo
