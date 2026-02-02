/**
 * TurnPrompt.jsx
 * ----------------
 * Indicates which player's turn it is
 * before the shooting phase begins.
 */
/**
 * TurnPrompt.jsx
 * ----------------
 * Indicates which player's turn it is
 * before the shooting phase begins.
 */

import { useGame } from "../context/GameContext";
import stageConfig from "../utilities/stageConfig";

function TurnPrompt() {
	const { currentPlayer, stage, goToShooting } = useGame();

	const maxShots = stageConfig()[stage];

	return (
		<div className="min-h-screen bg-black text-white flex items-center justify-center">
			<div className="text-center bg-gray-900/80 rounded-lg p-12 max-w-2xl">
				<h1 className="text-4xl font-bold text-red-500 mb-6">STAGE {stage}</h1>

				<h2 className="text-3xl font-bold mb-4">
					{currentPlayer === "PLAYER_1" ? "Player 1" : "Player 2"}'s Turn
				</h2>

				<p className="text-xl mb-2">
					You have {maxShots} shot{maxShots > 1 ? "s" : ""} this round
				</p>
				<p className="text-lg text-gray-400 mb-8">
					Use all your shots before your turn ends
				</p>

				<button
					onClick={goToShooting}
					className="px-12 py-6 bg-red-600 text-white text-2xl font-bold rounded-lg hover:bg-red-700 transition animate-pulse"
				>
					READY TO SHOOT
				</button>
			</div>
		</div>
	);
}

export default TurnPrompt;
