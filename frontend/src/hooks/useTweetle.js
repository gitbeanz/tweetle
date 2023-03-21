import { useState } from "react";

const useTweetle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({ "": "blank" }); //key = letter, value = color

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
    setUsedKeys((previousKeys) => {
      let newKeys = { ...previousKeys };
      guessData.forEach((letter) => {
        console.log(letter.color);
        const color = newKeys[letter.key];
        if (letter.color === "green") {
          newKeys[letter.key] = "green";
          return;
        }
        if (letter.color === "yellow" && color !== "green") {
          newKeys[letter.key] = "yellow";
          return;
        }
        if (
          letter.color === "grey" &&
          color !== "green" &&
          color !== "yellow"
        ) {
          newKeys[letter.key] = "grey";
          return;
        }
      });
      return newKeys;
    });
    setCurrentGuess("");
  };

  //handle when user types
  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      if (
        turn <= 5 &&
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
      if (currentGuess.length < 5 && !currentGuess.includes(key)) {
        setCurrentGuess((previousLetter) => {
          return (previousLetter += key);
        });
      }
    }
  };

  const handleKeypress = (letter) => {
    if (letter === "ENTER") {
      if (
        turn <= 5 &&
        !history.includes(currentGuess) &&
        currentGuess.length === 5
      ) {
        const formatted = formatGuess();
        addNewGuess(formatted);
      } else {
        return;
      }
    }
    if (letter == "Backspace") {
      setCurrentGuess((previousWord) => {
        return previousWord.slice(0, -1);
      });
      return;
    }
    if (currentGuess.length < 5 && !currentGuess.includes(letter)) {
      setCurrentGuess((previousLetter) => {
        return (previousLetter += letter);
      });
    }
  };

  return {
    handleKeypress,
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    handleKeyup,
  };
};

export default useTweetle;
