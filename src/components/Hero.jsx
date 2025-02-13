import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-headline">Streamline Your Workforce & Financial Management</h1>
        <p className="hero-subheadline">Integrate employee data, payroll processing, and P&L insights in one powerful platform.</p>
        <button className="hero-cta">Start Your Free Trial</button>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1617191095795-855188016937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Dashboard Overview" />
      </div>
    </section>
  );
}

export default Hero;
