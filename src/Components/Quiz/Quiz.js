import { useState } from "react";

import AnswerOption from "../AnswerOption/AnswerOption";
import "./Quiz.css";

const Quiz = ({
  quizId,
  question,
  correct_answer,
  all_answers,
  gameRunningState,
  selectedAnswerId,
  setNumberOfCorrectAnswers,
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
        correct_answer={correct_answer}
        gameRunningState={gameRunningState}
        isSelected={index == selectedAnswerId ? true : false}
        handleClickOnAnswerOption={handleClickOnAnswerOption}
        setNumberOfCorrectAnswers={setNumberOfCorrectAnswers}
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
