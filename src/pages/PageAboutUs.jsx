import React from 'react';
import "./PageAboutUs.css";
import About_section from '../Home/About-section/About-section';
import BusinessStats_section from '../Home/BusinessStat-section/BusinessStats-section';
import HireSection from '../Home/Hire-section/Hire-section';
import PartnersSection from '../Home/Partners-section/PartnersSection';
import Team_section from '../Home/Team-seaction/Team-section';

const PageAboutUs = () => {
  return (
    <>
      <div className="working-proccess-section">
        <div className="container">
          <div className="working-proccess-section-inner">
            <div className="working-proccess-section-upper">
              <p className="center-text-title">4 Step Work Process</p>

              <h2 className="center-text-heading">Working Process</h2>
            </div>

            <div className="working-process-section-down">
              <div className="working-process-section-down-inner">
                <div className="process-item">
                  <div className="process-item-inner">
                    <div className="process-icon">
                      <img
                        src="/assets/images/workprocess-icon-1.svg"
                        alt="workprocess-icon-1"
                      />
                    </div>

                    <h3>Discover</h3>

                    <p>
                      We identify your needs and explore the best solutions to achieve your goals, ensuring a thorough understanding.
                    </p>

                    <span>01</span>
                  </div>
                </div>
                <div className="process-item">
                  <div className="process-item-inner">
                    <div className="process-icon">
                      <img
                        src="/assets/images/workprocess-icon-2.svg"
                        alt="workprocess-icon-1"
                      />
                    </div>

                    <h3>Design & Development</h3>

                    <p>
                      We create tailored designs and develop solutions to meet
                      your business needs, focusing on innovation and quality.
                    </p>
                    <span>02</span>
                  </div>
                </div>
                <div className="process-item">
                  <div className="process-item-inner">
                    <div className="process-icon">
                      <img
                        src="/assets/images/workprocess-icon-3.svg"
                        alt="workprocess-icon-1"
                      />
                    </div>

                    <h3>Install & Testing</h3>

                    <p>
                      We implement and rigorously test to ensure flawless
                      performance and reliability, addressing any issues
                      promptly.
                    </p>

                    <span>03</span>
                  </div>
                </div>
                <div className="process-item">
                  <div className="process-item-inner">
                    <div className="process-icon">
                      <img
                        src="/assets/images/workprocess-icon-4.svg"
                        alt="workprocess-icon-1"
                      />
                    </div>

                    <h3>Project Delivery</h3>

                    <p>
                      We deliver your project on time, ensuring satisfaction and
                      success, with ongoing support and maintenance.
                    </p>

                    <span>04</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-feature-section">
        <div className="container">
          <div className="about-feature-section-inner">
            <div className="about-feature-item">
              <div className="about-feature-item-inner">
                <img src="/assets/images/feature-icon-1.svg" alt="feature-icon-1" />

                <h3>Flexibility & Responsive</h3>

                <p>
                  Our team adapts to your needs, providing responsive solutions
                  that fit your business requirements seamlessly and efficiently,
                  ensuring maximum value.
                </p>

                <div className="arrow-readmore">
                  <a href="#"
                  ><i className="fa-regular fa-arrow-right"></i>Learn More</a
                  >
                </div>
              </div>
            </div>
            <div className="about-feature-item">
              <div className="about-feature-item-inner">
                <img src="/assets/images/feature-icon-2.svg" alt="feature-icon-1" />

                <h3>Dedicated Teams</h3>

                <p>
                  Our skilled teams are dedicated to your projects, ensuring
                  focused attention and exceptional outcomes tailored to your
                  objectives.
                </p>

                <div className="arrow-readmore">
                  <a href="#"
                  ><i className="fa-regular fa-arrow-right"></i>Learn More</a
                  >
                </div>
              </div>
            </div>
            <div className="about-feature-item">
              <div className="about-feature-item-inner">
                <img src="/assets/images/feature-icon-3.svg" alt="feature-icon-1" />

                <h3>Focusing on Business</h3>

                <p>
                  We prioritize your business goals, delivering strategic
                  solutions that drive growth, improve your efficiency, and enhance
                  your market position.
                </p>

                <div className="arrow-readmore">
                  <a href="#"
                  ><i className="fa-regular fa-arrow-right"></i>Learn More</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <About_section />
      <BusinessStats_section />
      <Team_section />
      <HireSection />
      <PartnersSection />
    </>
  );
}

export default PageAboutUs;

