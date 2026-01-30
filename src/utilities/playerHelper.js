/*
  This file contains helper logic for determining relationships between players 
  (identifying the opponent of the current player).
*/


function getOpponent(player) {
  return player === "PLAYER_1" ? "PLAYER_2" : "PLAYER_1";
}

export { getOpponent };
