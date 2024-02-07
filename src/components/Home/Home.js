import React from 'react';
import './Home.css';
import giosuePhoto from './20240112_221747.jpg';



function Home() {


 

  return (
    <div className="Home-container" id="home"> {/* Aggiungi l'ID "home" */}
      <div className="text-container">
        <h1><span>G</span>iosue <span>F</span>ama</h1>
    
      </div>
      <div className="image-container">
        <img src={giosuePhoto} alt='Giosue_Fama_photo' />
      </div>
    </div>
  );
}

export default Home;