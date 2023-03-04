import logo from "./twitter.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  function loadUserTweets() {
    Axios.get("http://localhost:3001/api/tweets/" + username).then(
      (response) => {
        console.log(response);
      }
    );
  }
  return (
    <div className="App">
      <Navbar />
      <Input setUsername={setUsername} loadUserTweets={loadUserTweets} />
    </div>
  );
}

export default App;
