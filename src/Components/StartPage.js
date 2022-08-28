import "./StartPage.css";

const StartMenu = () => {
  return (
    <div className="start-page">
      <h2 className="upper-rigt-img">some LOGO</h2>
      <h2 className="lower-left-img">some LOGO</h2>
      <div className="menu-container">
        <h1 className="app-title">Quizzical</h1>
        <p>Some description if needed</p>
        <button className="start-btn">Start Quiz</button>
      </div>
    </div>
  );
};

export default StartMenu;
