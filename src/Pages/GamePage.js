import { useState, useEffect } from "react";

import "./GamePage.css";
import data from "../data";
import Quiz from "../Components/Quiz/Quiz";

const GamePage = ({ showStartPageState, setShowStartPageState }) => {
  const [gameRunningState, setGameRunningState] = useState(true);
  const [allQuizes, setAllQuizes] = useState(null);
  const [selectedAnswersOfQuizes, setSelectedAnswersOfQuizes] = useState(null);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);

  console.log(numberOfCorrectAnswers);

  const handleClickOnAnswerOption = (qID, aID) => {
    // console.log("quizID: ", qID, ", answerId: ", aID);

    if (gameRunningState) {
      let newSelectedAnswers = selectedAnswersOfQuizes.map((item) => {
        if (item.questionId == qID) {
          return { ...item, selectedAnswerId: aID };
        } else {
          return item;
        }
      });
      setSelectedAnswersOfQuizes(newSelectedAnswers);
    }
  };

  const handleClickOnCheckAnswers = () => {
    setGameRunningState((prevState) => !prevState);
  };

  const handleClickOnPlayAgain = () => {
    setShowStartPageState((prevState) => !prevState);
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
    if (allQuizes !== null) {
      return allQuizes.map((item, index) => (
        <Quiz
          key={index}
          quizId={index}
          question={item.question}
          correct_answer={item.correct_answer}
          all_answers={item.all_answers}
          gameRunningState={gameRunningState}
          selectedAnswerId={selectedAnswersOfQuizes[index]["selectedAnswerId"]}
          setNumberOfCorrectAnswers={setNumberOfCorrectAnswers}
          handleClickOnAnswerOption={handleClickOnAnswerOption}
        />
      ));
    } else {
      return <p>SORRY, THERE IS NO DATA!</p>;
    }
  };

  const renderControlPanel = () => {
    if (gameRunningState) {
      return (
        <button
          className="check-answers-btn"
          onClick={handleClickOnCheckAnswers}
        >
          Check Answers
        </button>
      );
    } else {
      return (
        <>
          <p className="end-msg">
            You scored {numberOfCorrectAnswers}/{allQuizes.length} correct
            answers
          </p>
          <button className="play-again-btn" onClick={handleClickOnPlayAgain}>
            Play Again
          </button>
        </>
      );
    }
  };

  useEffect(() => {
    // getting data from server
    const recievedData = data.results;

    // ranadomize answers,
    // for example all true answers must not be the first one
    let procesedData = recievedData.map((item) => {
      const all_answers = [item.correct_answer, ...item.incorrect_answers];
      const all_answers_shuffeled = returnShuffeledArray(all_answers);
      return { ...item, all_answers: all_answers_shuffeled };
    });
    setAllQuizes(procesedData);

    const initialSelectedStatus = recievedData.map((item, index) => {
      return { questionId: index, selectedAnswerId: -1 };
    });
    setSelectedAnswersOfQuizes(initialSelectedStatus);

    console.log("useEffect runned");
  }, []);

  // useEffect(() => {
  //   setNumberOfCorrectAnswers(0);
  // }, []);

  return (
    <div className="game-page">
      <img src={require("../images/blobs.png")} className="upper-rigt-img" />
      <img src={require("../images/blob 5.png")} className="lower-left-img" />
      <div className="all-quizes-container">{renderQuizes()}</div>
      <div className="control-panel">{renderControlPanel()}</div>
    </div>
  );
};

export default GamePage;
