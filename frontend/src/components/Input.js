import React from "react";
import "./Input.css";

export default function Input() {
  return (
    <div className="input-div">
      <div className="form">
        <label className="input-label">enter a twitter @</label>
        <input
          className="input"
          type="text"
          name="user"
          placeholder="boofbeanz"
        />
        <button className="input-button">play</button>
      </div>
    </div>
  );
}
