import { useState } from "react";
import { useGame } from "../context/GameContext";
import avatar1 from "../Assets/avatar1.jpeg";
import avatar2 from "../Assets/avatar2.jpeg";
import backgroundImage from "../Assets/avatarselect.png";

function AvatarSelect() {
  const { startShooting } = useGame();
  const [selectedAvatars, setSelectedAvatars] = useState({ 1: null, 2: null });

  const avatars = [
    { id: 1, image: avatar1, name: "Fighter" },
    { id: 2, image: avatar2, name: "Warrior" },
  ];

  const handleSelect = (playerId, avatar) => {
    setSelectedAvatars((prev) => ({ ...prev, [playerId]: avatar }));
  };

  const canContinue = selectedAvatars[1] && selectedAvatars[2];

  return (
    <div
      className="min-h-screen text-white p-8 bg-gradient-to-b from-black via-gray-900 to-black"
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
          {[1, 2].map((playerId) => (
            <div
              key={playerId}
              className="rounded-xl bg-gray-900/70 border border-gray-700 p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">
                Player {playerId}
              </h2>

              <div className="grid grid-cols-2 gap-6">
                {avatars.map((avatar) => {
                  const isSelected =
                    selectedAvatars[playerId]?.id === avatar.id;

                  return (
                    <button
                      key={avatar.id}
                      onClick={() => handleSelect(playerId, avatar)}
                      className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        isSelected ? "border-green-500" : "border-gray-600 hover:border-red-500"
                      }`}
                    >
                      <img
                        src={avatar.image}
                        alt={avatar.name}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-2 text-center font-bold">{avatar.name}</div>

                      {isSelected && (
                        <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                          <span className="bg-green-500 text-black px-3 py-1 rounded font-bold">SELECTED</span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button 
            onClick={startShooting}
            disabled={!canContinue}
            className={`px-10 py-4 text-xl font-bold rounded-lg transition ${
              canContinue 
                ? "bg-green-600 hover:bg-green-700 text-white" 
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
          >
            {canContinue ? "Start Game" : "Both Players Must Select Avatar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AvatarSelect;