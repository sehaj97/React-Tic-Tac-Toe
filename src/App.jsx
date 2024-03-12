import { useState } from "react"
import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"
import Log from "./Components/Log";
import { WINNING_COMBINATIONS as ways_to_win } from "./winning-combinations";
import GameOver from "./Components/GameOver";

const PLAYERS = {
  X: "player 1",
  O: "player 2"
}
const INITIAL_GAME_BOARD = [
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
function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(row => [...row])];
  for (const turn of gameTurns) {
    const { selectedSquare, player } = turn;
    const { row, col } = selectedSquare;
    gameBoard[row][col] = player;
  }

  return gameBoard
}
function deriveWinner(gameBoard, players) {
  let winner;
  for (const way_to_win of ways_to_win) {
    const firstSquare = gameBoard[way_to_win[0].row][way_to_win[0].column];
    const secondSquare = gameBoard[way_to_win[1].row][way_to_win[1].column];
    const thirdSquare = gameBoard[way_to_win[2].row][way_to_win[2].column];
    if (firstSquare && secondSquare == firstSquare && thirdSquare == firstSquare) {
      winner = players[firstSquare];
    }

  }
  return winner;
}
function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derivedActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length >= 9 && !winner;
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const newTurns = [{
        selectedSquare: {
          row: rowIndex, col: colIndex
        },
        player: activePlayer,
      }, ...prevTurns]

      return newTurns;

    });

  }
  function handleReset() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={PLAYERS.X} symbol='X' isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Player name={PLAYERS.O} symbol='O' isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onReset={handleReset} />}
        <GameBoard onSelectSquare={handleSelectSquare} gameTurns={gameTurns} gameBoard={gameBoard} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App
