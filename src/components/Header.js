import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <h1>
        <a href="#hero" className="portfolio-name">GANESH's PORTFOLIO</a>
      </h1>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Menu */}
      <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
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






// import React from "react";
// import "./Header.css";

// function Header() {
//   return (
//     <header className="header">
//       <h1><a href="#hero" className="portfolio-name">GANESH's  PORTFOLIO</a></h1>
//       <nav className="nav-items">
//         <ul>
//           <li><a href="#skills">Skills</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#projects">Projects</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
