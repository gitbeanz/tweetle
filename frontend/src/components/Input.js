import React from "react";
import "./Input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Input(props) {
  function handleClick() {
    props.setUsername(document.getElementById("input_id").value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleClick();
  }
  return (
    <div className="input-div">
      <form className="form" onSubmit={handleSubmit}>
        <label className="input-label">Enter a Twitter Username</label>
        <div className="input-glass">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="glass" />
          <input
            id="input_id"
            className="input"
            type="text"
            name="user"
            placeholder="Create Tweetle"
          />
        </div>
        <button className="input-button" type="submit">
          Play
        </button>
      </form>
    </div>
  );
}
