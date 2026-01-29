import { useState } from "react";
import TitleScreen from "./components/TitleScreen";
import InstructionsScreen from "./components/InstructionsScreen";
import AvatarSelect from "./components/AvatarSelect";
import "./styles/global.css";

function App() {
  const [page, setPage] = useState("titleScreen");
  if (page === "titleScreen") {
    return <TitleScreen goNext={() => setPage("instructions")} />;
  }

  if (page === "instructions") {
    return <InstructionsScreen goNext={() => setPage("avatar")} />;
  }

  if (page === "avatar") {
    return <AvatarSelect goNext={() => setPage("turn")} />;
  }

  return null;
}

export default App;
