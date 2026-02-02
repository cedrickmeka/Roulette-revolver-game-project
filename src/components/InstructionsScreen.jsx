/**
 * InstructionsScreen.jsx
 * ----------------
 * Displays game instructions and rules
 * before avatar selection begins.
 */

import { useGame } from "../context/GameContext";
import instructionsBg from "../Assets/Instructionsbg.png";

function InstructionsScreen() {
  const { goToAvatarSelect } = useGame();

  return (
    <div 
      className="min-h-screen text-white flex items-center justify-center p-8"
      style={{
        backgroundImage: `url(${instructionsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="max-w-4xl bg-black/80 backdrop-blur-sm rounded-lg p-8">
        <h1 className="text-5xl font-bold text-red-500 text-center mb-8">GAME INSTRUCTIONS</h1>
        
        <div className="space-y-6 text-lg">
          <div className="bg-gray-900/70 p-6 rounded-lg">
            <h2 className="text-2xl text-yellow-400 mb-3">🎯 Objective</h2>
            <p>Survive all 4 stages of Russian Roulette by avoiding the bullet and answering trivia correctly.</p>
          </div>
          
          <div className="bg-gray-900/70 p-6 rounded-lg">
            <h2 className="text-2xl text-yellow-400 mb-3">🔫 Shooting Rules</h2>
            <p>• Each stage has different shot limits (Stage 1: 1 shot, Stage 2: 2 shots, etc.)</p>
            <p>• You must use ALL your shots before your turn ends</p>
            <p>• If you get the bullet, you die and the other player wins</p>
          </div>
          
          <div className="bg-gray-900/70 p-6 rounded-lg">
            <h2 className="text-2xl text-yellow-400 mb-3">🧠 Trivia Phase</h2>
            <p>• After both players shoot, answer a trivia question</p>
            <p>• Wrong answer = instant death</p>
            <p>• Both correct = advance to next stage</p>
          </div>
          
          <div className="bg-gray-900/70 p-6 rounded-lg">
            <h2 className="text-2xl text-yellow-400 mb-3">🏆 Victory</h2>
            <p>• Survive all 4 stages to win together</p>
            <p>• Or be the last player standing</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button 
            onClick={goToAvatarSelect}
            className="px-10 py-4 bg-red-600 text-white text-xl font-bold rounded-lg hover:bg-red-700 transition"
          >
            Choose Your Avatar
          </button>
        </div>
      </div>
    </div>
  );
}

export default InstructionsScreen;
