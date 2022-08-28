import { useState } from "react";

import "./App.css";
import StartPage from "./Components/StartPage";
import GamePage from "./Components/GamePage";

function App() {
  const [gameStartState, setGameStartState] = useState(true);

  return (
    <div className="App">
      {gameStartState ? (
        <StartPage
          gameStartState={gameStartState}
          setGameStartState={setGameStartState}
        />
      ) : (
        <GamePage
          gameStartState={gameStartState}
          setGameStartState={setGameStartState}
        />
      )}
    </div>
  );
}

export default App;
