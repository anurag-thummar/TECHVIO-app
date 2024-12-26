

import React from "react";
import "./Hire-section.css";

const HireSection = () => {
  return (
    <section className="home-hire-section">
      <div className="home-hire-section-inner">
        <p className="center-text-title">Want to work with us?</p>
        <h2 className="center-text-heading">
          Digitally Transform & Grow Your <br/> Business
        </h2>
        <p className="home-hire-text">
          Transform your business with our digital expertise. Grow through
          strategic insights, innovative solutions, and cutting-edge technology.
          Partner with us for accelerated digital transformation and sustainable
          growth.
        </p>

        <div className="home-hire-section-buttons">
          <a className="CC common-button" id="call-now" href="#">
            Call Now
          </a>
          <a className="contact-us" href="#">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HireSection;
