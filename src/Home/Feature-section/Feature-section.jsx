import React from "react";
import "./Feature-section.css"

const Feature_section = () => {
  return (
    <>
      <div className="home-feature-section">
        <div className="container">
          <div className="home-feature-section-inner">
            <div className="home-feature-upper">
              <p className="hireP center-text-title">Why Choose Us?</p>
              <h2 className="hireH center-text-heading" >
                Our Feature
              </h2>
            </div>
            <div className="home-feature-bottom">
              <div className="home-feature-bottom-inner">
                <div className="home-feature-item">
                  <div className="home-feature-item-inner">
                    <div className="home-feature-icon">
                      <img src="assets/images/feature-two-icon-1.svg" />
                    </div>
                    <h3>Increase Productivity</h3>
                    <p>
                      Boost your team's efficiency with advanced tools and
                      streamlined processes, enabling faster project completion
                      and better resource management.
                    </p>
                  </div>
                </div>
                <div className="home-feature-item">
                  <div className="home-feature-item-inner">
                    <div className="home-feature-icon">
                      <img src="assets/images/feature-two-icon-2.svg" />
                    </div>
                    <h3>Control IT Costs</h3>
                    <p>
                      Optimize your IT expenses with company's cost-effective
                      solutions, ensuring maximum value without compromising on
                      quality or performance.
                    </p>
                  </div>
                </div>
                <div className="home-feature-item">
                  <div className="home-feature-item-inner">
                    <div className="home-feature-icon">
                      <img src="assets/images/feature-two-icon-3.svg" />
                    </div>
                    <h3>Resolve Issues Faster</h3>
                    <p>
                      Leverage our company expertise to quickly identify and quickly resolve
                      technical issues, minimizing your downtime and maintaining
                      business continuity.
                    </p>
                  </div>
                </div>
                <div className="home-feature-item">
                  <div className="home-feature-item-inner">
                    <div className="home-feature-icon">
                      <img src="assets/images/feature-two-icon-4.svg" />
                    </div>
                    <h3>Fully Managed Services</h3>
                    <p>
                      Experience seamless IT management with our company's comprehensive
                      services, covering from maintenance to security, so you
                      can focus on your business.
                    </p>
                  </div>
                </div>
                <div className="home-feature-item">
                  <div className="home-feature-item-inner">
                    <div className="home-feature-icon">
                      <img src="assets/images/feature-two-icon-5.svg" />
                    </div>
                    <h3>Improve Security</h3>
                    <p>
                      Protect your data and infrastructure with our robust
                      security measures, designed to prevent breaches and ensure
                      compliance with industry standards.
                    </p>
                  </div>
                </div>
                <div className="home-feature-item">
                  <div className="home-feature-item-inner">
                    <div className="home-feature-icon">
                      <img src="assets/images/feature-two-icon-6.svg" />
                    </div>
                    <h3>Expert Team</h3>
                    <p>
                      Work with our skilled professionals who bring extensive
                      experience and knowledge to deliver innovative solutions
                      tailored to your business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature_section;
