import React from "react";
import "../styles/landing.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Katjana Gora | Designed with passion.</p>
      <div className="social-icons">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:katjamaqi@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
