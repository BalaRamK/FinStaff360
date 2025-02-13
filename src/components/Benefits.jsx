import React from 'react';
import './Benefits.css';
import { FaClock, FaCheckCircle, FaChartLine, FaShieldAlt } from 'react-icons/fa';

function Benefits() {
  return (
    <section className="benefits">
      <h2 className="benefits-title">Benefits</h2>
      <div className="benefits-grid">
        <div className="benefit-block">
          <FaClock className="benefit-icon" />
          <h3 className="benefit-title">Save Time</h3>
          <p className="benefit-description">Eliminate manual data entry and repetitive tasks.</p>
        </div>
        <div className="benefit-block">
          <FaCheckCircle className="benefit-icon" />
          <h3 className="benefit-title">Improve Accuracy</h3>
          <p className="benefit-description">Ensure error-free payroll and financial calculations.</p>
        </div>
        <div className="benefit-block">
          <FaChartLine className="benefit-icon" />
          <h3 className="benefit-title">Enhance Visibility</h3>
          <p className="benefit-description">Gain comprehensive insights to drive better decision-making.</p>
        </div>
        <div className="benefit-block">
          <FaShieldAlt className="benefit-icon" />
          <h3 className="benefit-title">Secure & Scalable</h3>
          <p className="benefit-description">Built on modern technologies ensuring your data is safe and scalable as you grow.</p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
