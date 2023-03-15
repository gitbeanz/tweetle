import React from "react";
import TweetleRow from "./TweetleRow";

export default function TweetleGrid(props) {
  return (
    <div>
      {props.guesses.map((guess, index) => {
        return <TweetleRow key={index} />;
      })}
    </div>
  );
}
