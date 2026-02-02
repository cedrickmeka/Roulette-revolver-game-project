import { useState } from "react";
import TitleScreen from "./components/TitleScreen";
import InstructionsScreen from "./components/InstructionsScreen";
import AvatarSelect from "./components/AvatarSelect";
import "./styles/global.css";
import TriviaPrompt from "./components/TriviaPrompt";
import GameScreen from "./animations/GameScreen";
import { PageTransition } from "./animations/transitions";
import { useGame } from "./context/GameContext";

const GAME_STATE = {
  START: "START",
  AVATAR: "AVATAR",
  TRIVIA: "TRIVIA",
  PLAYING: "PLAYING",
  GAME_OVER: "GAME_OVER",
};

function App() {
  const [gameState, setGameState] = useState(GAME_STATE.START);
  const [players, setPlayers] = useState([
    { id: 1, name: "Player 1", avatar: null },
    { id: 2, name: "Player 2", avatar: null }
  ]);
  const game = useGame();

  const updatePlayerAvatar = (playerId, avatar) => {
    setPlayers(prev => 
      prev.map(player => 
        player.id === playerId ? { ...player, avatar } : player
      )
    );
  };

  // Screen flow
  if (gameState === GAME_STATE.AVATAR) {
    return (
      <AvatarSelect 
        players={players}
        updatePlayerAvatar={updatePlayerAvatar}
        goNext={() => setGameState(GAME_STATE.TRIVIA)}
      />
    );
  }

  if (gameState === GAME_STATE.TRIVIA) {
    return (
      <TriviaPrompt
        players={players}
        onComplete={() => setGameState(GAME_STATE.PLAYING)}
      />
    );
  }

  const startGame = () => setGameState(GAME_STATE.AVATAR);
  const endGame = () => setGameState(GAME_STATE.GAME_OVER);
  const resetGame = () => {
    setGameState(GAME_STATE.START);
    setPlayers([
      { id: 1, name: "Player 1", avatar: null },
      { id: 2, name: "Player 2", avatar: null }
    ]);
  };

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative text-white font-sans">
      {gameState === GAME_STATE.START && (
        <PageTransition className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 tracking-tighter">
            ROULETTE REVOLVER
          </h1>
          <button
            onClick={startGame}
            className="px-8 py-3 bg-gray-800 border border-gray-600 hover:bg-gray-700 hover:border-gray-400 rounded-lg text-xl transition-all shadow-[0_0_20px_rgba(255,0,0,0.2)]"
          >
            Enter Game
          </button>
        </PageTransition>
      )}

      {gameState === GAME_STATE.PLAYING && (
        <PageTransition>
          <GameScreen onGameOver={endGame} />
        </PageTransition>
      )}

      {gameState === GAME_STATE.GAME_OVER && (
        <PageTransition className="flex flex-col items-center justify-center bg-red-900/20">
          <h1 className="text-6xl font-black text-red-600 mb-6 drop-shadow-md animate-pulse">
            YOU DIED
          </h1>
          <button
            onClick={resetGame}
            className="px-8 py-3 bg-red-800 hover:bg-red-700 rounded-lg text-white font-bold tracking-wide shadow-lg transition-transform hover:-translate-y-1"
          >
            Try Again
          </button>
        </PageTransition>
      )}

      <div className="absolute top-4 right-4 z-50">
        <button className="text-gray-500 hover:text-white text-xs uppercase tracking-widest font-semibold transition-colors">
          Sound: On
        </button>
      </div>
    </div>
  );
}

export default App;