import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";


const Footer = () => {
  
  return (
    <>
      <div style={{ overflow: "hidden", height: "53px" }}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "#042c4c",
            width: "136%",
            height: "53px",
            transform: "rotate(180deg)",
            position: "static",
          }}
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
        </svg>
      </div>

      <footer className="main-home-footer">
        <div className="home-footer-inner">
          <section className="home-footer-top">
            <div className="container">
              <div className="home-footer-top-inner">
                <div className="home-footer-top-inner-left">
                  <h2 className="signUp-title center-text-heading">
                    Sign Up For Our Newsletter
                  </h2>
                  <p>
                    We offer an informative monthly technology newsletter-Check
                    It Out.
                  </p>
                </div>
                <div className="home-footer-top-inner-right">
                  <form action="submit">
                    <div className="subscribe-email-div">
                      <input
                        className="email-box"
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                      />
                      <button
                        className="subscribe-email-button"
                        type="submit"
                        name="submit"
                      >
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="home-footer-middle">
            <div className="container">
              <div className="home-footer-middle-inner">
                <div className="col col1">
                  <img src="/assets/images/logo.png" alt="Logo" />

                  <p>
                    TechVio specializes in comprehensive tech solutions,
                    offering expert services in web and app development, SEO
                    optimization, and networking. We empower startups and
                    businesses with cutting-edge technology solutions.
                  </p>

                  <div className="social-icon-list">
                    <a
                      className="social-div"
                      href="https://www.facebook.com/techvio.in"
                      target="_blank"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="social-div"
                      href="https://x.com/?lang=en"
                      target="_blank"
                      aria-label="Twitter"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a
                      className="social-div"
                      href="https://www.youtube.com/"
                      target="_blank"
                      aria-label="YouTube"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a
                      className="social-div"
                      href="https://in.linkedin.com/"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>

                <div className="col col2">
                  <p>Our Services</p>
                  <a href="#">Startup Solutions</a>
                  <a href="#">Web Development</a>
                  <a href="#">Networking Services</a>
                  <a href="#">SEO Optimization</a>
                  <a href="#">Apps Development</a>
                </div>

                <div className="col col3">
                  <p>Useful Links</p>
                  <a href="#">About Us</a>
                  <a href="#">Case Study</a>
                  <a href="#">Contact Us</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms & Conditions</a>
                </div>

                <div className="col col4">
                  <p id="contact-info">Contact Info</p>
                  <div className="phone-details">
                    <div className="phone-icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </div>
                    <div className="phone-number">
                      <h3>Phone</h3>
                      <a href="tel:+080707555321">080 707 555-321</a>
                    </div>
                  </div>

                  <div className="email-details">
                    <div className="email-icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="email-info">
                      <h3>Email</h3>
                      <a href="mailto:techvio@example.com">
                        techvio@example.com
                      </a>
                    </div>
                  </div>

                  <div className="address-details">
                    <div className="address-icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="address-info">
                      <h3>Address</h3>
                      <h4>526 Melrose Street, Water Mill, 11976 New York</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="home-footer-bottom">
            <div className="container">
              <div className="home-footer-bottom-inner">
                <p>
                  <i className="fa-regular fa-copyright"></i> 2024 Techvio - All
                  Rights Reserved.
                </p>
                <p>
                  <Link to="/pages/TermAndConditions">Terms & Conditions</Link> |
                  <Link to="/pages/Privacy&Policy"> Privacy Policy</Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
