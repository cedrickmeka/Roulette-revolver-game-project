/**
 * DeathScreen.jsx
 * ----------------
 * Displays when a player is eliminated
 * due to a gunshot or trivia failure.
 */
import styles from "../styles/Styles.module.css";

function DeathScreen() {
	return (
		<div className="border-5 border-white w-200 m-auto text-center p-30 mt-60 rounded-4xl bg-black shadow-xl shadow-red-500/60 font-[Righteous]">
			<p className="text-red-600 font-bold text-7xl">💀Game Over💀</p>
			<small className="text-gray-300 text-2xl">You have failed</small>

			<div className="flex justify-center align-middle gap-4 mt-7 mb-0">
				<button
					className={`${styles.button} border-2 bg-yellow-500 p-2 rounded-2xl w-25 text-white cursor-pointer text-2xl`}
					onClick={"#"}
				>
					Retry
				</button>
				<button
					className={`${styles.button} border-2 bg-gray-700 p-2 rounded-2xl w-25 text-white cursor-pointer text-2xl`}
					onClick={"#"}
				>
					Home
				</button>
			</div>
		</div>
	);
}

export default DeathScreen;
