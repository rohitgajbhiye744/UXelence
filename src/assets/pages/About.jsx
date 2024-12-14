import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About UXelence</h2>
      <p>
        UXelence is a team of passionate designers dedicated to creating user-focused digital experiences.
        Our mission is to blend creativity and strategy to transform ideas into impactful designs.
      </p>
      <div className="milestones">
        <div>
          <h3>50+</h3>
          <p>Successful Projects</p>
        </div>
        <div>
          <h3>30+</h3>
          <p>Happy Clients</p>
        </div>
        <div>
          <h3>5</h3>
          <p>Years of Excellence</p>
        </div>
      </div>
    </section>
  );
};

export default About;
