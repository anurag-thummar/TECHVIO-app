import React from "react";
import "./Partner-section.css";

const Partners_section = () => {
  return (
    <div className="partners-section">
      <div className="container">
        <div className="partners-section-inner">
          <div className="partners-upper">
            <p className="partnersParagraph center-text-title">
              Trusted By Over 1500
            </p>
            <h2 className="partnersHeader center-text-heading" id="partners-heading">
              Our Customers
            </h2>
          </div>
          <div className="partners-down">
            <div className="partners-down-inner">
              <div className="partner-item">
                <a href="#">
                  <img src="assets/images/client-1.png" alt="Partner 1" />
                </a>
              </div>
              <div className="partner-item">
                <a href="#">
                  <img src="assets/images/client-2.png" alt="Partner 2" />
                </a>
              </div>
              <div className="partner-item">
                <a href="#">
                  <img src="assets/images/client-3.png" alt="Partner 3" />
                </a>
              </div>
              <div className="partner-item">
                <a href="#">
                  <img src="assets/images/client-4.png" alt="Partner 4" />
                </a>
              </div>
              <div className="partner-item">
                <a href="#">
                  <img src="assets/images/client-5.png" alt="Partner 5" />
                </a>
              </div>
              <div className="partner-item">
                <a href="#">
                  <img src="assets/images/client-6.png" alt="Partner 6" />
                </a>
              </div>
              <div className="partner-item">
                <a href="#">
                  <img src="assets/images/client-7.png" alt="Partner 7" />
                </a>
              </div>
              <div className="partner-item">
                <a href="#">
                  <img src="assets/images/client-8.png" alt="Partner 8" />
                </a>
              </div>
              <div className="partner-item">
                <a href="#">
                  <img src="assets/images/client-9.jpg" alt="Partner 9" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners_section;
