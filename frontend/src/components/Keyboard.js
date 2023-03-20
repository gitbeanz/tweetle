import React from "react";
import "./Keyboard.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

export default function Keyboard(props) {
  const first_row_letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const second_row_letters = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const third_row_letters = ["z", "x", "c", "v", "b", "n", "m"];
  console.log(props.usedKeys);
  return (
    <div className="keyboard">
      <div className="first-row">
        {first_row_letters.map((letter) => {
          return (
            <button id="key" className={props.usedKeys[letter]} key={letter}>
              {letter}
            </button>
          );
        })}
      </div>
      <div className="second-row">
        {second_row_letters.map((letter) => {
          return (
            <button id="key" className={props.usedKeys[letter]} key={letter}>
              {letter}
            </button>
          );
        })}
      </div>
      <div className="third-row">
        <button className="big-button" key="Enter">
          ENTER
        </button>

        {third_row_letters.map((letter) => {
          return (
            <button id="key" className={props.usedKeys[letter]} key={letter}>
              {letter}
            </button>
          );
        })}
        <button className="big-button" key="Del">
          <FontAwesomeIcon className="font-icon" icon={faBackspace} />
        </button>
      </div>
    </div>
  );
}
