import "./StartPage.css";

const StartMenu = ({ showStartPageState, setShowStartPageState }) => {
  const handleClickOnStart = () => {
    setShowStartPageState((prevState) => !prevState);
  };

  return (
    <div className="start-page">
      <img src={require("../images/blobs.png")} className="upper-rigt-img" />
      <img src={require("../images/blob 5.png")} className="lower-left-img" />
      <div className="menu-container">
        <h1 className="app-title">Quizzical</h1>
        <p className="app-description">Test your general knowledge</p>
        <button className="start-btn" onClick={handleClickOnStart}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartMenu;
