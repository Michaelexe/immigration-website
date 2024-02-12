import React from "react";

import "./styles.css";

function Services() {
  return (
    <section className="section home-service">
      <h1>Our Immigration Services</h1>
      <div className="grid">
        <div className="service-card">
          <span className="header">Express Entry</span>
          <span className="description">
            Immigrate to Canada through the fastest immigration route.
          </span>
          <button>Read More</button>
        </div>
        <div className="service-card">
          <span className="header">Work in Canada</span>
          <span className="description">
            Immigrate to Canada through the fastest immigration route.
          </span>
          <button>Read More</button>
        </div>
        <div className="service-card">
          <span className="header">Provincial Nominee Program</span>
          <span className="description">
            Immigrate to Canada through the fastest immigration route.
          </span>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
}

export default Services;
