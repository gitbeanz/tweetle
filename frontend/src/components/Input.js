import React from "react";
import "./Input.css";

export default function Input(props) {
  function handleClick() {
    props.setUsername(document.getElementById("input_id").value);
    props.loadUserTweets();
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleClick();
  }
  return (
    <div className="input-div">
      <form className="form" onSubmit={handleSubmit}>
        <label className="input-label">enter a twitter @</label>
        <input
          id="input_id"
          className="input"
          type="text"
          name="user"
          placeholder="boofbeanz"
        />
        <button className="input-button" type="submit">
          play
        </button>
      </form>
    </div>
  );
}
