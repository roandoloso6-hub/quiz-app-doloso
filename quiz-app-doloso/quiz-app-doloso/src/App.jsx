import { useState } from 'react';
import { questions } from './data/questions';
import QuizHeader from './components/QuizHeader';
import ProgressBar from './components/ProgressBar';
import QuestionCard from './components/QuestionCard';
import ResultCard from './components/ResultCard';
import './App.css';

export default function App() {
  // States: 'home', 'quiz', 'result'
  const [gameState, setGameState] = useState('home');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  const resetQuizState = () => {
    setCurrentIndex(0);
    setSelectedAnswer('');
    setScore(0);
  };

  // Start the quiz from Home Page
  const handleStartQuiz = () => {
    setGameState('quiz');
    resetQuizState();
  };

  // Handle selecting an answer
  const handleSelectAnswer = (choice) => {
    setSelectedAnswer(choice);
  };

  // Handle clicking "Next / Submit"
  const handleNextQuestion = () => {
    if (!selectedAnswer) {
      alert("Please select an answer before proceeding!");
      return;
    }

    // Check if the answer is correct and increment score
    if (selectedAnswer === questions[currentIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }

    // Move to next question or show results
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setSelectedAnswer('');
    } else {
      setGameState('result');
    }
  };

  return (
    <>
      <div className="brand-logo" aria-label="Quiz">
        Quiz.
      </div>

      <div className="app-container">
        {/* 1. Home Page View */}
        {gameState === 'home' && (
          <div className="home-screen">
            <QuizHeader title="Welcome to the Frontend Quiz!" />
            <p className="home-description">
              Test your knowledge of frontend development concepts with this interactive quiz.
            </p>
            <button className="btn primary-btn" onClick={handleStartQuiz}>
              Start Quiz
            </button>
          </div>
        )}

        {/* 2. Quiz Page View */}
        {gameState === 'quiz' && (
          <div className="quiz-screen">
            <QuizHeader title="Frontend Quiz" />
            <ProgressBar current={currentIndex + 1} total={questions.length} />
            
            <QuestionCard
              questionData={questions[currentIndex]}
              currentQuestionIndex={currentIndex}
              selectedAnswer={selectedAnswer}
              onSelectAnswer={handleSelectAnswer}
            />

            <button className="btn primary-btn submit-btn" onClick={handleNextQuestion}>
              {currentIndex === questions.length - 1 ? "Finish Quiz" : "Next"}
            </button>
          </div>
        )}

        {/* 3. Result Page View */}
        {gameState === 'result' && (
          <div className="result-screen">
            <ResultCard
              score={score}
              totalQuestions={questions.length}
              onRetake={handleStartQuiz}
              onHome={() => {
                setGameState('home');
                resetQuizState();
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}