/**
 * ShootPhase.jsx
 * ----------------
 * Handles the spin-and-shoot interaction.
 * Calls shooting logic from GameContext and
 * displays visual feedback.
 */
import { useEffect } from "react";

function GamePlayScreen() {
  useEffect(() => {
    // Vite: assets in /public are served from "/"
    document.body.style.backgroundImage = "url('/gamePlayScreen.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
    };
  }, []);

  return (
    <div className="text-white">
      <h1>GamePlay Screen Coming Soon</h1>
      <p>A text in the GamePlayScreen component.</p>
    </div>
  );
}

export default GamePlayScreen;
