import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="assets/images/project1.jpg" alt="Project 1" />
          <h3>E-commerce App</h3>
          <p>Redesigned an e-commerce app for a seamless shopping experience.</p>
        </div>
        <div className="portfolio-item">
          <img src="assets/images/project2.jpg" alt="Project 2" />
          <h3>Healthcare Dashboard</h3>
          <p>Developed an intuitive dashboard for patient management.</p>
        </div>
        <div className="portfolio-item">
          <img src="assets/images/project3.jpg" alt="Project 3" />
          <h3>Travel Website</h3>
          <p>Crafted an engaging travel platform for planning vacations.</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
