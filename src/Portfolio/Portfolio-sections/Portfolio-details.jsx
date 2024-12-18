import React from "react";
import "./Portfolio-details.css"; // Assuming you have this CSS file
const PortfolioDetails = () => {
  return (
    <>
      <div className="portfolio-details">
        <div className="container">
          <div className="portfolio-inner">
            <div className="portfolio-details-image">
              <img src="/assets/images/portfolio-details-1.jpg" alt="image" />
            </div>
            <div className="portfolios-details-desc">
              <h3>Our Mission is to Establish Healthy Work Relationships</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ea commodo consequat.
              </p>
              <div className="features-text">
                <h4>We work to Create a Better way</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
              </div>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur.
              </p>

              <div className="bottom-info-part">
                <div className="info-part-inner">
                  <div className="info-part">
                    <h4>Author</h4>
                    <span>Jessica Smith</span>
                  </div>
                  <div className="info-part">
                    <h4>Category</h4>
                    <span>Virtual, Technology</span>
                  </div>
                  <div className="info-part">
                    <h4>Date</h4>
                    <span>July 28, 2024</span>
                  </div>
                  <div className="info-part">
                    <h4>Share</h4>
                    <ul className="social">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="info-part">
                    <h4>Works Preview</h4>
                    <a href="#" className="default-btn">
                      Live Preview
                    </a>
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
export default PortfolioDetails;
