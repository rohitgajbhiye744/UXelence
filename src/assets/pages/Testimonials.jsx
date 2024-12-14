import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-list">
        <blockquote>
          "Working with UXelence was a game-changer. Their designs are innovative and user-focused!"
          <cite>- Jane Doe, CEO of TechCorp</cite>
        </blockquote>
        <blockquote>
          "They transformed our website into a high-converting platform. Highly recommend!"
          <cite>- John Smith, Founder of TravelEase</cite>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
