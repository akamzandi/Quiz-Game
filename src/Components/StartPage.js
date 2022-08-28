import "./StartPage.css";

const StartMenu = () => {
  return (
    <div className="start-page">
      <img src={require("../images/blobs.png")} className="upper-rigt-img" />
      <img src={require("../images/blob 5.png")} className="lower-left-img" />
      <div className="menu-container">
        <h1 className="app-title">Quizzical</h1>
        <p>Some description if needed</p>
        <button className="start-btn">Start Quiz</button>
      </div>
    </div>
  );
};

export default StartMenu;
