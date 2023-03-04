import React from "react";
import "./Input.css";

export default function Input(props) {
  function handleClick() {
    props.setUsername(document.getElementById("input_id").value);
    props.loadUserTweets();
  }
  return (
    <div className="input-div">
      <div className="form">
        <label className="input-label">enter a twitter @</label>
        <input
          id="input_id"
          className="input"
          type="text"
          name="user"
          placeholder="boofbeanz"
        />
        <button className="input-button" onClick={handleClick}>
          play
        </button>
      </div>
    </div>
  );
}
