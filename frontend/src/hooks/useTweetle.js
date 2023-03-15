import { useState } from "react";

const useTweetle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into solution map with letter and color data, then return
  const formatGuess = () => {
    let tweetleArray = [...solution];
    let guessMap = [...currentGuess].map((letter) => {
      return { key: letter, color: "grey" };
    });
    guessMap.forEach((letter, index) => {
      if (tweetleArray[index] === letter.key) {
        letter.color = "green";
        tweetleArray[index] = null;
      }
    });

    guessMap.forEach((letter, index) => {
      if (tweetleArray.includes(letter.key) && letter.color !== "green") {
        guessMap[index].color = "yellow";
        tweetleArray[tweetleArray.indexOf(letter.key)] = null;
      }
    });
    return guessMap;
  };

  const addNewGuess = (guessData) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
      //game has been won
    }
    setGuesses((previousGuess) => {
      let updatedGuess = [...previousGuess];
      updatedGuess[turn] = guessData;
      return updatedGuess;
    });
    setHistory((previousHistory) => {
      return [...previousHistory, currentGuess];
    });
    setTurn((previousTurn) => {
      return previousTurn + 1;
    });
    setCurrentGuess("");
  };

  //handle when user types
  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      if (
        turn < 5 &&
        !history.includes(currentGuess) &&
        currentGuess.length === 5
      ) {
        const formatted = formatGuess();
        addNewGuess(formatted);
      } else {
        return;
      }
    }
    if (key == "Backspace") {
      setCurrentGuess((previousWord) => {
        return previousWord.slice(0, -1);
      });
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((previousLetter) => {
          return (previousLetter += key);
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useTweetle;
