export default function AnswerOption({ choice, isSelected, onSelect }) {
  return (
    <label className={`answer-option ${isSelected ? 'selected' : ''}`}>
      <input
        type="radio"
        checked={isSelected}
        onChange={() => onSelect(choice)}
        readOnly
      />
      <span>{choice}</span>
    </label>
  );
}