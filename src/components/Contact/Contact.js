import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin as faLinkedinBrands, faGithub as faGithubBrands } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact-section" id="contact"> {/* Aggiunto l'ID "contact" */}
      <h2>Contact Me</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>famagiosue@gmail.com</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} />
          <span>+39 3716411992</span>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/giosuefama/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinBrands} />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Giosue1dev" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubBrands} />
            <span>GitHub</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
