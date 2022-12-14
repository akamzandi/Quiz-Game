import { useEffect } from "react";
import "./AnswerOption.css";

const AnswerOption = ({
  answerId,
  text,
  gameRunningState,
  handleClickOnAnswerOption,
  quizId,
  isSelected,
  correct_answer,
  setNumberOfCorrectAnswers,
}) => {
  const getAnswerOptionStatus = () => {
    if (isSelected && text == correct_answer) {
      return "correct";
    } else if (isSelected && text !== correct_answer) {
      return "wrong";
    } else {
      return "neuter";
    }
  };

  const renderAnswerOptionsStyle = () => {
    if (gameRunningState) {
      return isSelected ? "selected-option" : "answer-option";
    } else {
      const answerOptionStatus = getAnswerOptionStatus();
      if (answerOptionStatus == "correct") {
        return "correct-choice";
      } else if (answerOptionStatus == "wrong") {
        return "wrong-choice";
      } else if (answerOptionStatus == "neuter") {
        if (text == correct_answer) {
          return "correct-answer";
        } else {
          return "neuter-answer";
        }
      }
    }
  };

  useEffect(() => {
    if (!gameRunningState) {
      const answerOptionStatus = getAnswerOptionStatus();
      if (answerOptionStatus == "correct") {
        setNumberOfCorrectAnswers((prevState) => prevState + 1);
      }
    }
  }, [gameRunningState]);

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
