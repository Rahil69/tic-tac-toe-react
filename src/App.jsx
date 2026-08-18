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

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // array of 9 spaces filled with null
  const [xIsNext, setxIsNext] = useState(true); // to alternate between X and O
  function handleClick(i) {
    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O"); // if XisNext = true nextSquares[i] = X else itll be O
    setSquares(nextSquares);
    // better to do prev => !prev but this works too
    setxIsNext(!xIsNext);
  }
  return (
    <>
      {/* Render the actual board on the main page */}
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
