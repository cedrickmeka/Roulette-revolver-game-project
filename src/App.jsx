import { useState } from "react";
import TitleScreen from "./components/TitleScreen";
import InstructionsScreen from "./components/InstructionsScreen";
import AvatarSelect from "./components/AvatarSelect";
import "./styles/global.css";
import TriviaPrompt from "./components/TriviaPrompt";

function App() {
  const [page, setPage] = useState("titleScreen");
  const [players, setPlayers] = useState([
    { id: 1, name: 'Player  1', avatar: null },
    { id: 2, name: 'Player 2', avatar: null}
  ]);

  // Update player avatar
  const updatePlayerAvatar = (playerId, avatar) => {
    setPlayers(prev => prev.map(player => 
      player.id === playerId ? { ...player, avatar } : player
    ));
  };
  if (page === "titleScreen") {
    return <TitleScreen goNext={() => setPage("instructions")} />;
  }

  if (page === "instructions") {
    return <InstructionsScreen goNext={() => setPage("avatar")} />;
  }

  
  if (page === 'avatar') {
    return (
      <AvatarSelect 
        players={players}
        updatePlayerAvatar={updatePlayerAvatar}
        goNext={() => setPage('trivia')}
      />
    );
  }

if (page === 'trivia') {
    return (
      <TriviaPrompt
        players={players}
        goNext={() => setPage('')}//the person assigned to stage1 should continue from here
      />
    );
  }



  return null;
}

export default App;
