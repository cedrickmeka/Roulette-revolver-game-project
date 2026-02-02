import { useState } from "react";
import avatar1 from "../Assets/avatar1.jpeg";
import avatar2 from "../Assets/avatar2.jpeg";
import backgroundImage from "../Assets/avatarselect.png";

function AvatarSelect({ players, updatePlayerAvatar }) {
  const [selectedAvatars, setSelectedAvatars] = useState({
    PLAYER_1: null,
    PLAYER_2: null,
  });

  const avatars = [
    { id: 1, image: avatar1 },
    { id: 2, image: avatar2 },
  ];

  function handleSelect(playerId, avatar) {
    setSelectedAvatars((prev) => ({
      ...prev,
      [playerId]: avatar,
    }));

    // report to GameContext (via parent)
    updatePlayerAvatar(playerId, avatar);
  }

  return (
    <div
      className="min-h-screen text-white p-8 bg-linear-to-b from-black via-gray-900 to-black"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto backdrop-blur-sm bg-black/60 rounded-2xl p-10">
        <h1 className="text-5xl font-extrabold text-center mb-3 text-red-500 tracking-wide">
          SELECT THE AVATAR
        </h1>

        <p className="text-center text-gray-400 mb-12">
          Both players must choose an avatar to continue
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {players.map((player) => (
            <div
              key={player.id}
              className="rounded-xl bg-gray-900/70 border border-gray-700 p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">
                Player {player.id === "PLAYER_1" ? "1" : "2"}
                <span className="block text-gray-400 text-base">
                  {player.name}
                </span>
              </h2>

              <div className="grid grid-cols-2 gap-6">
                {avatars.map((avatar) => {
                  const isSelected =
                    selectedAvatars[player.id]?.id === avatar.id;

                  return (
                    <button
                      key={avatar.id}
                      onClick={() => handleSelect(player.id, avatar)}
                      className={`relative rounded-xl overflow-hidden border transition-all duration-300
                        ${
                          isSelected
                            ? "border-red-500 scale-105"
                            : "border-gray-600 hover:scale-105"
                        }`}
                    >
                      <img
                        src={avatar.image}
                        alt="Avatar"
                        className="w-full h-40 object-cover"
                      />

                      {isSelected && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center font-bold tracking-wide">
                          SELECTED
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvatarSelect;