import React, { useState } from "react";
import { useTensionEffects } from "./useTensionEffects";
import { OverlayEffect } from "./transitions";

const GameScreen = ({ onGameOver }) => {
  const [health, setHealth] = useState(100);

  const shakeEffect = useTensionEffects(health, "shake", 30);

  const flashEffect = useTensionEffects(health, "flashRed", 50);

  const handleTakeDamage = () => {
    const newHealth = Math.max(0, health - 10);
    setHealth(newHealth);

    if (newHealth <= 0 && onGameOver) {
      setTimeout(() => onGameOver(), 500);
    }
  };

  const getHealthColor = (h) => {
    if (h > 50) return "bg-green-500";
    if (h > 20) return "bg-yellow-500";
    return "bg-red-600";
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden ${shakeEffect}`}
    >
      <OverlayEffect activeClass={flashEffect} />

      <div className="p-8 bg-gray-800 rounded-xl shadow-2xl z-10 w-96 max-w-full">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400 text-center">
          Game Active
        </h1>

        <div className="mb-6">
          <div className="flex justify-between text-sm uppercase tracking-widest text-gray-400 mb-2">
            <span>Health</span>
            <span>{health}%</span>
          </div>

          <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden border border-gray-600">
            <div
              role="progressbar"
              aria-valuenow={health}
              aria-valuemin="0"
              aria-valuemax="100"
              className={`h-full transition-all duration-300 ease-out ${getHealthColor(health)}`}
              style={{ width: `${health}%` }}
            />
          </div>
        </div>

        <button
          onClick={handleTakeDamage}
          className="w-full px-6 py-3 bg-red-600 hover:bg-red-500 active:bg-red-700 rounded font-bold transition-colors shadow-lg transform active:scale-95"
        >
          Simulate Damage
        </button>
      </div>
    </div>
  );
};

export default GameScreen;
