import React from "react";

import "./About.css";
import resumePDF from "./Giosue_Fama_cv.pdf";

function About() {
  return (
    <div className="about-container" id="about"> {/* Aggiungi l'ID "about" */}
      <div className="left-section">
        <h2>About</h2>
        <p>
          I am a guy passionate about programming, who is trying to follow his
          dream, thanks to start2impact I am able to acquire the skills but I am
          ready to improve myself, I can work as a team and I try to give my
          best in everything I do until I reach the goal and then set a new one.
          I work both on-site and remotely, I'm always ready to get involved and
          give my best
        </p>
      </div>
      <a
        href={resumePDF}
        download="Giosue_Fama_cv.pdf"
        className="download-link"
      >
        Download CV
      </a>
    </div>
  );
}

export default About;
