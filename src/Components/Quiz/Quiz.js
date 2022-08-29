import { useState } from "react";

import AnswerOption from "../AnswerOption/AnswerOption";
import "./Quiz.css";

const Quiz = ({
  id,
  question,
  correct_answer,
  all_answers,
  handleClickOnAnswerOption,
}) => {
  const returnShuffeledArray = (array) => {
    let currentArr = array;
    const newArr = [];

    for (let i = 0; i < array.length; i++) {
      let randomIndex = Math.floor(Math.random() * currentArr.length);
      let targetedElement = currentArr.filter(
        (item, index) => index == randomIndex
      )[0];
      newArr.push(targetedElement);
      currentArr = currentArr.filter((item, index) => index !== randomIndex);
    }

    return newArr;
  };

  const renderQuestion = () => {
    return `${id + 1}) ${question}`;
  };

  const renderShuffledAnswerOptions = () => {
    const all_answers_shuffeled = returnShuffeledArray(all_answers);

    return all_answers_shuffeled.map((item, index) => (
      <AnswerOption
        key={index}
        id={index}
        text={item}
        handleClickOnAnswerOption={handleClickOnAnswerOption}
      />
    ));
  };

  return (
    <div className="quiz-container">
      <h3 className="quiz-question">{renderQuestion()}</h3>
      <div className="answers-section">{renderShuffledAnswerOptions()}</div>
    </div>
  );
};

export default Quiz;
