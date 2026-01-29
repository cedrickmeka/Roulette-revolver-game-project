/**
 * DeathScreen.jsx
 * ----------------
 * Displays when a player is eliminated
 * due to a gunshot or trivia failure.
 */

function DeathScreen() {
	return (
		<div className="border-2 w-150 m-auto text-center p-20 mt-40 rounded-4xl bg-black/80 shadow-xl shadow-gray-950/90">
			<p className="text-red-600 font-bold text-5xl">💀Game Over💀</p>
			<small className="text-gray-300">You have failed</small>

			<div className="flex justify-center align-middle gap-4 mt-7 mb-0">
				<button className="border-2 bg-yellow-500 p-2 rounded-2xl w-20 text-white cursor-pointer" onClick={"#"}>
					Retry
				</button>
				<button className="border-2 bg-gray-700 p-2 rounded-2xl w-20 text-white cursor-pointer" onClick={"#"}>
					Home
				</button>
			</div>
		</div>
	);
}

export default DeathScreen;
