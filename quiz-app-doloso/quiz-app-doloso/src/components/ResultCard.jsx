export default function ResultCard({ score, totalQuestions, onRetake, onHome }) {
  const incorrectAnswers = Math.max(totalQuestions - score, 0);
  const percentage = totalQuestions ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div className="result-card">
      <h2>Quiz Completed</h2>
      <h3>Your score:</h3>
      <div className="score-badge">
        {score} / {totalQuestions}
      </div>
      
      <div className="result-stats">
        <p>Total Questions: <strong>{totalQuestions}</strong></p>
        <p>Correct Answers: <strong className="text-success">{score}</strong></p>
        <p>Incorrect Answers: <strong className="text-danger">{incorrectAnswers}</strong></p>
        <p>Percentage: <strong>{percentage}%</strong></p>
      </div>

      <div className="result-actions">
        <button className="btn primary-btn" onClick={onRetake}>Retake Quiz</button>
        <button className="btn secondary-btn" onClick={onHome}>Return Home</button>
      </div>
    </div>
  );
}