import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container" id="services"> {/* Aggiunto l'ID "services" */}
      <div className="frontend">
        <h2>Frontend Services</h2>
        <ul>
          <li>Html</li>
          <li>Css</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
      </div>
      <div className="backend">
        <h2>Backend Services</h2>
        <ul>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;