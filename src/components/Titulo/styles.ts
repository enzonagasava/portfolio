import styled from 'styled-components'

import { Props } from '/index.tsx'

export const Titulo = styled.h3`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
`
