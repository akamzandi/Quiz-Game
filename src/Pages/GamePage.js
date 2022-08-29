import { useState, useEffect } from "react";

import "./GamePage.css";
import data from "../data";
import Quiz from "../Components/Quiz/Quiz";

const GamePage = ({ gameStartState, setGameStartState }) => {
  const [allQuizes, setAllQuizes] = useState(null);
  const [selectedAnswersOfQuizes, setSelectedAnswersOfQuizes] = useState(null);

  const handleClickOnAnswerOption = (qID, aID) => {
    // console.log("quizID: ", qID, ", answerId: ", aID);
    let newSelectedAnswers = selectedAnswersOfQuizes.map((item) => {
      if (item.questionId == qID) {
        return { ...item, selectedAnswerId: aID };
      } else {
        return item;
      }
    });
    setSelectedAnswersOfQuizes(newSelectedAnswers);
  };

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

  const renderQuizes = () => {
    if (allQuizes) {
      return allQuizes.map((item, index) => (
        <Quiz
          key={index}
          quizId={index}
          question={item.question}
          correct_answer={item.correct_answer}
          all_answers={item.all_answers}
          handleClickOnAnswerOption={handleClickOnAnswerOption}
        />
      ));
    } else {
      return <p>no data!</p>;
    }
  };

  // for loading the data correctly (answer options order)
  useEffect(() => {
    const recievedData = data.results;
    let procesedData = recievedData.map((item) => {
      const all_answers = [item.correct_answer, ...item.incorrect_answers];
      const all_answers_shuffeled = returnShuffeledArray(all_answers);
      return { ...item, all_answers: all_answers_shuffeled };
    });
    // console.log(procesedData);
    setAllQuizes(procesedData);
  }, []);

  useEffect(() => {
    if (allQuizes) {
      const initialSelectedStatus = [];
      for (let i = 0; i < allQuizes.length; i++) {
        initialSelectedStatus.push({ questionId: i, selectedAnswerId: -1 });
      }
      setSelectedAnswersOfQuizes(initialSelectedStatus);
    }
  }, []);

  return (
    <div className="game-page">
      <img src={require("../images/blobs.png")} className="upper-rigt-img" />
      <img src={require("../images/blob 5.png")} className="lower-left-img" />
      <div className="all-quizes-container">{renderQuizes()}</div>
      <div className="control-panel">
        <button className="check-answers-btn">Check Answers</button>
      </div>
    </div>
  );
};

export default GamePage;
