import React from "react";
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Blog-section.css"

const Blog_section = () => {
  const fetchData = [
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
      img: "/assets/images/blog-4.jpg",
      descriptionTitle: "Machine Learning Applications for Every Industry ",
      descriptionText: "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua"
    },
    // {
    //   img: "/assets/images/blog-4.jpg",
    //   descriptionTitle: "5 Technology Considerations for Office Relocations ",
    //   descriptionText: "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua"
    // },
    // {
    //   img: "/assets/images/blog-5.jpg",
    //   descriptionTitle: "Everything you need to know about geo-blocking ",
    //   descriptionText: "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua"
    // },
    // {
    //   img: "/assets/images/blog-6.jpg",
    //   descriptionTitle: "Internal or outsourced IT: What’s the best choice? ",
    //   descriptionText: "Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua"
    // }
  ];

  return (
    <div className="home-blog">
      <div className="container">
        <div className="home-blog-inner">
          <div className="home-blog-upper">
            <p className="home-P center-text-title">Blog & Article</p>
            <h2 className="home-H center-text-heading" id="home-blog-heading">
              Recent Blog
            </h2>
          </div>
          <div className="home-blog-down">
            <div className="home-blog-down-inner">
              {/* <OwlCarousel className="owl-carousel" {...options}> */}
                {fetchData.map((Element, index) => (
                  <div key={index} className="home-blog-item">
                    <div className="home-blog-item-inner">
                      <div className="home-img">
                        <img src={Element.img} alt="home-" />
                      </div>
                      <div className="home-blog-description">
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
                            {Element.descriptionTitle}
                            <i className="fa-regular fa-arrow-up-right-from-square"></i>
                          </a>
                        </h3>
                        <p className="description-text">{Element.descriptionText}</p>
                        <div className="home-blog-read-more">
                          <a href="#">
                            <i className="fa-regular fa-arrow-right"></i>Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              {/* </OwlCarousel> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog_section;


{/* <div className="home-home-">
  <div className="container">
    <div className="home-home-inner">
      <div className="home-home-upper">
        <p className="home-home-P center-text-title">home- & Article</p>
        <h2 className="home-home-H center-text-heading" id="home-home-heading">
          Recent home-
        </h2>
      </div>
      <div className="home-home-down">
        <div className="home-home-down-inner">

          <div class="owl-carousel owl-theme">
            <div class="item"><div className="home-home-item">
              <div className="home-home-item-inner">
                <div className="home-home-img">
                  <img src="assets/images/home-2.jpg" alt="home-home-1" />
                </div>

                <div className="home-home-description">
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
                      Planning for a Safe Return to the Workplace IT
                      Solutions
                      <i className="fa-regular fa-arrow-up-right-from-square"></i>
                    </a>
                  </h3>

                  <p className="description-text">
                    Learn essential IT strategies for a smooth return to the
                    office, including enhanced security, effective remote
                    access.
                  
                  </p>

                  <div className="home-home-read-more">
                    <a href="#">
                      <i className="fa-regular fa-arrow-right"></i>Read More
                    </a>
                  </div>
                </div>
              </div>
            </div></div>
            <div class="item"><div className="home-home-item">
              <div className="home-home-item-inner">
                <div className="home-home-img">
                  <img src="assets/images/home-4.jpg" alt="home-home-1" />
                </div>

                <div className="home-home-description">
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
                      Planning for a Safe Return to the Workplace IT
                      Solutions
                      <i className="fa-regular fa-arrow-up-right-from-square"></i>
                    </a>
                  </h3>

                  <p className="description-text">
                    Learn essential IT strategies for a smooth return to the
                    office, including enhanced security, effective remote
                    access.
                  
                  </p>

                  <div className="home-home-read-more">
                    <a href="#">
                      <i className="fa-regular fa-arrow-right"></i>Read More
                    </a>
                  </div>
                </div>
              </div>
            </div></div>
            <div class="item"><div className="home-home-item">
              <div className="home-home-item-inner">
                <div className="home-home-img">
                  <img src="assets/images/home-5.jpg" alt="home-home-1" />
                </div>

                <div className="home-home-description">
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
                      Planning for a Safe Return to the Workplace IT
                      Solutions
                      <i className="fa-regular fa-arrow-up-right-from-square"></i>
                    </a>
                  </h3>

                  <p className="description-text">
                    Learn essential IT strategies for a smooth return to the
                    office, including enhanced security, effective remote
                    access.
                   
                  </p>

                  <div className="home-home-read-more">
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
    </div>
  </div>
</div> */}