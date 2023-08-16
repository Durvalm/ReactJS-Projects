import './global.css'
import { Header } from './components/Header/header'
import { List } from './components/List/list'
import { HeaderContainer } from './components/Header/styles'

function App() {

  return (
    <HeaderContainer>
      <Header />
      <List />
    </HeaderContainer>
  )
}

export default App
