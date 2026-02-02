/**
 * GameManager.jsx
 * ----------------
 * Controls which screen/component is rendered
 * based on the current gamePhase from GameContext.
 * Acts as the UI router for the game.
 */
// Main router - shows different screens based on game state
import { useGame } from "../context/GameContext";
import TitleScreen from "./TitleScreen";
import AvatarSelect from "./AvatarSelect";
import ShootPhase from "./ShootPhase";
import TriviaPrompt from "./TriviaPrompt";
import DeathScreen from "./DeathScreen";
import WinnerScreen from "./WinnerScreen";

function GameManager() {
	const { gamePhase } = useGame();

	// Show different screens based on current game phase
	if (gamePhase === "TITLE") {
		return <TitleScreen />;
	}

	if (gamePhase === "AVATAR_SELECT") {
		return <AvatarSelect />;
	}

	if (gamePhase === "TURN") {
		return <ShootPhase />;
	}

	if (gamePhase === "TRIVIA") {
		return <TriviaPrompt />;
	}

	if (gamePhase === "GAME_OVER") {
		return <DeathScreen />;
	}

	if (gamePhase === "WIN") {
		return <WinnerScreen />;
	}

	// Default to title screen
	return <TitleScreen />;
}

export default GameManager;
