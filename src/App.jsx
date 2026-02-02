import { useState } from 'react';
import TitleScreen from './components/TitleScreen';
import InstructionsScreen from './components/InstructionsScreen';
import AvatarSelect from './components/AvatarSelect';
import GamePlayScreen from './components/ShootPhase';
import DeathScreen from './components/DeathScreen';
import WinnerScreen from './components/WinnerScreen';
import { useGame } from './context/GameContext';

function App() {
  // Hooks MUST be called unconditionally (top-level)
  const game = useGame();

  // Simple UI flow (separate from GameContext phases)
  const [page, setPage] = useState('title');

  const [players, setPlayers] = useState([
    { id: 1, name: 'Player 1', avatar: null },
    { id: 2, name: 'Player 2', avatar: null },
  ]);

  function updatePlayerAvatar(playerId, avatar) {
    setPlayers((prev) =>
      prev.map((p) => (p.id === playerId ? { ...p, avatar } : p))
    );
  }

  // GameContext-based endings (optional, but keeps your structure sane)
  if (game.gamePhase === 'GAME_OVER') return <DeathScreen />;
  if (game.gamePhase === 'WIN') return <WinnerScreen />;

  if (page === 'title') {
    return <TitleScreen goNext={() => setPage('instructions')} />;
  }

  if (page === 'instructions') {
    return <InstructionsScreen goNext={() => setPage('avatar')} />;
  }

  if (page === 'avatar') {
    return (
      <AvatarSelect players={players} updatePlayerAvatar={updatePlayerAvatar} />
    );
  }

  // fallback/play screen
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-xl mx-auto space-y-4">
        <p className="text-sm text-gray-400">
          UI page: <span className="text-white">{page}</span> | Game phase:{' '}
          <span className="text-white">{game.gamePhase}</span>
        </p>

        <button
          className="px-4 py-2 rounded bg-gray-800 border border-gray-600 hover:bg-gray-700"
          onClick={() => {
            game.startStage();
            setPage('play');
          }}
        >
          Start Game
        </button>

        {page === 'play' && <GamePlayScreen />}
      </div>
    </div>
  );
}

export default App;
