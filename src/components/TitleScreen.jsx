
import React, { useState } from "react";
import { useGame } from "../context/GameContext";
import onboardingImage from "../Assets/Onboarding.jpeg";
import slide2 from "../Assets/slide2.jpeg"
import slide3 from"../Assets/slide3.png"

function TitleScreen() {
  const { startStage } = useGame();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to Russian Roulette",
      text: "The game is a made up of four stages.",
      image: onboardingImage,
    },
    {
      title: "How to play the game",
      text:"The game is made up 4 stages, Each stage is made up of a unique challenge.",
      image: slide2,
    }, 
    {
      title: "Your goal",
      text: "Complete each stage and the bonus round to became the winner.",
      image: slide3,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-[80vw] max-h-[80vh]">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative h-[60vh]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md rounded-xl p-6 text-white hidden md:block">
                  <h5 className="text-xl font-semibold mb-2">{slide.title}</h5>
                  <p className="text-sm text-gray-200">{slide.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentSlide(
                (currentSlide - 1 + slides.length) % slides.length,
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-3 hover:bg-black/80 transition"
          >
            Previous
          </button>

          <button
            onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-3 hover:bg-black/80 transition"
          >
            Next
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition ${
                  index === currentSlide ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={startStage}
            className="px-10 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg hover:scale-105 transition"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default TitleScreen;
