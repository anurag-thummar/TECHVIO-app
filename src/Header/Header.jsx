import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../Mediaquery/HomeMediaQuery.css";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // for the hamburger menu
  const [activeIndex, setActiveIndex] = useState(null); // for tracking which submenu is expanded

  // Function to toggle the main menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to toggle the submenu (accordion)
  const toggleSubmenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the submenu
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo Section */}
            <div className="logo-section">
              <a
                href="https://demo.templatemonster.com/demo/187467.html?_gl=1*78ogw4*_gcl_au*OTQzNzM2NjAxLjE3MTk5OTgxODU.*_ga*MTc5Mzc4NjU5MC4xNzE5OTk4MTgy*_ga_FTPYEGT5LY*MTcxOTk5ODE4MS4xLjEuMTcxOTk5ODI4MC4zNi4wLjA."
                target="_blank"
                rel="noreferrer"
              >
                <img id="logo" src="/assets/images/logo.png" alt="TECHVIO" />
              </a>
            </div>

            {/* Hamburger Menu Icon */}
            <div
              className={`menu-box ${menuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <i className={`fa-solid fa-${menuOpen ? "xmark" : "bars"}`}></i>
            </div>

            {/* Menu Section */}
            <div className={`menu ${menuOpen ? "menu-open" : ""}`}>
              <ul className="menu-list">
                <li>
                  <div
                    className="menu-item"
                    onClick={() => toggleSubmenu(0)}
                  >
                    <Link to=""><span> Home </span>
                      <i className={`fas fa-${activeIndex === 0 ? "times" : "plus"}`}></i><i class="fa-solid fa-chevron-down"></i></Link>
                  </div>
                  <ul className={`submenu ${activeIndex === 0 ? "open" : ""}`}>
                    <li><Link to="/home1">Home 1</Link></li>
                    <li><Link to="/home2">Home 2</Link></li>
                    <li><Link to="/home3">Home 3</Link></li>
                    <li><Link to="/home4">Home 4</Link></li>
                    <li><Link to="/home5">Home 5</Link></li>
                    <li><Link to="/home6">Home 6</Link></li>
                  </ul>
                </li>

                <li><Link to="/Aboutus">About Us</Link></li>

                <li>
                  <div
                    className="menu-item"
                    onClick={() => toggleSubmenu(1)} // Toggle submenu for Services
                  >
                    <Link to=""><span> Services </span>
                      <i className={`fas fa-${activeIndex === 0 ? "times" : "plus"}`}></i><i class="fa-solid fa-chevron-down"></i></Link>
                  </div>
                  <ul className={`submenu ${activeIndex === 1 ? "open" : ""}`}>
                    <li><Link to="/services/service1">Service 1</Link></li>
                    <li><Link to="/services/service2">Service 2</Link></li>
                    <li><Link to="/services/service3">Service 3</Link></li>
                    <li><Link to="/Services/ServiceDetails">Service Details</Link></li>
                  </ul>
                </li>

                <li>
                  <div
                    className="menu-item"
                    onClick={() => toggleSubmenu(2)} // Toggle submenu for Portfolio
                  >
                    <Link to=""><span> Portfolio </span>
                      <i className={`fas fa-${activeIndex === 0 ? "times" : "plus"}`}></i><i class="fa-solid fa-chevron-down"></i></Link>
                  </div>
                  <ul className={`submenu ${activeIndex === 2 ? "open" : ""}`}>
                    <li><Link to="/Portfolio/Portfolio-sections/Portfolio-section">Portfolio</Link></li>
                    <li><Link to="/Portfolio/Portfolio-sections/Portfolio-details">Portfolio Details</Link></li>
                  </ul>
                </li>

                <li>
                  <div
                    className="menu-item"
                    onClick={() => toggleSubmenu(3)} // Toggle submenu for Pages
                  >
                    <Link to=""><span> Pages </span>
                      <i className={`fas fa-${activeIndex === 0 ? "times" : "plus"}`}></i> <i class="fa-solid fa-chevron-down"></i></Link>
                  </div>
                  <ul className={`submenu ${activeIndex === 3 ? "open" : ""}`}>
                    <li><Link to="/pages/about-us">About Us</Link></li>
                    <li><Link to="/pages/team">Team</Link></li>
                    <li><Link to="/pages/pricing">Pricing</Link></li>
                    <li><Link to="/404-error">404 Error</Link></li>
                    <li><Link to="/pages/faq">FAQ</Link></li>
                    <li><Link to="/pages/coming-soon">Coming Soon</Link></li>
                    <li><Link to="/pages/terms-conditions">Terms & Conditions</Link></li>
                    <li><Link to="/pages/privacy-policy">Privacy & Policy</Link></li>
                  </ul>
                </li>
                <li>
                  <div
                    className="menu-item"
                    onClick={() => toggleSubmenu(3)} // Toggle submenu for Pages
                  >
                    <Link to=""><span> Blog </span>
                      <i className={`fas fa-${activeIndex === 0 ? "times" : "plus"}`}></i> <i class="fa-solid fa-chevron-down"></i></Link>
                  </div>
                  <ul className={`submenu ${activeIndex === 3 ? "open" : ""}`}>
                    <li><Link to="/pages/team">Blog Grid</Link></li>
                    <li><Link to="/pages/about-us">Blog Right Side bar</Link></li>
                    <li><Link to="/pages/team">Blog Details</Link></li>
                  </ul>
                </li>

                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <button id="action-button" className="header-btn-particle">
              Change Theme
            </button>
          </div>
        </div>
      </div>

      {/* Outlet for routing */}
      <Outlet />
    </>
  );
};

export default Header;
