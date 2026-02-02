import { useState, useEffect } from "react";
import triviaQuestions from "../utilities/triviaData";
import triviaimage from "../Assets/trivia.png";

function TriviaPrompt({ players, onComplete }) {
  const [question] = useState(() => {
    const randomIndex = Math.floor(Math.random() * triviaQuestions.length);
    return triviaQuestions[randomIndex];
  });

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onComplete(false);
    }
  }, [timeLeft, onComplete]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === question.correctAnswer;

    setTimeout(() => {
      onComplete(isCorrect);
    }, 1000);
  };

  const optionLetters = ["A", "B", "C", "D"];

  return (
    <div
      className="min-h-screen  text-white p-8"
      style={{
        backgroundImage: `url(${triviaimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="w-200 h-70 mx-auto">
        <div className="border-2 border-red-500 rounded-lg p-8">
          <h1 className="text-4xl font-bold text-red-500 text-center mb-6">
            TRIVIA ALERT
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl text-green-400 mb-4">
              {players.name}'s Turn
            </h2>
            <p className="text-xl">{question.text}</p>
          </div>

          <div className="text-center mb-8"> 
            <div
              className={`text-5xl font-mono font-bold mb-2 ${
                timeLeft < 10 ? "text-red-500" : "text-green-500"
              }`}
            >
              {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
              {String(timeLeft % 60).padStart(2, "0")}
            </div>
            <div className="text-gray-400">TIME REMAINING</div>
          </div>

          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => {
              const letter = optionLetters[index];
              const isSelected = selectedAnswer === letter;
              const isCorrect = letter === question.correctAnswer;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(letter)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all text-lg ${
                    isSelected
                      ? isCorrect
                        ? "bg-green-900 border-green-500 text-green-300"
                        : "bg-red-900 border-red-500 text-red-300"
                      : "bg-gray-900 border-gray-700 hover:border-red-500"
                  }`}
                >
                  <strong className="mr-4">({letter})</strong> {option}
                </button>
              );
            })}
          </div>

          <div className="text-center text-red-400 font-bold text-xl">
            GET READY
          </div>
        </div>
      </div>
    </div>
  );
}

export default TriviaPrompt; // ✅ MUST HAVE THIS LINE
