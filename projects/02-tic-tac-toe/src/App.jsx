import React, { useState } from "react";
import { Modal } from "./Modal.jsx";
import { TurnMarker } from "./TurnMarker.jsx";

const Square = ({ children, updateBoard, i }) => {
  const handleClick = () => {
    updateBoard(i);
  };
  return (
    <div
      onClick={handleClick}
      className="w-24 h-24 bg-white rounded-lg flex items-center justify-center text-[#5746AF] font-semibold text-4xl cursor-pointer"
    >
      {children}
    </div>
  );
};

export const App = () => {
  const turns = { x: "❌", o: "⚪" };
  const [turn, SetTurn] = useState(turns.x);
  const [board, SetBoard] = useState(Array(9).fill(null));
  const [winner, SetWinner] = useState(null);

  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (newBoard) => {
    for (let combo of winCombinations) {
      let [a, b, c] = combo;
      console.log(newBoard[a]);
      console.log(newBoard[b]);
      console.log(newBoard[c]);
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
  };
  const updateBoard = (i) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = turn;
    SetBoard(newBoard);

    const newTurn = turn == turns.x ? turns.o : turns.x;
    SetTurn(newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      SetWinner(newWinner);
    }else if(checkEndGame(newBoard)){
      SetWinner(false)
    }
  };

  const resetBoard = () => {
    SetWinner(null);
    SetTurn(turns.x);
    SetBoard(Array(9).fill(null));
  };

  const checkEndGame = (newBoard) => newBoard.every((x) => x != null);

  return (
    <article className="w-full h-screen flex items-center flex-col justify-center bg-[#D7CFF9]">
      <div className=" w-auto h-auto justify-center items-center flex flex-col gap-5">
        <h1 className=" text-3xl text-[#5746AF] font-bold">Tic-Tac-Toe</h1>
        <div className="flex w-full justify-between items-center">
          <div className="flex">
            <TurnMarker
              turn={turns.x}
              isSelected={turn == turns.x ? true : false}
            ></TurnMarker>
            <TurnMarker
              turn={turns.o}
              isSelected={turn == turns.o ? true : false}
            ></TurnMarker>
          </div>
          <button
            className="font-bold px-4 py-2 bg-[#5746AF] rounded-lg text-white "
            onClick={resetBoard}
          >
            Reset game
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {board.map((x, i) => {
            return (
              <Square key={i} updateBoard={updateBoard} i={i}>
                {x}
              </Square>
            );
          })}
        </div>
      </div>
      {winner != null ? (
        <Modal
          winner={winner}
          initialValueShowModal
          resetGameFunction={resetBoard}
        ></Modal>
      ) : (
        ""
      )}
    </article>
  );
};
