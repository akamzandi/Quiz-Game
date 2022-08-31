import { useState } from "react";

import "./App.css";
import StartPage from "./Pages/StartPage";
import GamePage from "./Pages/GamePage";

function App() {
  const [showStartPageState, setShowStartPageState] = useState(true);

  return (
    <div className="App">
      {showStartPageState ? (
        <StartPage
          showStartPageState={showStartPageState}
          setShowStartPageState={setShowStartPageState}
        />
      ) : (
        <GamePage
          showStartPageState={showStartPageState}
          setShowStartPageState={setShowStartPageState}
        />
      )}
    </div>
  );
}

export default App;
