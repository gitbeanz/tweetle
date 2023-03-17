import React, { useEffect } from "react";
import useTweetle from "../hooks/useTweetle";
import TweetleGrid from "./TweetleGrid";
import Keyboard from "./Keyboard";
import "./Tweetle.css";

export default function Tweetle(props) {
  const { currentGuess, handleKeyup, guesses, usedKeys, isCorrect, turn } =
    useTweetle(props.word);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      window.removeEventListener("keyup", handleKeyup);
    }
    if (turn > 5) {
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div className="tweetle-div">
      <TweetleGrid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keyboard usedKeys={usedKeys} />
    </div>
  );
}
