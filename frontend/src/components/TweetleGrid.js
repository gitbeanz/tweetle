import React from "react";
import TweetleRow from "./TweetleRow";

export default function TweetleGrid(props) {
  console.log("GUESSES: ", props.guesses);
  return (
    <div>
      {props.guesses.map((guess, index) => {
        if (props.turn === index) {
          return <TweetleRow key={index} currentGuess={props.currentGuess} />;
        }
        return <TweetleRow key={index} guess={guess} />;
      })}
    </div>
  );
}
