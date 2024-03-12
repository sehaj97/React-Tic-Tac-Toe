export default function Log({ gameTurns }) {
    return <ol id="log">
        {gameTurns &&
            gameTurns.map((turn) => (
                <li key={`${turn.selectedSquare.row}${turn.selectedSquare.col}`}>
                    Player {turn.player} selected {turn.selectedSquare.row},{turn.selectedSquare.col}
                </li>)
            )
        }
    </ol>
}