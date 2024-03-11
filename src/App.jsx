import { useState } from "react"
import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"

function App() {
  const [activePlayer, setActivePlayer] = useState('X')
  function handleSelectSquare() {
    // activePlayer === 'X' ? setActivePlayer('O') : setActivePlayer('X');
    setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol='X' isActive={activePlayer === 'X'} />
          <Player name="Player 2" symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectPlayer={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      LOGS
    </main>
  )
}

export default App
