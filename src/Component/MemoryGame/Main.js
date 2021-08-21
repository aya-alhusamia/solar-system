import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import "./style.css";
import MemoryGame from "./MemoryGame";
function Main() {
  const [options, setOptions] = useState(null);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const json = localStorage.getItem("memorygamehighscore");
    const savedScore = JSON.parse(json);
    if (savedScore) {
      setHighScore(savedScore);
    }
  }, []);
  return (
    <div className="all">
      <div className="cont">
        <h1>Memory Game</h1>
        <div>High Score: {highScore}</div>
        <div>
          {options === null ? (
            <div className="dd">
              <button onClick={() => setOptions(12)}>Easy</button>
              <button onClick={() => setOptions(18)}>Medium</button>
              <button onClick={() => setOptions(24)}>Hard</button>
            </div>
          ) : (
            <div className="ff">
              <button
                onClick={() => {
                  const prevOptions = options;
                  setOptions(null);
                  setTimeout(() => {
                    setOptions(prevOptions);
                  }, 5);
                }}
              >
                Start Over
              </button>
              <button onClick={() => setOptions(null)}>Main Menu</button>
            </div>
          )}
        </div>
      </div>

      {options ? (
        <MemoryGame
          options={options}
          setOptions={setOptions}
          highScore={highScore}
          setHighScore={setHighScore}
        />
      ) : (
        <h2>Choose a difficulty to begin!</h2>
      )}
    </div>
  );
}

export default Main;
