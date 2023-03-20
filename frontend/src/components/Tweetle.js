import React, { useEffect, useState } from "react";
import useTweetle from "../hooks/useTweetle";
import TweetleGrid from "./TweetleGrid";
import Keyboard from "./Keyboard";
import "./Tweetle.css";
import Modal from "./Modal";

export default function Tweetle(props) {
  const {
    handleKeypress,
    currentGuess,
    handleKeyup,
    guesses,
    usedKeys,
    isCorrect,
    turn,
  } = useTweetle(props.word);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
      window.removeEventListener("keyup", handleKeyup);
    }
    if (turn > 5) {
      window.removeEventListener("keyup", handleKeyup);
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div className="tweetle-div">
      <TweetleGrid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keyboard usedKeys={usedKeys} handleKeypress={handleKeypress} />
      {showModal && (
        <Modal
          isCorrect={isCorrect}
          turn={turn}
          word={props.word}
          data={props.data}
          user={props.user}
        />
      )}
    </div>
  );
}
