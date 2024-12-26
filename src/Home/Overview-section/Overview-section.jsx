import React from "react";
import "./Overview-section.css";

const Overview_section = () => {
  return (
    <>
      <div className="home-overview-section">
        <div className="container">
          <div className="home-overview-inner">
            <div className="home-overview home-overview-left">
              <img src="assets/images/choose-1.png" alt="choose1" />
            </div>

            <div className="home-overview home-overview-right">
              <p className="center-text-title">Why Choose Us?</p>
              <h2 className="center-text-heading">
                Safeguard Your Brand with Cyber <br />Security and IT Solutions
              </h2>

              <p className="content1">
                Our comprehensive services ensure that your business is shielded
                from cyber threats and IT challenges, allowing you to focus on
                growth and success.
              </p>

              <div className="feature-list">
                <div className="feature-list-inner">
                  <div className="feature-list-item">Remote IT Assistance</div>
                  <div className="feature-list-item">Cloud Services</div>
                  <div className="feature-list-item">Managed IT Service</div>
                  <div className="feature-list-item">IT Security Services</div>
                  <div className="feature-list-item">Practice IT Management</div>
                  <div className="feature-list-item">Solving IT Problems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* home-overview-section --End */}

      {/* home-overview-section2 --Start- */}
      <div className="home-overview-section" id="home-overview-section-2">
        <div className="container">
          <div className="home-overview-inner">
            <div className="home-overview home-overview-right">
              <p className="center-text-title" id="content-title">
                Why Trust Us?
              </p>
              <h2 className="center-text-heading" id="content-heading">
                Achieve Digital Transformation For <br />
                Your Retail Business Services
              </h2>

              <p className="content1">
                Our tailored solutions help you streamline operations, enhance
                customer experiences, and boost sales through innovative
                technology and strategic insights.
              </p>

              <div className="feature-list">
                <div className="feature-list-inner">
                  <div className="feature-list-item">Protect your Business</div>
                  <div className="feature-list-item">Network Security</div>
                  <div className="feature-list-item">Data Security</div>
                  <div className="feature-list-item">Small Business Owners</div>
                  <div className="feature-list-item">Running your Business</div>
                  <div className="feature-list-item">Network Monitoring</div>
                </div>
              </div>
            </div>
            <div className="home-overview home-overview-left">
              <img src="assets/images/choose-2.png" alt="choose1" />
            </div>
          </div>
        </div>
      </div>
      {/* home-overview-section2 --End */}
    </>
  );
};

export default Overview_section;
