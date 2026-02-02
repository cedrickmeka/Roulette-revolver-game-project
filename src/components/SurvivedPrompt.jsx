/**
 * SurvivedPrompt.jsx
 * ----------------
 * Displays when players survive a round
 * and are advancing to the next stage.
 */

import { useGame } from "../context/GameContext";

function SurvivedPrompt() {
	const { stage, resetGame } = useGame();

	return (
		<div className="min-h-screen bg-linear-to-b from-green-900 to-black text-white flex items-center justify-center">
			<div className="text-center bg-green-900/80 rounded-lg p-12 max-w-2xl">
				<h1 className="text-6xl font-bold text-green-400 mb-6">
					🎉 SURVIVED! 🎉
				</h1>

				<h2 className="text-3xl font-bold mb-4">Stage {stage} Complete</h2>

				<p className="text-xl mb-8 text-gray-300">
					Both players made it through alive!
				</p>

				<div className="space-y-4">
					<p className="text-lg text-yellow-400">Preparing next stage...</p>

					<button
						onClick={resetGame}
						className="px-8 py-4 bg-green-600 text-white text-xl font-bold rounded-lg hover:bg-green-700 transition"
					>
						Continue
					</button>
				</div>
			</div>
		</div>
	);
}

export default SurvivedPrompt;
