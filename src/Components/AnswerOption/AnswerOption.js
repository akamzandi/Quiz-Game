import "./AnswerOption.css";

const AnswerOption = ({ id, text, handleAnswerOptionClick }) => {
  return (
    <div className="answer-option" onClick={() => handleAnswerOptionClick(id)}>
      {text}
    </div>
  );
};

export default AnswerOption;
