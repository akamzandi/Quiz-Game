import "./App.css";
import StartPage from "./Components/StartPage";
import GamePage from "./Components/GamePage";

function App() {
  return (
    <div className="App">
      {/* <StartPage /> */}
      {true ? <GamePage /> : <StartPage />}
    </div>
  );
}

export default App;
