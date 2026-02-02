import { useGame } from "../context/GameContext";

function WinnerScreen() {
	const { winner, resetGame } = useGame();

	return (
		<div className="min-h-screen bg-blue-900 text-white flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-6xl font-bold mb-4 text-yellow-400">
					🎉Game Over!🎊
				</h1>

				<hr />

				{winner === "BOTH_SURVIVED" ? (
					<p className="font-bold mt-5 text-4xl text-green-400">
						Both Players Survived!
					</p>
				) : (
					<p className="font-bold mt-5 text-4xl text-green-400">
						Winner: {winner === "PLAYER_1" ? "Player 1" : "Player 2"}
					</p>
				)}

				<button
					onClick={resetGame}
					className="border-2 rounded-2xl mt-9 p-5 text-3xl font-bold bg-green-600 text-white cursor-pointer"
				>
					Play Again
				</button>
			</div>
		</div>
	);
}

export default WinnerScreen;
