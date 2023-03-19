import React from "react";
import "./Modal.css";

export default function Modal(props) {
  console.log(props.data);
  var guessString;
  if (props.turn > 1) {
    guessString = "guesses";
  } else {
    guessString = "guess";
  }
  return (
    <div className="modal">
      {props.isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="word">{props.word}</p>
          <p className="tweet">
            @{props.user} : "{props.data.text}"
          </p>
          <p>
            you found the solution in {props.turn} {guessString}
          </p>
          <p className="refresh">refresh to play again</p>
        </div>
      )}
      {!props.isCorrect && (
        <div>
          <h1>Yikes!</h1>
          <p className="word">{props.word}</p>
          <p className="tweet">
            @{props.user} : "{props.data.text}"
          </p>
          <p>Run it back, you got this 😼</p>
          <p className="refresh">Refresh to play again</p>
        </div>
      )}
    </div>
  );
}
