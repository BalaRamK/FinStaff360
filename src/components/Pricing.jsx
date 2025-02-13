import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <section className="pricing">
      <h2 className="pricing-title">Pricing</h2>
      <div className="pricing-grid">
        <div className="pricing-card">
          <h3 className="pricing-plan-name">Basic</h3>
          <p className="pricing-plan-price">$29/month</p>
          <p className="pricing-plan-description">Ideal for small businesses – includes core features.</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button className="pricing-cta">Get Started</button>
        </div>
        <div className="pricing-card">
          <h3 className="pricing-plan-name">Pro</h3>
          <p className="pricing-plan-price">$99/month</p>
          <p className="pricing-plan-description">Advanced analytics and integrations for growing companies.</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <button className="pricing-cta">Get Started</button>
        </div>
        <div className="pricing-card">
          <h3 className="pricing-plan-name">Enterprise</h3>
          <p className="pricing-plan-price">Contact Us</p>
          <p className="pricing-plan-description">Custom solutions and dedicated support.</p>
          <ul>
            <li>Custom Features</li>
            <li>Dedicated Support</li>
          </ul>
          <button className="pricing-cta">Contact Us</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
