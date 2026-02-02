import { useGame } from "../context/GameContext";
import stageConfig from "../utilities/stageConfig";

function ShootPhase() {
	const { stage, currentPlayer, shotsTaken, shoot } = useGame();

	const maxShots = stageConfig()[stage];
	const shotsLeft = maxShots - shotsTaken;

	return (
		<div className="min-h-screen bg-black text-white flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-4xl font-bold text-red-500 mb-4">STAGE {stage}</h1>
				<h2 className="text-2xl mb-4">
					{currentPlayer === "PLAYER_1" ? "Player 1" : "Player 2"}'s Turn
				</h2>
				<p className="text-xl mb-8">Shots Left: {shotsLeft}</p>

				<button
					onClick={shoot}
					className="px-12 py-6 bg-red-600 text-white text-2xl rounded hover:bg-red-700"
				>
					PULL TRIGGER
				</button>
			</div>
		</div>
	);
}

export default ShootPhase;
