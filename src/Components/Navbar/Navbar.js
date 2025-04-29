import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="hamburger" onClick={togglePanel}>
          <GiHamburgerMenu />
        </div>
      </div>

      <div className={`side-panel ${isOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={togglePanel}>
          <FaTimes size={24} />
        </div>
        <nav className="nav-links">
          <a href="home">Home</a>
          <a href="about">About</a>
          <a href="skills">Skills</a>
          <a href="projects">Projects</a>
          <a href="resume">Resume</a>
          <a href="contact">Contact</a>
        </nav>
      </div>

      {isOpen && <div className="overlay" onClick={togglePanel}></div>}
    </>
  );
}

