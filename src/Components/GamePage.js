import "./GamePage.css";

const GamePage = ({ gameStartState, setGameStartState }) => {
  return (
    <div className="game-page">
      <h2>This is The Game Page</h2>
      <img src={require("../images/blobs.png")} className="upper-rigt-img" />
      <img src={require("../images/blob 5.png")} className="lower-left-img" />
    </div>
  );
};

export default GamePage;
