import React from "react";
import "./BlogDetails.css";

const BlogDetails = () => {
  return (
    <>
      <div className="blog_details">
        <div className="container">
          <div className="blog_details-inner">
            <div className="blog_details-down-left">
              <div className="blog_details-down-left-inner">
                <div className="services-details-content">
                  <div className="services-details-image">
                    <img
                      src="/assets/images/services-details-1.jpg"
                      alt="Safe Return"
                    />
                  </div>

                  <div class="entry-meta">
                    <ul>
                      <li> <span>Posted On:</span>  <a href="#">June 10 - 2024</a></li>
                      <li> <span>Posted By:</span>  <a href="#">Herman Boone</a></li>
                    </ul>
                  </div>
                  <h3>Planning for a Safe Return to the Workplace IT Solutions</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi aliquip.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi aliquip.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim.
                  </p>
                  <div className="features-text">
                    <h4>
                      We Provide Our Client Best Software &amp; IT Solution
                      Services
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Minim veniam, quis nostrud exercitation
                      ullamco laboris nisi commodo consequat.
                    </p>
                    <ul className="wp-block-gallery columns-2">
                      <li className="blocks-gallery-item">
                        <figure>
                          <img
                            src="/assets/images/blogDetails1.jpg"
                            alt="Details 1"
                          />
                        </figure>
                      </li>
                      <li className="blocks-gallery-item">
                        <figure>
                          <img
                            src="/assets/images/blogDetails2.jpg"
                            alt="Details 2"
                          />
                        </figure>
                      </li>
                    </ul>
                    <h4>
                      Increase The Profitability, Availability Of Your Business
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: blog_details-down-right */}
            <div className="blog_details-down-right">
              <div className="blog_details-down-right-inner">
                <section className="widget widget_search">
                  <form className="search-form search-top">
                    <label>
                      <input
                        type="search"
                        className="search-field"
                        placeholder="Search..."
                      />
                    </label>
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </section>

                <section className="widget widget_techvio_posts_thumb">
                  <h3 className="widget-title">Popular Posts</h3>
                  <article className="item">
                    <a href="#" className="thumb">
                      <img src="/assets/images/blog-1.jpg" alt="Popular Post 1" />
                    </a>
                    <div className="info">
                      <span>June 10, 2024</span>
                      <h4 className="title usmall">
                        <a href="#">
                          Planning for a Safe Return to the Workplace IT
                          Solutions
                        </a>
                      </h4>
                    </div>
                  </article>
                  <article className="item">
                    <a href="#" className="thumb">
                      <img src="/assets/images/blog-2.jpg" alt="Popular Post 2" />
                    </a>
                    <div className="info">
                      <span>June 15, 2024</span>
                      <h4 className="title usmall">
                        <a href="#">
                          Announcing Our New Smiles for Success Charity
                        </a>
                      </h4>
                    </div>
                  </article>
                </section>

                <section className="widget widget_categories">
                  <h3 className="widget-title">Categories</h3>
                  <ul>
                    <li>
                      <a href="#">
                        Business <span className="categories-link-count">(33)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Solutions{" "}
                        <span className="categories-link-count">(45)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Technology{" "}
                        <span className="categories-link-count">(20)</span>
                      </a>
                    </li>
                  </ul>
                </section>

                <section className="widget widget_tag_cloud">
                  <h3 className="widget-title">Tags</h3>
                  <div className="tagcloud">
                    <a href="#">Web Design</a>
                    <a href="#">Responsive</a>
                    <a href="#">Applications</a>
                    <a href="#">Solutions</a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
