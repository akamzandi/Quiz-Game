import "./AnswerOption.css";

const AnswerOption = ({
  answerId,
  text,
  gameRunningState,
  handleClickOnAnswerOption,
  quizId,
  isSelected,
  correct_answer,
}) => {
  const renderAnswerOptionsStyle = () => {
    if (gameRunningState) {
      return isSelected ? "answer-option selected-option" : "answer-option";
    } else {
      // wrong , true, neuter
      if (isSelected && text == correct_answer) {
        return "answer-option correct-answer";
      } else if (isSelected && text !== correct_answer) {
        return "answer-option wrong-answer";
      } else {
        return "answer-option neuter-answer";
      }
    }
  };

  return (
    <div
      className={renderAnswerOptionsStyle()}
      onClick={() => handleClickOnAnswerOption(quizId, answerId)}
    >
      {text}
    </div>
  );
};

export default AnswerOption;
