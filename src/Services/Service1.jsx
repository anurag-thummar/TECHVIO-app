import React from 'react'
import "./Service1.css"

const service1 = () => {
  return (
    <>
      <div className="service-bottom">
        <div className="container">
          <div className="service-bottom-inner">
            <div className="service-item">
              <div className="service-item-inner">
                <div className="service-icon">
                  <img src="/assets/images/s6.png" />
                </div>
                <h3>Web Development</h3>
                <p>
                  Building custom, high-performance websites that engage users and
                  drive business growth.
                </p>
                <div className="arrow-readmore">
                  <a href="#"><i className="fa-regular fa-arrow-right"></i>Read More</a>
                </div>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-inner">
                <div className="service-icon">
                  <img src="/assets/images/s5.png" />
                </div>
                <h3>Digital Marketing</h3>
                <p>
                  Boost your online presence with our innovative and effective
                  digital marketing strategies.
                </p>

                <div className="arrow-readmore">
                  <a href="#"><i className="fa-regular fa-arrow-right"></i>Read More</a>
                </div>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-inner">
                <div className="service-icon">
                  <img src="/assets/images/s4.png" />
                </div>
                <h3>Startup Solutions</h3>
                <p>
                  Innovative solutions and dedicated support to help startups grow
                  and thrive in competitive markets.
                </p>

                <div className="arrow-readmore">
                  <a href="#"><i className="fa-regular fa-arrow-right"></i>Read More</a>
                </div>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-inner">
                <div className="service-icon">
                  <img src="/assets/images/s3.png" />
                </div>
                <h3>Networking Services</h3>
                <p>
                  Reliable networking solutions to ensure seamless connectivity and
                  communication.
                </p>

                <div className="arrow-readmore">
                  <a href="#"><i className="fa-regular fa-arrow-right"></i>Read More</a>
                </div>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-inner">
                <div className="service-icon">
                  <img src="/assets/images/s2.png" />
                </div>
                <h3>SEO Optimization</h3>
                <p>
                  Improve your website's visibility and ranking on search engines
                  with our SEO services.
                </p>

                <div className="arrow-readmore">
                  <a href="#"><i className="fa-regular fa-arrow-right"></i>Read More</a>
                </div>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-inner">
                <div className="service-icon">
                  <img src="/assets/images/s1.png" />
                </div>
                <h3>Apps Development</h3>
                <p>
                  Our company designing and developing user-friendly mobile applications for
                  various platforms.
                </p>

                <div className="arrow-readmore">
                  <a href="#"><i className="fa-regular fa-arrow-right"></i>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hire-section">
        <div className="hire-section-inner">
          <p className="hireP">Want to work with us?</p>
          <h2 className="hireH">
            Digitally Transform & Grow Your Business
          </h2>
          <p className="hire-text">
            Transform your business with our digital expertise. Grow through
            strategic insights, innovative solutions, and cutting-edge technology.
            Partner with us for accelerated digital transformation and sustainable
            growth.
          </p>

          <div className="hire-section-buttons">
            <a id="call-now" href="#">Call Now</a>
            <a id="contact-us" href="#">Contact Us</a>
          </div>
        </div>
      </div>

      {/* start-overview-section  */}
      <div className="service1-overview-section">
        <div className="container">
          <div className="service1-overview-inner">
            <div className="service1-overview service1-overview-left">
              <img src="/assets/images/choose-1.png" alt="choose1" />
            </div>

            <div className="service1-overview service1-overview-right">
              <p className="service1-center-text-title">Why Choose Us?</p>
              <h2 className="service1-center-text-heading">
                Safeguard Your Brand with Cyber<br />
                Security and IT Solutions
              </h2>

              <p className="service1-content1">
                Our comprehensive services ensure that your business is shielded
                from cyber threats and IT challenges, allowing you to focus on
                growth and success.
              </p>

              <div className="service1-feature-list">
                <div className="service1-feature-list-inner">
                  <div className="service1-feature-list-item">Remote IT Assistance</div>
                  <div className="service1-feature-list-item">Cloud Services</div>
                  <div className="service1-feature-list-item">Managed IT Service</div>
                  <div className="service1-feature-list-item">IT Security Services</div>
                  <div className="service1-feature-list-item">Practice IT Management</div>
                  <div className="service1-feature-list-item">Solving IT Problems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="service2-overview-section" id="overview-section-2">
        <div className="container">
          <div className="service2-overview-inner">
            <div className="service2-overview service2-overview-right">
              <p className="service2-center-text-title1" id="content-title">Why Trust Us?</p>
              <h2 className="service2-center-text-heading1" id="content-heading">
                Achieve Digital Transformation For <br />Your Retail Business
                Services
              </h2>

              <p className="service2-content1">
                Our tailored solutions help you streamline operations, enhance
                customer experiences, and boost sales through innovative
                technology and strategic insights.
              </p>

              <div className="service2-feature-list">
                <div className="service2-feature-list-inner">
                  <div className="service2-feature-list-item">Protect your Business</div>
                  <div className="service2-feature-list-item">Network Security</div>
                  <div className="service2-feature-list-item">Data Security</div>
                  <div className="service2-feature-list-item">Small Business Owners</div>
                  <div className="service2-feature-list-item">Running your Business</div>
                  <div className="service2-feature-list-item">Network Monitoring</div>
                </div>
              </div>
            </div>
            <div className="service2-overview service2-overview-left">
              <img src="/assets/images/choose-2.png" alt="choose1" />
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default service1;


