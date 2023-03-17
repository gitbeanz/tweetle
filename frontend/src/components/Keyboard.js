import React from "react";
import "./Keyboard.css";
import { useState } from "react";

export default function Keyboard(props) {
  const [letters, setLetters] = useState([
    { key: "a" },
    { key: "b" },
    { key: "c" },
    { key: "d" },
    { key: "e" },
    { key: "f" },
    { key: "g" },
    { key: "h" },
    { key: "i" },
    { key: "j" },
    { key: "k" },
    { key: "l" },
    { key: "m" },
    { key: "n" },
    { key: "o" },
    { key: "p" },
    { key: "q" },
    { key: "r" },
    { key: "s" },
    { key: "t" },
    { key: "u" },
    { key: "v" },
    { key: "w" },
    { key: "x" },
    { key: "y" },
    { key: "z" },
  ]);
  console.log(props.usedKeys);
  return (
    <div className="keyboard">
      {letters.map((letter) => {
        return (
          <div className={props.usedKeys[letter.key]} key={letter.key}>
            {letter.key}
          </div>
        );
      })}
    </div>
  );
}
