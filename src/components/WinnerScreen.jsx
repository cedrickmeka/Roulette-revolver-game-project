/**
 * WinnerScreen.jsx
 * ----------------
 * Final screen displaying the winning player
 * after the game ends.
 */
import styles from "../styles/Styles.module.css";

function WinnerScreen() {
	return (
		<div className="text-center border-2 rounded-3xl bg-white w-200 m-auto mt-50 p-20 shadow-2xl shadow-gray-950">
			<h1 className="text-6xl font-bold mb-7 mt-0 text-gray-700">
				🎉Game Over!🎊
			</h1>

			<hr />

			<p className="font-bold mt-5 text-4xl text-gray-700">Winner: Player 1</p>

			<button className={`${styles.winnerButton} border-2 rounded-2xl mt-9 mb-0 p-5 w-120 text-5xl font-bold bg-green-600/90 text-white cursor-pointer shadow-2xl shadow-gray-900/50`}>
				Play Again
			</button>
		</div>
	);
}

export default WinnerScreen;
