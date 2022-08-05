import "./App.css";
import { useState } from "react";
import Player from "./Player";
import ActionButton from "./ActionButton";
import ShowWinner from "./ShowWinner";

const actions = {
  rock: ["scissors", "rock"],
  paper: ["rock", "paper"],
  scissors: ["paper", "scissors"],
};

function randomAction() {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);

  return keys[index];
}

function calculator(action1, action2) {
  if (action1 === action2) {
    return 0;
  } else if (actions[action1].includes(action2)) {
    return -1;
  } else if (actions[action2].includes(action1)) {
    return 1;
  }
  return null;
}

function App() {
  const [playerAction, setPlayerAction] = useState("");
  const [computerAction, setComputerAction] = useState("");

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(0);

  const onActionSelected = (selectedAction) => {
    const newComputerAction = randomAction();

    setPlayerAction(selectedAction);
    setComputerAction(newComputerAction);

    const newWinner = calculator(selectedAction, newComputerAction);
    setWinner(newWinner);
    if (newWinner === -1) {
      setPlayerScore(playerScore + 1);
    } else if (newWinner === 1) {
      setComputerScore(computerScore + 1);
    }
  };
  return (
    <div className="center">
      <h1>Batu Gunting Kertas</h1>
      <div>
        <div className="container">
          <Player name="Player" score={playerScore} action={playerAction} />

          <Player
            name="Computer"
            score={computerScore}
            action={computerAction}
          />
        </div>
        <div>
          <ActionButton action="rock" onActionSelected={onActionSelected} />
          <ActionButton action="paper" onActionSelected={onActionSelected} />
          <ActionButton action="scissors" onActionSelected={onActionSelected} />
        </div>
        <ShowWinner winner={winner} />
      </div>
    </div>
  );
}

export default App;
