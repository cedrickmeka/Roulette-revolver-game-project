import { useGame } from "../context/GameContext";

function DeathScreen() {
	const { winner, deadPlayer, resetGame } = useGame();

	return (
		<div className="min-h-screen bg-black text-white flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-6xl font-bold text-red-500 mb-4">💀Game Over💀</h1>
				<p className="text-gray-300 text-xl mb-4">You have failed</p>

				<p className="text-2xl text-red-400 mb-4">
					{deadPlayer === "PLAYER_1" ? "Player 1" : "Player 2"} has died!
				</p>
				<p className="text-2xl text-green-400 font-bold mb-8">
					🏆 {winner === "PLAYER_1" ? "Player 1" : "Player 2"} WINS!
				</p>

				<div className="flex justify-center gap-4">
					<button
						onClick={resetGame}
						className="border-2 bg-yellow-500 p-2 rounded-2xl text-white cursor-pointer text-2xl"
					>
						Retry
					</button>
					<button
						onClick={resetGame}
						className="border-2 bg-gray-700 p-2 rounded-2xl text-white cursor-pointer text-2xl"
					>
						Home
					</button>
				</div>
			</div>
		</div>
	);
}

export default DeathScreen;
