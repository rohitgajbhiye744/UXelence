import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="hero">
        <h1>Welcome to UXelence</h1>
        <p>Crafting seamless digital experiences that leave a lasting impact.</p>
        <a href="#services" className="cta-button">Explore Services</a>
      </div>
    </section>
  );
};

export default Home;
