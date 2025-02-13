import React from 'react';
import './Features.css';
import { FaUsers, FaCalculator, FaChartLine } from 'react-icons/fa';

function Features() {
  return (
    <section className="features">
      <h2 className="features-title">Key Features</h2>
      <div className="features-grid">
        <div className="feature-block">
          <FaUsers className="feature-icon" />
          <h3 className="feature-title">Centralized Employee & BU Management</h3>
          <p className="feature-description">Easily store and manage employee details, assign them to business units, and keep your team organized.</p>
        </div>
        <div className="feature-block">
          <FaCalculator className="feature-icon" />
          <h3 className="feature-title">Automated Payroll Processing</h3>
          <p className="feature-description">Seamlessly process payroll data including salaries, taxes, and benefits while reducing manual errors.</p>
        </div>
        <div className="feature-block">
          <FaChartLine className="feature-icon" />
          <h3 className="feature-title">Dynamic P&L Insights</h3>
          <p className="feature-description">Combine payroll expenses and revenue data to generate clear, actionable P&L statements at a glance.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
