import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Images from './Images';


function App() {
  const [receivedImages, setReceivedImages] = useState([0,1,2,3,4,5,6]);
  const [randomImages, setRandomImages] = useState([0,1,2,3,4,5,6]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [data, setData] = useState({
    "score": 0,
    "bestScore":0
  });

  const generateRandomImages = (length) => {
    return [...Array(length)].map(() => ~~(1 + Math.random() * 100) );
  }

  const imagesRenewal = () => {
    console.log("image renewal");
    setRandomImages(generateRandomImages(7));
    setReceivedImages([]);
    setData({
      "score": 0,
      "bestScore": (data.score > data.bestScore ? data.score : data.bestScore)
    });
  }

  const renewal = (imageReceived) => {
    if (receivedImages.includes(imageReceived)) {
      imagesRenewal();
    } else {
      console.log("update1: received images are: %s",JSON.stringify(receivedImages));
      setReceivedImages(prevArray => [...prevArray, imageReceived]);
      setData({
        ...data,
        "score": data.score + 1,
      });
      console.log("update2: received images are: %s",JSON.stringify(receivedImages));
    }
  }

  useEffect(() => {
    console.log("received images are: %s",JSON.stringify(receivedImages));
    console.log("random images are: %s",JSON.stringify(randomImages));
    console.log("score:%s \n best score:%s", JSON.stringify(data.score), JSON.stringify(data.bestScore));
  }, [receivedImages]);

  return (
    <div className="App">
      <div class="Navigation">
        <div class="Title">
        Project: Memory Card 
        </div>
        <div class="Data">
          <div class="Score">score:{data.score}</div>
          <div class="Best Score">bestScore:{data.bestScore}</div>
        </div>
      </div>
      <header className="App-body">
        <Images
          src={logo} 
          className="App-logo" 
          alt="logo" 
          renewal={renewal} 
          randomImages={randomImages}
          data={data}
        />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>test: Count:</p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
