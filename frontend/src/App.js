import "./App.css";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import { useState } from "react";
import Axios from "axios";
import Twitter from "./twitter.svg";
import Tweetle from "./components/Tweetle";

function App() {
  const [username, setUsername] = useState("");
  const [loadGame, setLoadGame] = useState(false);
  const [tweetleData, setTweetleData] = useState({});
  function loadUserTweets() {
    Axios.get("http://localhost:3001/api/tweets/" + username).then(
      (response) => {
        if (response.status === 500) {
          window.alert("Oops! Twitter user not found. Try again");
        }
        if (response.status === 200) {
          pickTweetle(response.data);
          setLoadGame(true);
        }
        if (response.status === 400) {
        }
      }
    );
  }
  function pickTweetle(data) {
    var tweetOptions = [];
    data.map((tweetData) => {
      var words = tweetData.text.split(" ");
      var chosenWord = false;
      var chosenWordArray = [];
      words.forEach((word) => {
        if (word.length == 5 && word.match(/^[A-Za-z]+$/)) {
          chosenWord = true;
          chosenWordArray.push(word.toLowerCase());
        }
      });
      if (chosenWord) {
        chosenWordArray.forEach((word) => {
          tweetOptions.push({ word: word, data: tweetData });
        });
      }
    });
    const randomIndex = Math.floor(Math.random() * tweetOptions.length);
    setTweetleData(tweetOptions[randomIndex]);
  }
  return (
    <div className="App">
      <Navbar />

      {!loadGame && (
        <Input setUsername={setUsername} loadUserTweets={loadUserTweets} />
      )}
      {tweetleData && (
        <Tweetle word={tweetleData.word} data={tweetleData.data} />
      )}
    </div>
  );
}

export default App;
