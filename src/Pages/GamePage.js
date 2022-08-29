import { useState, useEffect } from "react";

import "./GamePage.css";
import data from "../data";
import Quiz from "../Components/Quiz/Quiz";

const GamePage = ({ gameStartState, setGameStartState }) => {
  const [allQuizes, setAllQuizes] = useState(data.results);

  const handleClickOnAnswerOption = (id) => {
    console.log(id);
  };

  const quizComponents = allQuizes.map((item, index) => (
    <Quiz
      key={index}
      id={index}
      question={item.question}
      correct_answer={item.correct_answer}
      all_answers={[item.correct_answer, ...item.incorrect_answers]}
      handleClickOnAnswerOption={handleClickOnAnswerOption}
    />
  ));

  return (
    <div className="game-page">
      <img src={require("../images/blobs.png")} className="upper-rigt-img" />
      <img src={require("../images/blob 5.png")} className="lower-left-img" />
      <div className="all-quizes-container">{quizComponents}</div>
      <div className="control-panel">
        <button className="check-answers-btn">Check Answers</button>
      </div>
    </div>
  );
};

export default GamePage;
