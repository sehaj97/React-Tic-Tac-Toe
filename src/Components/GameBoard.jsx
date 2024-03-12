export default function GameBoard({ onSelectSquare, gameBoard }) {
    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (<li key={rowIndex}>
            <ol>
                {
                    row.map((playerSymbol, cellIndex) => (<li key={cellIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, cellIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                    </li>))}
            </ol>
        </li >))
        }
    </ol >
}