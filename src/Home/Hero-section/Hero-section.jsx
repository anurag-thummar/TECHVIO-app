
import { React, useEffect } from "react";
import "./Hero-section.css";
// import "./hero-img-tilt-effect.js";
import "particles.js"

const Hero_section = () => {
  // useEffect(() => {
  //   window.particlesJS("particles-js", {
  //     "particles": {
  //       "number": {
  //         // "value": 200,
  //         "value": 135,
  //         "density": {
  //           "enable": true,
  //           "value_area": 789.1476416322727
  //         }
  //       },
  //       "color": {
  //         "value": "#ffffff"
  //       },
  //       "shape": {
  //         "type": "circle",
  //         "stroke": {
  //           "width": 0,
  //           "color": "#000000"
  //         },
  //         "polygon": {
  //           "nb_sides": 5
  //         },
  //         "image": {
  //           "src": "img/github.svg",
  //           "width": 100,
  //           "height": 100
  //         }
  //       },
  //       "opacity": {
  //         "value": 0.48927153781200905,
  //         "random": false,
  //         "anim": {
  //           "enable": true,
  //           "speed": 0,
  //           "opacity_min": 0,
  //           "sync": false
  //         }
  //       },
  //       "size": {
  //         "value": 4.3,
  //         "random": true,
  //         "anim": {
  //           "enable": true,
  //           "speed": 2,
  //           "size_min": 0,
  //           "sync": false
  //         }
  //       },
  //       "line_linked": {
  //         "enable": false,
  //         "distance": 150,
  //         "color": "#ffffff",
  //         "opacity": 0.4,
  //         "width": 1
  //       },
  //       "move": {
  //         "enable": true,
  //         // "speed":  1.5,
  //         "speed":  2.3,
  //         "direction": "none",
  //         "random": true,
  //         "straight": false,
  //         "out_mode": "out",
  //         "bounce": false,
  //         "attract": {
  //           "enable": false,
  //           "rotateX": 600,
  //           "rotateY": 1200
  //         }
  //       }
  //     },
  //     "interactivity": {
  //       "detect_on": "canvas",
  //       "events": {
  //         "onhover": {
  //           "enable": false,
  //           "mode": "bubble"
  //         },
  //         "onclick": {
  //           "enable": true,
  //           "mode": "push"
  //         },
  //         "resize": true
  //       },
  //       "modes": {
  //         "grab": {
  //           "distance": 400,
  //           "line_linked": {
  //             "opacity": 1
  //           }
  //         },
  //         "bubble": {
  //           "distance": 83.91608391608392,
  //         //   "size": 1,
  //           "size": 5,
  //           "duration": 3,
  //           "opacity": 1,
  //           "speed": 3
  //         },
  //         "repulse": {
  //           "distance": 200,
  //         //   "duration": 0.4
  //           "duration": 10
  //         },
  //         "push": {
  //           "particles_nb": 4
  //         },
  //         "remove": {
  //           "particles_nb": 2
  //         }
  //       }
  //     },
  //     "retina_detect": true
  //   });

  //   return () => {
  //     const particlesContainer = document.querySelector("#particles-js");
  //     if (particlesContainer) {
  //       particlesContainer.innerHTML = ""; // Clear canvas
  //     }
  //   };
  // }, []);

  return (
    <>
      <div className="main-body">
        <div id="particles-js">
          <canvas
            className="particles-js-canvas-el"
          ></canvas>
        </div>
        <div className="hero-section" id="hero-section">
          <div className="container">
            <div className="hero-section-inner">
              <div className="hero-section-left">
                <div className="hero-left-inner">
                  <div className="social-icon-list">
                    <div className="social-icon-list">
                      <a
                        href="https://www.facebook.com/techvio.in"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href="https://x.com/?lang=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                  <h1>
                    IT Solutions &<br />
                    Business Services
                    <br />
                    Company
                  </h1>
                  <br />
                  <p>
                    IT Solutions & Business Services Company specializing in
                    various cutting-edge technology solutions, efficient
                    business strategies, client-focused services.
                  </p>
                  <div className="button-partition">
                    <div className="inner-partition">
                      <div className="hero-section-buttons">
                        <a className="call-now" href="#">
                          Our Service
                        </a>
                        <a className="CC common-button" id="contact-us" href="#">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-section-right">
                <div className="hero-right-inner">
                  <img
                    className="hero-banner-img"
                    src="assets/images/home-font1.png"
                    alt="Hero Banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_section;
