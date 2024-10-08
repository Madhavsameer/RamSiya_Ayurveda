// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Services from './components/Services';
import Contact from './components/Contact';
import Blog from './components/Blog'; // We’ll define this page later
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/"  element={<LandingPage/>} />
        <Route path="/landingpage"  element={<LandingPage/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about"  element={<AboutUs/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
