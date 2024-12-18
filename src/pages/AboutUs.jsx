import React from 'react'
import "./AboutUs.css"

const aboutUs = () => {
  return (
    <>
      <div className="about-feature-section">
        <div className="container">
          <div className="about-feature-section-inner">
            <div className="about-feature-item">
              <div className="about-feature-item-inner">
                <img src="assets/images/feature-icon-1.svg" alt="feature-icon-1" />

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
                <img src="assets/images/feature-icon-2.svg" alt="feature-icon-1" />

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
                <img src="assets/images/feature-icon-3.svg" alt="feature-icon-1" />

                <h3>Focusing on Business</h3>

                <p>
                  We prioritize your business goals, delivering strategic
                  solutions that drive growth, improve efficiency, and enhance
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

      {/* <div className="about-section">
        <div className="container">
          <div className="about-section-inner">
            <div className="about about-left">
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
                  <div className="skill-progress90"></div>
                </div>
              </div>

              <div className="progress">
                <div className="skill-percantage">
                  <p>Cloud Solutions</p>
                  <span>75%</span>
                </div>
                <div className="progress-bar">
                  <div className="skill-progress75"></div>
                </div>
              </div>

              <div className="progress">
                <div className="skill-percantage">
                  <p>Managed IT Service</p>
                  <span>85%</span>
                </div>
                <div className="progress-bar">
                  <div className="skill-progress85"></div>
                </div>
              </div>
              <a className="common-button" id="learn-more" href="#">Learn More</a>
            </div>
            <div className="about about-right">
              <img src="assets/images/about.jpg" alt="analytics" />
              <div className="year-design">
                <div className="year-design-inner">
                  <p className="year-count">23</p>
                  <p className="center-text-title" id="iq">Year of Experiance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="number-count-area">
        <div className="number-count-area-inner">
          <div className="counter-div">
            <div className="counter-div-inner">
              <h2>23+</h2>
              <h3>Years Helping Business</h3>
            </div>
          </div>
          <div className="counter-div">
            <div className="counter-div-inner">
              <h2>250+</h2>
              <h3>Working Employees</h3>
            </div>
          </div>
          <div className="counter-div">
            <div className="counter-div-inner">
              <h2>4500+</h2>
              <h3>Complete Projects</h3>
            </div>
          </div>
          <div className="counter-div">
            <div className="counter-div-inner">
              <h2>3000+</h2>
              <h3>Happy Customers</h3>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="team-section">
        <div className="container">
          <div className="team-inner">
            <div className="team-upper">
              <p className="testi center-text-title">TEAM MEMBERS</p>

              <h2 className="testi1 center-text-heading">Expert Team</h2>
            </div>
            <div className="team-lower">
              <div className="team-lower-inner">
                <div className="team-member">
                  <div className="team-member-inner">
                    <div className="team-img">
                      <img src="assets/images/team-2.jpg" alt="person-1" />
                      <div className="team-social-icon-list">
                        <a
                          className="team-social-div"
                          href="https://www.facebook.com/techvio.in"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>

                        <a
                          className="team-social-div"
                          href="https://x.com/?lang=en"
                          target="_blank"
                        >
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>

                        <a
                          className="team-social-div"
                          href="https://in.linkedin.com/"
                          target="_blank"
                        >
                          <i className="fa-brands fa-linkedin"></i
                          ></a>
                      </div>
                    </div>
                    <div className="team-info">
                      <span className="team-name">Joseph Holt</span>
                      <span className="team-post">Founder, CEO</span>
                    </div>
                  </div>
                </div>
                <div className="team-member">
                  <div className="team-member-inner">
                    <div className="team-img">
                      <img src="assets/images/team-6.jpg" alt="person-1" />
                      <div className="team-social-icon-list">
                        <a
                          className="team-social-div"
                          href="https://www.facebook.com/techvio.in"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>

                        <a
                          className="team-social-div"
                          href="https://x.com/?lang=en"
                          target="_blank"
                        >
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>

                        <a
                          className="team-social-div"
                          href="https://in.linkedin.com/"
                          target="_blank"
                        >
                          <i className="fa-brands fa-linkedin"></i
                          ></a>
                      </div>
                    </div>
                    <div className="team-info">
                      <span className="team-name"> Kevin Haley </span>
                      <span className="team-post">Co-Founder, CTO</span>
                    </div>
                  </div>
                </div>
                <div className="team-member">
                  <div className="team-member-inner">
                    <div className="team-img">
                      <img src="assets/images/team-7.jpg" alt="person-1" />
                      <div className="team-social-icon-list">
                        <a
                          className="team-social-div"
                          href="https://www.facebook.com/techvio.in"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>

                        <a
                          className="team-social-div"
                          href="https://x.com/?lang=en"
                          target="_blank"
                        >
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>

                        <a
                          className="team-social-div"
                          href="https://in.linkedin.com/"
                          target="_blank"
                        >
                          <i className="fa-brands fa-linkedin"></i
                          ></a>
                      </div>
                    </div>
                    <div className="team-info">
                      <span className="team-name"> Alishia Fulton </span>
                      <span className="team-post">Chief Creative Officer</span>
                    </div>
                  </div>
                </div>
                <div className="team-member">
                  <div className="team-member-inner">
                    <div className="team-img">
                      <img src="assets/images/team-8.jpg" alt="person-1" />
                      <div className="team-social-icon-list">
                        <a
                          className="team-social-div"
                          href="https://www.facebook.com/techvio.in"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>

                        <a
                          className="team-social-div"
                          href="https://x.com/?lang=en"
                          target="_blank"
                        >
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>

                        <a
                          className="team-social-div"
                          href="https://in.linkedin.com/"
                          target="_blank"
                        >
                          <i className="fa-brands fa-linkedin"></i
                          ></a>
                      </div>
                    </div>
                    <div className="team-info">
                      <span className="team-name"> Lucas Martinez </span>
                      <span className="team-post"> Creative Director</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="hire-section">
        <div className="hire-section-inner">
          <p className="hireP center-text-title">Want to work with us?</p>
          <h2 className="hireH center-text-heading">
            Digitally Transform & Grow Your Business
          </h2>
          <p className="hire-text">
            Transform your business with our digital expertise. Grow through
            strategic insights, innovative solutions, and cutting-edge technology.
            Partner with us for accelerated digital transformation and sustainable
            growth.
          </p>

          <div className="hire-section-buttons">
            <a className="CC common-button" id="call-now" href="#">Call Now</a>
            <a className="CC common-button" id="Contact-Us" href="#">Contact Us</a>
          </div>
        </div>
      </div> */}

      {/* <div className="partners-section">
        <div className="container">
          <div className="partners-section-inner">
            <div className="partners-upper">
              <p className="partnersParagraph center-text-title">
                Trusted By Over 1500
              </p>
              <h2
                className="partnersHeader center-text-heading"
                id="partners-heading"
              >
                Our Customers
              </h2>
            </div>
            <div className="partners-down">
              <div className="partners-down-inner">
                <div className="partner-item">
                  <a href="#"><img src="assets/images/client-1.png" /></a>
                </div>
                <div className="partner-item">
                  <a href="#"><img src="assets/images/client-2.png" /></a>
                </div>
                <div className="partner-item">
                  <a href="#"><img src="assets/images/client-3.png" /></a>
                </div>
                <div className="partner-item">
                  <a href="#"><img src="assets/images/client-4.png" /></a>
                </div>
                <div className="partner-item">
                  <a href="#"><img src="assets/images/client-5.png" /></a>
                </div>
                <div className="partner-item">
                  <a href="#"><img src="assets/images/client-6.png" /></a>
                </div>
                <div className="partner-item">
                  <a href="#"><img src="assets/images/client-7.png" /></a>
                </div>
                <div className="partner-item">
                  <a href="#"><img src="assets/images/client-8.png" /></a>
                </div>
                <div className="partner-item">
                  <a href="#"><img src="assets/images/client-9.jpg" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="working-proccess-section">
        <div className="container">
          <div className="working-proccess-section-inner">
            <div className="working-proccess-section-upper">
              <p className="testi center-text-title">4 Step Work Process</p>

              <h2 className="testi1 center-text-heading">Working Process</h2>
            </div>

            <div className="working-process-section-down">
              <div className="working-process-section-down-inner">
                <div className="process-item">
                  <div className="process-item-inner">
                    <div className="process-icon">
                      <img
                        src="assets/images/workprocess-icon-1.svg"
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
                        src="assets/images/workprocess-icon-2.svg"
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
                        src="assets/images/workprocess-icon-3.svg"
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
                        src="assets/images/workprocess-icon-4.svg"
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
      </div> */}
    </>
  )
}

export default aboutUs;

