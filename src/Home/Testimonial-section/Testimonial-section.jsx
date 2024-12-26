import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import "./Testimonial-section.css";


const TestimonialSection = () => {
  useEffect(() => {
    const $ = window.jQuery; 
    $(".upper").owlCarousel({
      items: 3,
      loop: true,
      margin: 10,
      nav: true,
      navText: [
          "<i class='fa-solid fa-angle-left left-arr'></i>",
          "<i class='fa-solid fa-angle-right right-arr'></i>"
      ],
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 2000,
      autoplayHoverPause: false,
      responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 },
      },
  });

  

    return () => $(".upper").trigger("destroy.upper");
  }, []);

  return (
    <div className="home-testimonial-section">
      <div className="container">
        <div className="home-testimonial-inner">
          <div className="home-testimonial-upper">
            <p className="testi center-text-title">Our testimonial</p>
            <h2 className="testi1 center-text-heading">Client Feedback</h2>
          </div>
          <div className="home-testimonial-bottom">
            <div className="home-testimonial-bottom-inner">
              {/* <div className="owl-carousel upper"> */}
                <div className="item">
                  <div className="client-feedback">
                    <div className="client-feedback-inner">
                      <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <p className="client-note">
                        "Exceptional service and support. The team at techvio. transformed our IT infrastructure with innovative solutions. Highly recommend for anyone seeking reliable and proactive IT management."
                      </p>
                      <div className="home-testimonial-img">
                        <img
                          src="/assets/images/testimonial-1.jpg"
                          alt="home-testimonial-1"
                        />
                      </div>
                      <span className="user-name">Saabir al-Obeid</span>
                      <span className="user-location">Turkey</span>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
                <div className="item">
                  <div className="client-feedback">
                    <div className="client-feedback-inner">
                      <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <p className="client-note">
                        "Outstanding experience with techvio. Their expertise in cyber security and IT solutions has been invaluable. Responsive, professional, and always ready to tackle challenges. Truly a great partner."
                      </p>
                      <div className="home-testimonial-img">
                        <img
                          src="/assets/images/testimonial-2.jpg"
                          alt="home-testimonial-1"
                        />
                      </div>
                      <span className="user-name">Zahra Burnett</span>
                      <span className="user-location">United States</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="client-feedback">
                    <div className="client-feedback-inner">
                      <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <p className="client-note">
                        "Highly impressed with techvio. Their dedication and technical skills have greatly improved our digital operations. Excellent service and support—worth every investment. A top choice for IT solutions."
                      </p>
                      <div className="home-testimonial-img">
                        <img
                          src="/assets/images/testimonial-3.jpg"
                          alt="home-testimonial-1"
                        />
                      </div>
                      <span className="user-name">Stevie Wills</span>
                      <span className="user-location">Germany</span>
                    </div>
                  </div>
                </div>
              </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
