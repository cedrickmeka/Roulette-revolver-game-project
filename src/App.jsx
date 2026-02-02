import GameManager from "./components/GameManager";
import "./styles/global.css";

function App() {
  return (
    <div className="w-full h-screen bg-black overflow-hidden relative text-white font-sans">
      <GameManager />
    </div>
  );
}

export default App;
