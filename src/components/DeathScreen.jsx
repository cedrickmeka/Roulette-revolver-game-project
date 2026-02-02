/**
 * DeathScreen.jsx
 * ----------------
 * Displays when a player is eliminated
 * due to a gunshot or trivia failure.
 */
import { useEffect } from 'react';
import styles from '../styles/Styles.module.css';

function DeathScreen() {
  useEffect(() => {
    // Vite: assets in /public are served from "/"
    document.body.style.backgroundImage = "url('/DeathScreen.png')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';

    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
    };
  }, []);

  return (
    <div className="border-[5px] border-white w-[50rem] m-auto text-center p-20 mt-40 rounded-[2rem] bg-black shadow-xl shadow-red-500/60 font-[Righteous]">
      <p className="text-red-600 font-bold text-6xl">💀Game Over💀</p>
      <small className="text-gray-300 text-xl">You have failed</small>

      <div className="flex justify-center align-middle gap-4 mt-7 mb-0">
        <button
          className={`${styles.button} border-2 bg-yellow-500 p-2 rounded-2xl w-[6.25rem] text-white cursor-pointer text-2xl`}
          onClick={() => {}}
        >
          Retry
        </button>

        <button
          className={`${styles.button} border-2 bg-gray-700 p-2 rounded-2xl w-[6.25rem] text-white cursor-pointer text-2xl`}
          onClick={() => {}}
        >
          Home
        </button>
      </div>
    </div>
  );
}

export default DeathScreen;
