import { useState, useEffect } from "react";

import "./GamePage.css";
import data from "../data";
import Quiz from "../Components/Quiz/Quiz";

const GamePage = ({ gameStartState, setGameStartState }) => {
  const [myData, setMyData] = useState(data.results);
  useEffect(() => {
    console.log(myData);
  }, []);

  return (
    <div className="game-page">
      <img src={require("../images/blobs.png")} className="upper-rigt-img" />
      <img src={require("../images/blob 5.png")} className="lower-left-img" />
      <div className="quizes-container">
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
      </div>
      <div className="control-panel">
        <button>Check Answers</button>
      </div>
    </div>
  );
};

export default GamePage;
