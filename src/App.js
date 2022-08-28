import "./App.css";
import StartPage from "./Components/StartPage";
import GamePage from "./Components/GamePage";

function App() {
  return (
    <div className="App">
      {/* <StartPage /> */}
      {false ? <GamePage /> : <StartPage />}
    </div>
  );
}

export default App;
