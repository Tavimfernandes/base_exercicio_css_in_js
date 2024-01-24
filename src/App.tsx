import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './styles'
import temaDefault from './themes/default'

function App() {
  return (
    <ThemeProvider theme={temaDefault}>
      <EstiloGlobal />
      <Container>
        <Header />
        <Hero />
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
