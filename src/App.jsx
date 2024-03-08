import Player from "./Components/Player"

function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol='X' />
          <Player name="Player 2" symbol='O' />
        </ol>
        GAME BOARD
      </div>
      LOGS
    </main>
  )
}

export default App
