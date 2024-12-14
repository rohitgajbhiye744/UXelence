import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 UXelence. All rights reserved.</p>
      <div className="social-links">
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
