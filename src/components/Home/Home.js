import React, { useState, useEffect } from 'react';
import './Home.css';
import giosuePhoto from './20240112_221747.jpg';

const wordsList = ['Developer', 'Full-Stack', 'Dreamer'];

function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsList.length);
    }, 10000);

    return () => clearInterval(intervalId);

  }, []);

  return (
    <div className="Home-container" id="home"> {/* Aggiungi l'ID "home" */}
      <div className="text-container">
        <h1><span>G</span>iosue <span>F</span>ama</h1>
        <p>{wordsList[currentWordIndex]}</p>
      </div>
      <div className="image-container">
        <img src={giosuePhoto} alt='Giosue_Fama_photo' />
      </div>
    </div>
  );
}

export default Home;