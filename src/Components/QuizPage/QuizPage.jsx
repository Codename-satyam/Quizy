import React, { useState, useEffect } from "react";
import "./QuizPage.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "Who developed React?",
    options: ["Google", "Microsoft", "Facebook", "Twitter"],
    answer: "Facebook",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
];

const LoadingPage = () => {
  return (
    <div className="loading-screen pixelify-sans-font">
      <div className="loader-text">Loading Quiz...</div>
      <div className="loading-bar">
        <div className="progress"></div>
      </div>
    </div>
  );
};

function QuizPage() {
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="quiz-page">
      <div className="quiz-box pixelify-sans-font">
        {!showScore ? (
          <>
            <h2 className="question">
              {questions[currentQuestion].question}
            </h2>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="option-btn"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="progress">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </>
        ) : (
          <div className="score-section">
            <h2>Your Score: {score}/{questions.length}</h2>
            <button className="restart-btn" onClick={handleRestart}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
