import { useState } from "react";

const useTweetle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  // format a guess into solution
  const formatGuess = () => {};

  const addNewGuess = () => {};

  const handleKeyup = ({ key }) => {
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess < 5) {
        setCurrentGuess((previousLetter) => {
          return (previousLetter += key);
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useTweetle;
