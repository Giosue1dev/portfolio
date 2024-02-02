import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import CustomNavbar from './nav/nav.js';
import Home from './Home/Home.js';
import About from './About/About.js';
import Contact from './Contact/Contact.js';
import Services from './Services/Services.js';
import './App.css';

function App() {
  return (
    <Router>
        <CustomNavbar />
        
      <Home />
      <About />
      <Services />
      <Contact />
    </Router>
  );
}

export default App;