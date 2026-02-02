/*
Central state machine for Tactical Roulette.
Handles game phases, player switching, stage progression, shooting logic, trivia resolution and win/lose conditions.
*/

import { createContext, useContext, useState } from "react";
import stageConfig from "../utilities/stageConfig";
import { spinChamber, isBulletFired } from "../utilities/rouletteLogic";
import { getOpponent } from "../utilities/playerHelper";

const GameContext = createContext();

function GameProvider({ children }) {
  // Game state
  const [gamePhase, setGamePhase] = useState("TITLE");
  const [stage, setStage] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("PLAYER_1");
  const [deadPlayer, setDeadPlayer] = useState(null);
  const [winner, setWinner] = useState(null);

  const [shotsTaken, setShotsTaken] = useState(0);
  const [bulletPosition, setBulletPosition] = useState(null);
  const [triviaAnswers, setTriviaAnswers] = useState(0);

  // Switch player
  function switchPlayer() {
    setCurrentPlayer((prev) => getOpponent(prev));
    setShotsTaken(0);
    setBulletPosition(spinChamber());
  }

  // Start game
  function startStage() {
    if (gamePhase !== "TITLE") return;

    setGamePhase("AVATAR_SELECT");
  }

  // Go to shooting after avatar selection
  function startShooting() {
    setStage(1);
    setShotsTaken(0);
    setBulletPosition(spinChamber());
    setGamePhase("TURN");
  }

  // Shooting logic
  function shoot() {
    if (gamePhase !== "TURN" || deadPlayer) return;

    const maxShots = stageConfig()[stage];
    if (shotsTaken >= maxShots) return;

    const nextShot = shotsTaken + 1;
    setShotsTaken(nextShot);

    const bulletHit = isBulletFired(nextShot, bulletPosition);

    if (bulletHit) {
      const killedPlayer = getOpponent(currentPlayer);

      setDeadPlayer(killedPlayer);
      setWinner(currentPlayer);
      setGamePhase("GAME_OVER");
      return;
    }

    // Keep shooting until all shots used
    if (nextShot < maxShots) return;

    // Turn ends
    if (currentPlayer === "PLAYER_1") {
      switchPlayer();
    } else {
      setGamePhase("TRIVIA");
      setTriviaAnswers(0);
      setCurrentPlayer("PLAYER_1");
    }
  }

  // Resolve trivia
  function resolveTrivia(isCorrect) {
    if (gamePhase !== "TRIVIA" || deadPlayer) return;

    if (!isCorrect) {
      setDeadPlayer(currentPlayer);
      setWinner(getOpponent(currentPlayer));
      setGamePhase("GAME_OVER");
      return;
    }

    const answered = triviaAnswers + 1;
    setTriviaAnswers(answered);

    if (answered === 1) {
      setCurrentPlayer("PLAYER_2");
      return;
    }

    // Both correct
    if (stage === 4) {
      setWinner("BOTH_SURVIVED");
      setGamePhase("WIN");
      return;
    }

    // Next stage
    setStage(stage + 1);
    setCurrentPlayer("PLAYER_1");
    setShotsTaken(0);
    setBulletPosition(spinChamber());
    setGamePhase("TURN");
  }

  // Reset game
  function resetGame() {
    setGamePhase("TITLE");
    setStage(null);
    setCurrentPlayer("PLAYER_1");
    setDeadPlayer(null);
    setWinner(null);
    setShotsTaken(0);
    setBulletPosition(null);
    setTriviaAnswers(0);
  }

  return (
    <GameContext.Provider
      value={{
        gamePhase,
        stage,
        currentPlayer,
        deadPlayer,
        winner,
        shotsTaken,
        bulletPosition,
        shoot,
        resolveTrivia,
        startStage,
        startShooting,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  return useContext(GameContext);
}

export default GameProvider;
export { useGame };
