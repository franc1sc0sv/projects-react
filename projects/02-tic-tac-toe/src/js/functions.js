import { winCombinations } from "./constans.js";

export const checkEndGame = (newBoard) => newBoard.every((x) => x != null);

export const checkWinner = (newBoard) => {
  for (let combo of winCombinations) {
    let [a, b, c] = combo;
    if (
      newBoard[a] &&
      newBoard[a] === newBoard[b] &&
      newBoard[a] === newBoard[c]
    ) {
      return newBoard[a];
    }
  }
};
