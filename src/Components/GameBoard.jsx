import { useState } from "react"

// const initialGameBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
// ]
export default function GameBoard({ onSelectSquare, gameBoard }) {
    // let initGameBoard = initialGameBoard;
    // for (const turn of gameTurns) {
    //     const { selectedSquare, player } = turn;
    //     const { row, col } = selectedSquare;
    //     initGameBoard[row][col] = player;
    // }
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
// one more way to handle player switch
// import { useState } from "react"

// const initialGameBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
// ]
// export default function GameBoard({ onSelectPlayer, activePlayerSymbol }) {
//     const [initGameBoard, setInitGameBoard] = useState(initialGameBoard);
//     // const [turn, setTurn] = useState(false);
//     const handleClick = (row, cell) => {
//         // setInitGameBoard(
//         //     (prevBoard) => {
//         //         const newBoard = [...prevBoard.map(row => [...row])];
//         //         if (newBoard[row][cell] === null) {
//         //             if (turn) {
//         //                 if (newBoard[row][cell] === 'O') {
//         //                     return prevBoard;
//         //                 } else {
//         //                     newBoard[row][cell] = 'O';
//         //                     setTurn(false)
//         //                     return newBoard;
//         //                 }
//         //             } else {
//         //                 if (newBoard[row][cell] === 'X') {
//         //                     return prevBoard;
//         //                 } else {
//         //                     newBoard[row][cell] = 'X';
//         //                     setTurn(true)
//         //                     return newBoard;
//         //                 }
//         //             }
//         //         } else {
//         //             return prevBoard;
//         //         }
//         //     }
//         // )
//         setInitGameBoard((prevGameBoard) => {
//             const newBoard = [...prevGameBoard.map(row => [...row])];
//             newBoard[row][cell] = activePlayerSymbol;
//             return newBoard;
//         })
//         onSelectPlayer();
//     }
//     return <ol id="game-board">
//         {initGameBoard.map((row, rowIndex) => (<li key={rowIndex}>
//             <ol>
//                 {
//                     row.map((playerSymbol, cellIndex) => (<li key={cellIndex}>
//                         <button onClick={() => handleClick(rowIndex, cellIndex)}>{playerSymbol}</button>
//                     </li>))}
//             </ol>
//         </li >))
//         }
//     </ol >
// }