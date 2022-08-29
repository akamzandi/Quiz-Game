import "./AnswerOption.css";

const AnswerOption = ({
  answerId,
  text,
  handleClickOnAnswerOption,
  quizId,
}) => {
  return (
    <div
      className="answer-option"
      onClick={() => handleClickOnAnswerOption(quizId, answerId)}
    >
      {text}
    </div>
  );
};

export default AnswerOption;
