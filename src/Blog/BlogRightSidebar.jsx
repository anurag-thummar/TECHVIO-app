import React from 'react';
import "./BlogRightSidebar.css";

const BlogRightSidebar = () => {

  const blogData = [
    {
      img: "/assets/images/blog-1.jpg",
      descriptionTitle: "Planning for a Safe Return to the Workplace IT Solutions",
      descriptionText: "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua"
    },
    {
      img: "/assets/images/blog-2.jpg",
      descriptionTitle: "Announcing Our New Smiles for Success Charity ",
      descriptionText: "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua"
    },
    {
      img: "/assets/images/blog-3.jpg",
      descriptionTitle: "Machine Learning Applications for Every Industry ",
      descriptionText: "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua"
    },
    {
      img: "/assets/images/blog-4.jpg",
      descriptionTitle: "5 Technology Considerations for Office Relocations ",
      descriptionText: "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua"
    },
    {
      img: "/assets/images/blog-5.jpg",
      descriptionTitle: "Everything you need to know about geo-blocking ",
      descriptionText: "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua"
    },
    {
      img: "/assets/images/blog-6.jpg",
      descriptionTitle: "Internal or outsourced IT: What’s the best choice? ",
      descriptionText: "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua"
    }
  ];

  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="blog-inner">
            {/* <div className="blog-upper">
              <p className="blogP center-text-title">Blog & Article</p>
              <h2 className="blogH center-text-heading" id="blog-heading">
                Recent Blog
              </h2>
            </div> */}
            <div className="blog-down-left">
              <div className="blog-down-left-inner">
                {
                  blogData.map((blogElement) => (
                    // <div key={a}>
                    <div className="blog-item">
                      <div className="blog-item-inner">
                        <div className="blog-img">
                          <img src={blogElement.img} alt="blog-1" />
                        </div>

                        <div className="blog-description">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <i className="fa-regular fa-circle-user"></i>

                          <a href="#">Author</a>

                          <i className="fa fa-calendar-check"></i>
                          <a href="#">16 July 2024</a>

                          <h3 className="discription-titleh3">
                            <a className="discription-title" href="#">
                              {blogElement.descriptionTitle}
                              <i className="fa-regular fa-arrow-up-right-from-square"></i>
                            </a>
                          </h3>

                          <p className="description-text">
                            {blogElement.descriptionText}
                          </p>

                          <div className="blog-read-more">
                            <a href="#">
                              <i className="fa-regular fa-arrow-right"></i>Read More
                            </a>
                          </div>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                  ))
                }


              </div>
            </div>
            <div className="blog-down-right">
              <div className="blog-down-right-inner">
                <section class="widget widget_search">
                  <form class="search-form search-top">
                    <label>
                      <input type="search" class="search-field" placeholder="Search..." />
                    </label>
                    <button type="submit"> <i class="fas fa-search"></i></button>
                  </form>
                </section>
                <section class="widget widget_techvio_posts_thumb">
                  <h3 class="widget-title">Popular Posts</h3>
                  <article class="item">
                    <a href="#" class="thumb">
                      <img src="/assets/images/blog-1.jpg" alt="image" />
                    </a>
                    <div class="info">
                      <span>June 10, 2024</span>
                      <h4 class="title usmall">
                        <a href="#">Planning for a Safe Return to the Workplace IT Solutions</a>
                      </h4>
                    </div>
                  </article>
                  <article class="item">
                    <a href="#" class="thumb">
                      <img src="/assets/images/blog-2.jpg" alt="image" />
                    </a>
                    <div class="info">
                      <span>June 15, 2024</span>
                      <h4 class="title usmall">
                        <a href="#">Announcing Our New Smiles for Success Charity</a>
                      </h4>
                    </div>
                  </article>
                  <article class="item">
                    <a href="#" class="thumb">
                      <img src="/assets/images/blog-3.jpg" alt="image" />
                    </a>
                    <div class="info">
                      <span>June 25, 2024</span>
                      <h4 class="title usmall">
                        <a href="#">Machine Learning Applications for Every Industry</a>
                      </h4>
                    </div>
                  </article>
                </section>
                <section class="widget widget_categories">
                  <h3 class="widget-title">Categories</h3>
                  <ul>
                    <li><a href="#">Business <span class="categories-link-count"> (33)</span></a></li>
                    <li><a href="#">Solutions <span class="categories-link-count"> (45)</span></a></li>
                    <li><a href="#">Technology <span class="categories-link-count"> (20)</span></a></li>
                    <li><a href="#">Digital Marketing <span class="categories-link-count"> (15)</span></a></li>
                    <li><a href="#">Graphic Design <span class="categories-link-count"> (7)</span></a></li>
                  </ul>
                </section>
                <section class="widget widget_tag_cloud">
                  <h3 class="widget-title">Tags</h3>
                  <div class="tagcloud">
                    <a href="#">Web Design</a>
                    <a href="#">Responsive</a>
                    <a href="#">Applications</a>
                    <a href="#">Solutions</a>
                    <a href="#">Industry</a>
                    <a href="#">Marketing</a>
                    <a href="#">Development</a>
                    <a href="#">Startup</a>
                    <a href="#">Graphic Design</a>
                    <a href="#">SEO</a>
                    <a href="#">Data Security</a>
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




export default BlogRightSidebar;