import React, { useState } from "react";
import { TurnMarker } from "./TurnMarker.jsx";

export const Modal = ({ winner, resetGame }) => {
  if (winner == null) return null;
  const [showModal, setShowModal] = useState(true);
  console.log(setShowModal)
  const closeModal = () => setShowModal(false);
  
  return (
    <>
      {showModal ? (
        <>
          {console.log("rendered model")}
          <div className="modal opacity-100 fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
              <div className="modal-content py-4 text-left px-6 flex flex-col gap-3">
                <div className="flex justify-between items-center pb-3">
                  <p className="text-2xl font-bold"></p>
                  <div className="modal-close cursor-pointer z-50">
                    <svg
                      onClick={closeModal}
                      className="fill-current text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                  </div>
                </div>
                <div className="w-full h-auto flex-col flex justify-center items-center gap-4">
                  {winner ? (
                    <>
                      <p className="text-2xl font-bold">El ganador es:</p>
                      <TurnMarker turn={winner} isSelected={false}></TurnMarker>
                    </>
                  ) : (
                    <p className="text-2xl font-bold">Empate</p>
                  )}
                </div>
                <div className="flex justify-end pt-2 gap-2">
                  <button
                    className="modal-close font-bold  px-4 bg-[#5746AF] p-3 rounded-lg text-white "
                    onClick={resetGame}
                  >
                    Reset game
                  </button>

                  <button
                    className="modal-close font-bold  px-4 bg-[#5746AF] p-3 rounded-lg text-white "
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
