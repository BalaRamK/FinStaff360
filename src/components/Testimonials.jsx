import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial-block">
          <p className="testimonial-text">"FinStaff360 has transformed our HR and financial operations. The real-time P&L dashboard is a game-changer!"</p>
          <p className="testimonial-author">— Alex M., CFO at TechCorp</p>
        </div>
        {/* Add more testimonial blocks here */}
      </div>
    </section>
  );
}

export default Testimonials;
