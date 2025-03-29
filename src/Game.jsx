import React, { useState } from "react";
import "./App.css";

const choices = ["Rock", "Paper", "Scissors"];

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(compChoice);

    if (choice === compChoice) {
      setResult("It's a draw!");
    } else if (
      (choice === "Rock" && compChoice === "Scissors") ||
      (choice === "Scissors" && compChoice === "Paper") ||
      (choice === "Paper" && compChoice === "Rock")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  };

  return (
    <div className="game-container">
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => playGame(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div className="result">
        <p>Your choice: {playerChoice}</p>
        <p>Computer's choice: {computerChoice}</p>
        <h2>{result}</h2>
      </div>
    </div>
  );
};

export default Game;
