import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service">
          <h3>UI/UX Design</h3>
          <p>Designing intuitive and visually appealing interfaces that captivate users.</p>
        </div>
        <div className="service">
          <h3>Prototyping</h3>
          <p>Interactive prototypes that bring your ideas to life before development.</p>
        </div>
        <div className="service">
          <h3>Design Systems</h3>
          <p>Streamlined, scalable design systems to ensure consistency across your brand.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
