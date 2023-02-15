import React, { useState, useEffect } from 'react'
import { Modal } from './Modal.jsx'
import { TurnMarker } from './TurnMarker.jsx'
import confetti from 'canvas-confetti'
import { turns } from '../js/constans.js'
import { checkEndGame, checkWinner } from '../js/functions.js'
import { Square } from './Square.jsx'
import { saveGameStorage, resetGameStorage } from '../js/storage.js'

export const App = () => {
  const [turn, SetTurn] = useState(() => {
    const turnLocalStorage = window.localStorage.getItem('turn')
    return turnLocalStorage ?? turns.x
  })
  const [board, SetBoard] = useState(() => {
    const BoardLocalStorage = window.localStorage.getItem('board')
    console.log(BoardLocalStorage)
    return JSON.parse(BoardLocalStorage) ?? Array(9).fill(null)
  })
  const [winner, SetWinner] = useState(null)

  const updateBoard = (i) => {
    if (board[i] || winner) return
    const newBoard = [...board]
    newBoard[i] = turn
    SetBoard(newBoard)

    const newTurn = turn === turns.x ? turns.o : turns.x
    SetTurn(newTurn)
    saveGameStorage({ board: newBoard, turn: newTurn })
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      SetWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      SetWinner(false)
    }
  }

  const resetBoard = () => {
    SetWinner(null)
    SetTurn(turns.x)
    SetBoard(Array(9).fill(null))
    resetGameStorage()
  }

  // Solo se va a ejecutar cuando haya cambios en winner y cunado se incia el componente
  useEffect(() => {
    console.log(`winner ${winner}`)
  }, [winner])
  // Se va a rendeizar cada ves que se renderiza el compoenente
  // useEffect(()=>{})

  return (
    <article className='w-full h-screen flex items-center flex-col justify-center bg-[#D7CFF9]'>
      <div className=' w-auto h-auto justify-center items-center flex flex-col gap-5'>
        <h1 className=' text-3xl text-[#5746AF] font-bold'>Tic-Tac-Toe</h1>

        <div className='flex w-full justify-between items-center'>
          <div className='flex'>
            <TurnMarker turn={turns.x} isSelected={turn === turns.x} />
            <TurnMarker turn={turns.o} isSelected={turn === turns.o} />
          </div>
          <button
            className='font-bold px-4 py-2 bg-[#5746AF] rounded-lg text-white '
            onClick={resetBoard}
          >
            Reset game
          </button>
        </div>

        <div className='grid grid-cols-3 gap-2'>
          {board.map((x, i) => {
            return (
              <Square key={i} updateBoard={updateBoard} i={i}>
                {x}
              </Square>
            )
          })}
        </div>
      </div>

      <Modal winner={winner} resetGame={resetBoard} />
    </article>
  )
}
