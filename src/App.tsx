import React from 'react'
import EstiloGlobal from './styles.ts'
import Sidebar from './containers/Sidebar/index.tsx'
import Sobre from './containers/Sobre/index.tsx'
import Projetos from './containers/Projetos/index.tsx'
import { Container } from './styles.ts'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
