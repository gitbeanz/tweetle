import React, { useEffect } from "react";
import useTweetle from "../hooks/useTweetle";
import TweetleGrid from "./TweetleGrid";
import "./Tweetle.css";

export default function Tweetle(props) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useTweetle(
    props.word
  );

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div className="tweetle-div">
      Solution is: {props.word}
      <div>current guess - {currentGuess}</div>
      <TweetleGrid guesses={guesses} currentGuess={currentGuess} turn={turn} />
    </div>
  );
}
