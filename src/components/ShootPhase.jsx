import { useEffect } from "react";

/**
 * ShootPhase.jsx
 * ----------------
 * Handles the spin-and-shoot interaction.
 * Calls shooting logic from GameContext and
 * displays visual feedback.
 */
function GamePlayScreen() {
	useEffect(() => {
		document.body.style.backgroundImage = "url('/gamePlayScreen.png')";
		document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover"

		return () => {
			document.body.style.backgroundImage = "";
		};
	}, []);

	return (
		<div className="text-white">
		</div>
	);
}

export default GamePlayScreen;
