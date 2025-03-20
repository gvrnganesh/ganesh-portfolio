import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1><a href="#hero" className="portfolio-name">GANESH's  PORTFOLIO</a></h1>
      <nav className="nav-items">
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
