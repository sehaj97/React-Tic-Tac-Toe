import { useState } from "react"
import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"
import Log from "./Components/Log";
import { WINNING_COMBINATIONS as ways_to_win } from "./winning-combinations";
import GameOver from "./Components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer;
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derivedActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(row => [...row])];
  for (const turn of gameTurns) {
    const { selectedSquare, player } = turn;
    const { row, col } = selectedSquare;
    gameBoard[row][col] = player;
  }
  let winner;
  for (const way_to_win of ways_to_win) {
    const firstSquare = gameBoard[way_to_win[0].row][way_to_win[0].column];
    const secondSquare = gameBoard[way_to_win[1].row][way_to_win[1].column];
    const thirdSquare = gameBoard[way_to_win[2].row][way_to_win[2].column];
    if (firstSquare && secondSquare == firstSquare && thirdSquare == firstSquare) {
      winner = firstSquare;
    }

  }
  const hasDraw = gameTurns.length >= 9 && !winner;
  function handleSelectSquare(rowIndex, colIndex) {
    // // activePlayer === 'X' ? setActivePlayer('O') : setActivePlayer('X');
    // setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
      const newTurns = [{
        selectedSquare: {
          row: rowIndex, col: colIndex
        },
        // player: activePlayer, We can't do this because we are merging two different states
        player: activePlayer,
      }, ...prevTurns]

      return newTurns;

    });

  }
  function handleReset() {
    setGameTurns([]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol='X' isActive={activePlayer === 'X'} />
          <Player name="Player 2" symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onReset={handleReset} />}
        <GameBoard onSelectSquare={handleSelectSquare} gameTurns={gameTurns} gameBoard={gameBoard} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App
