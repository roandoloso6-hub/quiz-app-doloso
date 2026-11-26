import AnswerOption from "./AnswerOption";

export default function QuestionCard({ questionData, currentQuestionIndex, selectedAnswer, onSelectAnswer }) {
  return (
    <div className="question-card">
      <span className="question-number">Question {currentQuestionIndex + 1}</span>
      <h2 className="question-text">{questionData.question}</h2>
      <div className="choices-list">
        {questionData.choices.map((choice, index) => (
          <AnswerOption
            key={index}
            choice={choice}
            isSelected={selectedAnswer === choice}
            onSelect={() => onSelectAnswer(choice)}
          />
        ))}
      </div>
    </div>
  );
}