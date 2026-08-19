import React, { useState } from "react";

// so this function renders the buttons on the board and takes 2 props value and onSquareClick which will be a function
// and the value will be a stateful array inside of the board Function
function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // array of 9 spaces filled with null
  const [xIsNext, setxIsNext] = useState(true); // to alternate between X and O
  function handleClick(i) {
    const nextSquares = squares.slice();

    // if XisNext = true nextSquares[i] = X else itll be O
    // this if statement stops the function if the position is not null in the squares state.
    if (squares[i]) {
      return;
    }
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    setSquares(nextSquares);

    // better to do prev => !prev but this works too
    setxIsNext(!xIsNext);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      {/* Render the actual board on the main page */}
      <div>{status}</div>
      <div className="board-row">
        {/* onSquareClick passes the handleClick function down the Square component arrow function to pass it as a callback */}
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
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <ol></ol>
        </div>
      </div>
    </>
  );
}
