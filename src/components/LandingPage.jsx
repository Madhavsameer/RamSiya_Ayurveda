import React from 'react';
import '../styles/LandingPage.css'; // Assuming CSS file is in the styles folder
import { Link } from 'react-router-dom';
import Services from './Services';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Contact from './Contact';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        
        <h1 className="header-title">Ayurveda & Wellness Center</h1>
        <p className="header-subtitle">Heal naturally with the power of Ayurveda</p>
        <Link to="./services" className="cta-button">Explore Services</Link>
      </header>

      <AboutUs/>
      <Services/>

     

      <Contact/>


      
    </div>
  );
};

export default LandingPage;
