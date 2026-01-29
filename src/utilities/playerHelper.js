/*
  This file contains helper logic for determining relationships between players 
  (identifying the opponent of the current player).
*/


const getOpponent = (currentPlayer) => {
  return currentPlayer === "PLAYER_1"
    ? "PLAYER_2"
    : "PLAYER_1";
};

export { getOpponent };