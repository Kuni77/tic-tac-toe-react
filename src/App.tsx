import Header from './components/header'
import Game from './features/gameplay/game'
import './styles/global.css'
import './App.css'

function App() {

  return (
    <>
      <Header currentPlayer={'Kuni77'} />
      <Game />
    </>
  )
}

export default App
