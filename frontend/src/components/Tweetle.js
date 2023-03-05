import React, { useEffect } from "react";
import useTweetle from "../hooks/useTweetle";
import "./Tweetle.css";

export default function Tweetle(props) {
  const { currentGuess, handleKeyup } = useTweetle(props.word);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  console.log(props.data);
  return(

   <div className="tweetle-div">Solution is: {props.word}</div>
   <div>current guess - {currentGuess}</div>
  )
}
