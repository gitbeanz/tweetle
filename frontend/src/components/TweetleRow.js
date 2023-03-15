import React from "react";
import "./TweetleRow.css";

export default function TweetleRow(props) {
  if (props.guess) {
    console.log("TRUE");
    return (
      <div className="row past">
        {props.guess.map((letter, index) => (
          <div key={index} className={letter.color}>
            {letter.key}
          </div>
        ))}
      </div>
    );
  }

  if (props.currentGuess) {
    let lettersArray = props.currentGuess.split("");
    return (
      <div className="row current">
        {lettersArray.map((letter, index) => (
          <div key={index} className="filled">
            {letter}
          </div>
        ))}
        {[...Array(5 - lettersArray.length)].map((value, index) => (
          <div key={index}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
