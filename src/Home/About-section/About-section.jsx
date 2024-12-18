import React, { useEffect } from 'react';
import './About-section.css';

const About_section = () => {

  useEffect(() => {
    // Define the intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When the .home-about-section is in view, trigger animations
          const skillProgress90 = document.querySelector('.skill-progress90');
          const skillProgress75 = document.querySelector('.skill-progress75');
          const skillProgress85 = document.querySelector('.skill-progress85');

          // Add animation by changing the width
          skillProgress90.style.width = '90%';
          skillProgress75.style.width = '75%';
          skillProgress85.style.width = '85%';

          // Stop observing after animation starts
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Start observing the .home-about-section
    const aboutSection = document.querySelector('.home-about-section');
    observer.observe(aboutSection);

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };

  }, []);

  return (
    <>
      <div className="home-about-section">
        <div className="container">
          <div className="home-about-section-inner">
            <div className="home-about home-about-left">
              <p className="center-text-title">About Our Company</p>
              <h2 className="center-text-heading">
                Providing Your Business With A <br />
                Quality IT Service is Our Passion
              </h2>

              <p className="content1">
                Delivering superior IT services customized to meet the specific
                needs of your business is our commitment and passion.
              </p>

              <div className="progress">
                <div className="skill-percantage">
                  <p>IT Consulting</p>
                  <span>90%</span>
                </div>
                <div className="progress-bar">
                  <div className="skill-progress skill-progress90"></div>
                </div>
              </div>

              <div className="progress">
                <div className="skill-percantage">
                  <p>Cloud Solutions</p>
                  <span>75%</span>
                </div>
                <div className="progress-bar">
                  <div className="skill-progress skill-progress75"></div>
                </div>
              </div>

              <div className="progress">
                <div className="skill-percantage">
                  <p>Managed IT Service</p>
                  <span>85%</span>
                </div>
                <div className="progress-bar">
                  <div className="skill-progress skill-progress85"></div>
                </div>
              </div>
              <div className="learns-more-btn-div">
                <a className="message-button" id="message-now">Learn More</a>
              </div>
            </div>
            <div className="home-about home-about-right">
              <img src="assets/images/about.jpg" alt="analytics" />
              <div className="year-design">
                <div className="year-design-inner">
                  <p className="year-count">23</p>
                  <p className="center-text-title" id="iq">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_section;
