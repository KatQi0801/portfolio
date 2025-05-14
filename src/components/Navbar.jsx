
import React from "react";
import "./../styles/landing.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#interests">Interests</a>
      <a href="#resume"><strong>Resume</strong></a>
    </nav>
  );
};

export default Navbar;
