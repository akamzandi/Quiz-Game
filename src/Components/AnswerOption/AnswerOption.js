import "./AnswerOption.css";

const AnswerOption = ({ id, text, handleClickOnAnswerOption }) => {
  return (
    <div
      className="answer-option"
      onClick={() => handleClickOnAnswerOption(id)}
    >
      {text}
    </div>
  );
};

export default AnswerOption;
