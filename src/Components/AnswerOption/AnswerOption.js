import "./AnswerOption.css";

const AnswerOption = ({
  answerId,
  text,
  handleClickOnAnswerOption,
  quizId,
  isSelected,
}) => {
  return (
    <div
      // className="answer-option"
      className={isSelected ? "answer-option selected-option" : "answer-option"}
      onClick={() => handleClickOnAnswerOption(quizId, answerId)}
    >
      {text}
    </div>
  );
};

export default AnswerOption;
