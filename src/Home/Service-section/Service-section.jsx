import React from "react";
import "./Service-section.css"


const service_section = () => {
  return (
    <>
      <div className="home-service-section">
        <div className="container">
          <div className="home-service-section-inner">
            <div className="home-service-upper">
              <p className="home-service-Title">what we provide</p>
              <h2 className="home-service-Heading">Our Services</h2>
            </div>

            <div className="home-service-middle">
              <div className="container">
                <div className="home-service-middle-inner">
                  <div className="home-service-middle-item">
                    <div className="home-service-middle-item-inner">
                      <div className="default-img">                     
                        <img
                          className="home-service-middle-item-img"
                          src="/assets/images/services-icon-1.svg"
                        />
                      </div>

                      <div className="set-img">
                        <img
                          className="home-service-middle-item-img"
                          src="/assets/images/services-icon-hover-1.svg"
                        />
                      </div>

                      <h3>IT Consulting</h3>
                      <p>
                        Reliable IT management and support to enhance
                        performance and security across your organization.
                      </p>

                      <div className="list">
                        <ul>
                          <li>Technology Assessment</li>
                          <li>IT Strategy Development</li>
                          <li>System Integration</li>
                          <li>Project Management</li>
                          <li>Business Continuity Planning</li>
                        </ul>
                      </div>

                      <div className="arrow-readmore">
                        <a href="#">
                          <i className="fa-regular fa-arrow-right"></i>Learn More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="home-service-middle-item">
                    <div className="home-service-middle-item-inner">
                      <div className="default-img">
                        <img
                          className="home-service-middle-item-img"
                          src="/assets/images/services-icon-2.svg"
                        />
                      </div>

                      <div className="set-img">
                        <img
                          className="home-service-middle-item-img"
                          src="/assets/images/services-icon-hover-2.svg"
                        />
                      </div>

                      <h3>Cloud Hosting</h3>
                      <p>
                        Our reliable, scalable cloud hosting solutions are tailored to
                        meet your business needs and demands.
                      </p>

                      <div className="list">
                        <ul>
                          <li>Amazon Web Services (AWS)</li>
                          <li>Microsoft Azure</li>
                          <li>Google Cloud Platform</li>
                          <li>IBM Cloud</li>
                          <li>DigitalOcean</li>
                        </ul>
                      </div>

                      <div className="arrow-readmore">
                        <a href="#">
                          <i className="fa-regular fa-arrow-right"></i>Learn More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="home-service-middle-item">
                    <div className="home-service-middle-item-inner">
                      <div className="default-img">
                        <img
                          className="home-service-middle-item-img"
                          src="/assets/images/services-icon-3.svg"
                        />
                      </div>

                      <div className="set-img">
                        <img
                          className="home-service-middle-item-img"
                          src="/assets/images/services-icon-hover-3.svg"
                        />
                      </div>

                      <h3>Managed It home-services</h3>

                      <p>
                        Comprehensive management and support for your IT
                        infrastructure, ensuring efficiency and security.
                      </p>

                      <div className="list">
                        <ul>
                          <li>Network Management</li>
                          <li>Server and Storage Management</li>
                          <li>IT Security home-services</li>
                          <li>24/7 Monitoring and Support</li>
                          <li>Proactive Maintenance</li>
                        </ul>
                      </div>

                      <div className="arrow-readmore">
                        <a href="#">
                          <i className="fa-regular fa-arrow-right"></i>Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-service-bottom">
              <div className="home-service-bottom-inner">
                <div className="home-service-item">
                  <div className="home-service-item-inner">
                    <div className="home-services-icon">
                      <img src="/assets/images/s6.png" />
                    </div>
                    <h3>Web Development</h3>
                    <p>
                      Building custom, high-performance websites that engage
                      users and drive business growth.
                    </p>
                    <div className="arrow-readmore">
                      <a href="#">
                        <i className="fa-regular fa-arrow-right"></i>Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="home-service-item">
                  <div className="home-service-item-inner">
                    <div className="home-services-icon">
                      <img src="/assets/images/s5.png" />
                    </div>
                    <h3>Digital Marketing</h3>
                    <p>
                      Boost your online presence with our innovative and
                      effective digital marketing strategies.
                    </p>

                    <div className="arrow-readmore">
                      <a href="#">
                        <i className="fa-regular fa-arrow-right"></i>Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="home-service-item">
                  <div className="home-service-item-inner">
                    <div className="home-services-icon">
                      <img src="/assets/images/s4.png" />
                    </div>
                    <h3>Startup Solutions</h3>
                    <p>
                      Innovative solutions and dedicated support to help
                      startups grow and thrive in competitive markets.
                    </p>

                    <div className="arrow-readmore">
                      <a href="#">
                        <i className="fa-regular fa-arrow-right"></i>Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="home-service-item">
                  <div className="home-service-item-inner">
                    <div className="home-services-icon">
                      <img src="/assets/images/s3.png" />
                    </div>
                    <h3>Networking home-services</h3>
                    <p>
                      Reliable networking solutions to ensure seamless strong
                      connectivity and communication.
                    </p>

                    <div className="arrow-readmore">
                      <a href="#">
                        <i className="fa-regular fa-arrow-right"></i>Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="home-service-item">
                  <div className="home-service-item-inner">
                    <div className="home-services-icon">
                      <img src="/assets/images/s2.png" />
                    </div>
                    <h3>SEO Optimization</h3>
                    <p>
                      Improve your website's visibility and good ranking on
                      search engines with our SEO home-services.
                    </p>

                    <div className="arrow-readmore">
                      <a href="#">
                        <i className="fa-regular fa-arrow-right"></i>Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="home-service-item">
                  <div className="home-service-item-inner">
                    <div className="home-services-icon">
                      <img src="/assets/images/s1.png" />
                    </div>
                    <h3>Apps Development</h3>
                    <p>
                      Designing and well developing more user-friendly mobile
                      applications for various platforms.
                    </p>

                    <div className="arrow-readmore">
                      <a href="#">
                        <i className="fa-regular fa-arrow-right"></i>Read More
                      </a>
                    </div>
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

export default service_section;
