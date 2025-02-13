import React, { useEffect, useRef } from 'react';
import './HowItWorks.css';
import { FaDatabase, FaChartLine, FaCheck, FaChartBar } from 'react-icons/fa'; // Import FaChartBar

function HowItWorks() {
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2, // Adjust as needed
      }
    );

    stepRefs.current.forEach((step) => {
      if (step) {
        observer.observe(step);
      }
    });

    return () => {
      stepRefs.current.forEach((step) => {
        if (step) {
          observer.unobserve(step);
        }
      });
    };
  }, []);

  return (
    <section className="how-it-works">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="how-it-works-steps">
        <div className="how-it-works-step" ref={(el) => (stepRefs.current[0] = el)}>
          <div className="how-it-works-step-content">
            <FaDatabase className="how-it-works-step-icon" />
            <div className="how-it-works-step-description">
              Connect Your Data: Import your employee, business unit, and payroll data effortlessly.
            </div>
          </div>
        </div>
        <div className="how-it-works-step" ref={(el) => (stepRefs.current[1] = el)}>
          <div className="how-it-works-step-content">
            <FaChartLine className="how-it-works-step-icon" />
            <div className="how-it-works-step-description">
              Automate & Analyze: Our platform automatically aggregates data to deliver real-time P&L insights.
            </div>
          </div>
        </div>
        <div className="how-it-works-step" ref={(el) => (stepRefs.current[2] = el)}>
          <div className="how-it-works-step-content">
            <FaCheck className="how-it-works-step-icon" />
            <div className="how-it-works-step-description">
              Take Action: Make informed decisions with dashboards that highlight key financial and HR metrics.
            </div>
          </div>
        </div>
        <div className="how-it-works-step" ref={(el) => (stepRefs.current[3] = el)}>
          <div className="how-it-works-step-content">
            <FaChartBar className="how-it-works-step-icon" />
            <div className="how-it-works-step-description">
              Scale Your Business: Streamline processes, reduce errors, and focus on growth.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
