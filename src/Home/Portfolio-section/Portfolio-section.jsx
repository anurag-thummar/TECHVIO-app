import React from "react";
import "./Portfolio-section.css";
import "./Portfolio"

const Portfolio_section = () => {
  return (
    <>
      <div className="portfolio">
        <div className="container">
          <div className="portfolio-inner">
            <div className="portfolio-upper">
              <p className="portfolio1 center-text-title">RECENT WORK</p>
              <h2
                className="portfolio1 center-text-heading"
                id="portfolio-heading"
              >
                Our Portfolio
              </h2>
            </div>
            <div className="portfolio-middle">
              <div className="portfolio-middle-inner">
                <div className="portfolio-list">
                  <ul className="nav" id="portfolio-flters">
                    <li className="filter filter-active" data-filter=".all">
                      all
                    </li>
                    <li className="filter" data-filter=".teaching">
                      Educational
                    </li>
                    <li className="filter" data-filter=".ecommerce">
                      Ecommerce
                    </li>
                    <li className="filter" data-filter=".food">
                      Food
                    </li>
                    {/* <li className="filter" data-filter=".seo-marketing">Marketability</li>  */}
                    <li className="filter" data-filter=".other">
                      Other
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="portfolio-down">
              <div className="portfolio-down-inner">
                <div className="portfolio-item all itsolution">
                  <div className="portfolio-img" data-height="2086">
                    <div className="browser-bar">
                      <div className="bar-dots">
                        <span
                          className="dot"
                          style={{ background: "#ed594a" }}
                        ></span>
                        <span
                          className="dot"
                          style={{ background: "#fdd800" }}
                        ></span>
                        <span
                          className="dot"
                          style={{ background: "#5ac05a" }}
                        ></span>
                      </div>
                      <div className="bar-url">https://techvio.com/</div>
                    </div>
                    {/* <div className="listing-badge">New</div> */}
                    <img 
                      src="assets/images/screencapture-demo-templatemonster-TECHVIO-187467-html-2024-08-06-00_28_49.png"
                      alt=""
                    />

                    <div className="img-overlay">
                      <div className="img-overlay-inner">
                        <div className="fox">
                          <p>Techvio | IT Solution Service</p>
                          <h3>
                            <a
                              href="https://preview.treethemes.com/hazel/demo2/"
                              target="_blank"
                            >
                              Creative Web Design
                            </a>
                          </h3>
                        </div>
                      </div>
                      <div className="wox">
                        <a
                          className="portfolio-link-icon"
                          href="https://preview.treethemes.com/hazel/demo2/"
                          target="_blank"
                        >
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item all teaching">
                  <div className="portfolio-img" data-height="1292">
                    <div className="browser-bar">
                      <div className="bar-dots">
                        <span
                          className="dot"
                          style={{ background: "#ed594a" }}
                        ></span>
                        <span
                          className="dot"
                          style={{ background: "#fdd800" }}
                        ></span>
                        <span
                          className="dot"
                          style={{ background: "#5ac05a" }}
                        ></span>
                      </div>
                      <div className="bar-url">https://masterstudy.com/</div>
                    </div>
                    <div className="listing-badge">New</div>
                    <img
                      src="assets/images/screencapture-masterstudy-stylemixthemes-udemy-affiliate-2024-08-06-15_44_33.png"
                      alt="ella"
                    />
                    <div className="img-overlay">
                      <div className="img-overlay-inner">
                        <div className="fox">
                          <p>Masterstudy | Teaching</p>
                          <h3>
                            <a
                              href="https://masterstudy.stylemixthemes.com/udemy-affiliate/"
                              target="_blank"
                            >
                              Creative Web Design
                            </a>
                          </h3>
                        </div>
                      </div>
                      <div className="wox">
                        <a
                          className="portfolio-link-icon"
                          href="https://masterstudy.stylemixthemes.com/udemy-affiliate/"
                          target="_blank"
                        >
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="portfolio-item all other">
                  <div className="portfolio-img" data-height="3029">
                    <div className="browser-bar">
                      <div className="bar-dots">
                        <span
                          className="dot"
                          style={{ background: "#ed594a" }}
                        ></span>
                        <span
                          className="dot"
                          style={{ background: "#fdd800" }}
                        ></span>
                        <span
                          className="dot"
                          style={{ background: "#5ac05a" }}
                        ></span>
                      </div>
                      <div className="bar-url">https://goodheart.com/</div>
                    </div>
                    {/* <div className="listing-badge">New</div>  */}
                    <img
                      src="assets/images/screencapture-goodheart-sva-la-studioweb-02-goodheart-wildlife-2024-08-06-14_19_01.png"
                      alt=""
                    />
                    <div className="img-overlay">
                      <div className="img-overlay-inner">
                        <div className="fox">
                          <p>Goodheart | Awarness</p>
                          <h3>
                            <a
                              href="https://demo2.wpopal.com/ekommart/home-1/"
                              target="_blank"
                            >
                              Creative Web Design
                            </a>
                          </h3>
                        </div>
                      </div>
                      <div className="wox">
                        <a
                          className="portfolio-link-icon"
                          href="https://demo2.wpopal.com/ekommart/home-1/"
                          target="_blank"
                        >
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item all other">
                  <div className="portfolio-img" data-height="1760">
                    <div className="browser-bar">
                      <div className="bar-dots">
                        <span
                          className="dot"
                          style={{ background: "#ed594a" }}
                        ></span>
                        <span
                          className="dot"
                          style={{ background: "#fdd800" }}
                        ></span>
                        <span
                          className="dot"
                          style={{ background: "#5ac05a" }}
                        ></span>
                      </div>
                      <div className="bar-url">https://proseo.com/</div>
                    </div>
                    <div className="listing-badge">New</div>
                    <img
                      src="assets/images/screencapture-profecient-jegtheme-proseo-2024-08-06-14_32_22.png"
                      alt=""
                    />
                    <div className="img-overlay">
                      <div className="img-overlay-inner">
                        <div className="fox">
                          <p>Proseo | SEO & Marketing</p>
                          <h3>
                            <a
                              href="https://profecient.jegtheme.com/proseo/"
                              target="_blank"
                            >
                              Creative Web Design
                            </a>
                          </h3>
                        </div>
                      </div>
                      <div className="wox">
                        <a
                          className="portfolio-link-icon"
                          href="https://profecient.jegtheme.com/proseo/"
                          target="_blank"
                        >
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="portfolio-item all food">
                  <div className="portfolio-img" data-height="885">
                    <div className="browser-bar">
                      <div className="bar-dots">
                        <span
                          className="dot"
                          style={{ background: "#ed594a" }}
                        ></span>
                        <span
                          className="dot"
                          style={{ background: "#fdd800" }}
                        ></span>
                        <span
                          className="dot"
                          style={{ background: "#5ac05a" }}
                        ></span>
                      </div>
                      <div className="bar-url">https://pizzon.com/</div>
                    </div>
                    {/* <div className="listing-badge">New</div> */}
                    <img
                      src="assets/images/screencapture-pizzon-myshopify-2024-08-06-15_23_48.png"
                      alt=""
                    />
                    <div className="img-overlay">
                      <div className="img-overlay-inner">
                        <div className="fox">
                          <p>Pizzon | Food</p>
                          <h3>
                            <a
                              href="https://pizzon.myshopify.com/?fts=0%3F"
                              target="_blank"
                            >
                              Creative Web Design
                            </a>
                          </h3>
                        </div>
                      </div>
                      <div className="wox">
                        <a
                          className="portfolio-link-icon"
                          href="https://pizzon.myshopify.com/?fts=0%3F"
                          target="_blank"
                        >
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="portfolio-item all ecommerce">
                  <div className="portfolio-img" data-height="1326">
                    <div className="browser-bar">
                      <div className="bar-dots">
                        <span
                          className="dot"
                          style={{ background: "#ed594a" }}
                        ></span>
                        <span
                          className="dot"
                          style={{ background: "#fdd800" }}
                        ></span>
                        <span
                          className="dot"
                          style={{ background: "#5ac05a" }}
                        ></span>
                      </div>
                      <div className="bar-url">https://ecomall.com/</div>
                    </div>
                    {/* <div className="listing-badge">New</div>  */}
                    <img
                      src="assets/images/screencapture-demo-theme-sky-ecomall-home-5-2024-08-06-15_05_20.png"
                      alt=""
                    />
                    <div className="img-overlay">
                      <div className="img-overlay-inner">
                        <div className="fox">
                          <p>Ecomall | Ecommerce</p>
                          <h3>
                            <a
                              href="https://demo.theme-sky.com/ecomall/home-5/?color=dark-2"
                              target="_blank"
                            >
                              Creative Web Design
                            </a>
                          </h3>
                        </div>
                      </div>
                      <div className="wox">
                        <a
                          className="portfolio-link-icon"
                          href="https://demo.theme-sky.com/ecomall/home-5/?color=dark-2"
                          target="_blank"
                        >
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <script src="assets/images1/Js/portfolio-filter.js"></script> */}
    </>
  );
};

export default Portfolio_section;
