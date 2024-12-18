import React from "react";
// import { Route } from "react-router-dom";
import { Outlet, Link, Routes } from "react-router-dom";
import "./Header.css";


const Header = () => {
  return (
    <>
      <div className="header-home-page__header">
        <div className="header-main-header">
          <div className="container">
            <div className="header-inner">
              <div className="header-logo-and-title">
                <a
                  href="https://demo.templatemonster.com/demo/187467.html?_gl=1*78ogw4*_gcl_au*OTQzNzM2NjAxLjE3MTk5OTgxODU.*_ga*MTc5Mzc4NjU5MC4xNzE5OTk4MTgy*_ga_FTPYEGT5LY*MTcxOTk5ODE4MS4xLjEuMTcxOTk5ODI4MC4zNi4wLjA."
                  target="_blank"
                  rel="noreferrer"
                >
                  <img id="logo" src="assets/images/logo.png" alt="TECHVIO" />
                </a>
              </div>

              <div className="header-menu">
                <ul className="header-menu-inner">
                  <li>
                    <Link to="/">
                      Home <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="header-sub-menu">
                      <li>
                        <Link to="/home1">Home 1</Link>
                      </li>
                      <li>
                        <Link to="/home2">Home 2</Link>
                      </li>
                      <li>
                        <Link to="/home3">Home 3</Link>
                      </li>
                      <li>
                        <Link to="/home4">Home 4</Link>
                      </li>
                      <li>
                        <Link to="/home5">Home 5</Link>
                      </li>
                      <li>
                        <Link to="/home6">Home 6</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/Aboutus">About Us</Link>
                  </li>
                  <li>
                    <Link>
                      Services <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="header-sub-menu">
                      <li>
                        <Link to="/Services/Service1">Service 1</Link>
                      </li>
                      <li>
                        <Link to="/Services/service2">Service 2</Link>
                      </li>
                      <li>
                        <Link to="/Services/service3">Service 3</Link>
                      </li>
                      <li>
                        <Link to="/Services/serviceDetails">Service Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link>
                      Portfolio <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="header-sub-menu">
                      <li>
                        <Link to="/Portfolio/Portfolio-sections/Portfolio-section">
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link to="/Portfolio/Portfolio-sections/Portfolio-details">
                          Portfolio Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link>
                      Pages <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="header-sub-menu">
                      <li>
                        <Link to="/pages/Team">Team</Link>
                      </li>
                      <li>
                        <Link to="/pages/Pricing">Pricing</Link>
                      </li>
                      <li>
                        <Link to="/404-error">404 Error</Link>
                      </li>
                      <li>
                        <Link to="/pages/Faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/pages/CommingSoon">Coming Soon</Link>
                      </li>
                      <li>
                        <Link to="/pages/TermAndConditions">Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link to="/pages/Privacy&Policy">Privacy & Policy</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                    >
                      Blog <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="header-sub-menu">
                      <li>
                        <Link to="/Blog/BlogGrid">Blog Grid</Link>
                      </li>
                      <li>
                        <Link to="/Blog/BlogRightSidebar">Blog Right Sidebar</Link>
                      </li>
                      <li>
                        <Link to="/Blog/blogDetails">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="Contact">Contact</Link>
                  </li>
                </ul>
              </div>

              <button id="support-btn" className="header-btn-particle">
                <p>Change Theme</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Header and Hero-section --End */}

      {/* Header and Hero-section --Start */}

      {/* <div className="home-page__header1">
        <div className="main-header1">
          <div className="container2">
            <div className="hero-section1" id="hero-section1">
              <div className="container2">
                <div className="hero-section-inner1">
                  <div className="portion hero-section-left1">
                    <div className="hero-left-inner1">
                      <h6 className="text-gradient1">QUALITY IT SERVICE</h6>
                      <h1>
                        Your Successful
                        <br />
                        Business, Our Fantastic
                        <br />
                        <span className="text-gradient1">IT Support.</span>
                      </h1>
                      <br />
                      <p>
                        IT Solutions & Business Services Company specializing in
                        cutting-edge tec-
                        <br />
                        hnology solutions, business strategies, and
                        client-focused services.
                      </p>
                      <div className="button-partition">
                        <div className="inner-partition1">
                          <div className="banner-btn1">
                            <a className="call-now" href="#">
                              Our Service
                            </a>
                            <div className="video-box1">
                              <a
                                href="https://www.youtube.com/watch?v=G9TdA8d5aaU"
                                className="popup-video video-btn1"
                              >
                                <i className="fa fa-play"></i>
                              </a>
                              <div className="circle-ripple1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="portion hero-section-right1">
                    <div className="hero-right-inner1">
                      <div className="right-banner-img1">
                        <img
                          className="hero-banner-img1"
                          src="assets/images/home-font-2.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="home-shape-animation">
                    <div className="shape-1">
                      <img src="assets/images/1.png" alt="shape image" />
                    </div>
                    <div className="shape-2">
                      <img src="assets/images/2.png" alt="shape image" />
                    </div>
                    <div className="shape-3">
                      <img src="assets/images/3.png" alt="shape image" />
                    </div>
                    <div className="shape-4">
                      <img src="assets/images/4.png" alt="shape image" />
                    </div>
                    <div className="shape-5">
                      <img src="assets/images/5.png" alt="shape image" />
                    </div>
                    <div className="shape-6">
                      <img src="assets/images/6.png" alt="shape image" />
                    </div>
                    <div className="shape-7">
                      <img src="assets/images/7.png" alt="shape image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </>
  );
};

export default Header;
