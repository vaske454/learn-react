// import './App.css';
//da bi brojali kolko smo puta kliknuli na dugme, uveli smo ovo
import { useState } from 'react';

// // ovo je kreiranje komponente. Komponenta moze biti mala kao dugme ili cela stranica
// function MyButton() {
//   return (
//       <button>
//         I'm a button
//       </button>
//   );
// }
//
// // ovo je nestovanje (ugnezdjivanje komponente). <> je umesto wrapper div-a! Korisna stvar
// export default function MyApp() {
//   return (
//       <>
//         <h1>Welcome to my app</h1>
//         <MyButton /><br/>
//         <img className="avatar" src="https://i.imgur.com/yXOvdOSs.jpg" alt="Photo of Hedy Lamarr" /><br/>
//       </>
//   );
// }

// const user = {
//     name: 'Hedy Lamarr',
//     imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//     imageSize: 90,
// };
//
// export default function Profile() {
//     return (
//         <>
//             <h1>{user.name}</h1>
//             <img
//                 className="avatar"
//                 src={user.imageUrl}
//                 alt={'Photo of ' + user.name}
//                 style={{
//                     width: user.imageSize,
//                     height: user.imageSize
//                 }}
//             />
//         </>
//     );
// }
// const products = [
//     { title: 'Cabbage', isFruit: false, id: 1 },
//     { title: 'Garlic', isFruit: false, id: 2 },
//     { title: 'Apple', isFruit: true, id: 3 },
// ];
//
// export default function ShoppingList() {
//     // ova konstanta moze da ide I van export default-a
//     const listItems = products.map(product =>
//         <li
//             key={product.id}
//             style={{
//                 color: product.isFruit ? 'magenta' : 'darkgreen'
//             }}
//         >
//             {product.title}
//         </li>
//     );
//
//     return (
//         <ul>{listItems}</ul>
//     );
// }

// export default function MyApp() {
//     return (
//         <div>
//             <h1>Counters that update separately</h1>
//             <MyButton />
//             <MyButton />
//         </div>
//     );
// }
//
// function MyButton() {
//     const [count, setCount] = useState(0);
//
//     function handleClick() {
//         setCount(count + 1);
//     }
//
//     return (
//         <button onClick={handleClick}>
//             Clicked {count} times
//         </button>
//     );
// }

// export default function MyApp() {
//     const [count, setCount] = useState(0);
//
//     function handleClick() {
//         setCount(count + 1);
//     }
//
//     return (
//         <div>
//             <h1>Counters that update together</h1>
//             <MyButton count={count} onClick={handleClick} />
//             <MyButton count={count} onClick={handleClick} />
//         </div>
//     );
// }
//
// function MyButton({ count, onClick }) {
//     return (
//         <button onClick={onClick}>
//             Clicked {count} times
//         </button>
//     );
// }

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

function Board({ xIsNext, squares, onPlay }) {
    // const [xIsNext, setXIsNext] = useState(true);
    // const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}