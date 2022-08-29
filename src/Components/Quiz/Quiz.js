import { useState } from "react";

import AnswerOption from "../AnswerOption/AnswerOption";
import "./Quiz.css";

const Quiz = ({
  quizId,
  question,
  correct_answer,
  all_answers,
  handleClickOnAnswerOption,
}) => {
  const renderQuestion = () => {
    return `${quizId + 1}) ${question}`;
  };

  const renderAnswerOptions = () => {
    return all_answers.map((item, index) => (
      <AnswerOption
        key={index}
        answerId={index}
        text={item}
        handleClickOnAnswerOption={handleClickOnAnswerOption}
        quizId={quizId}
      />
    ));
  };

  return (
    <div className="quiz-container">
      <h3 className="quiz-question">{renderQuestion()}</h3>
      <div className="answers-section">{renderAnswerOptions()}</div>
    </div>
  );
};

export default Quiz;
