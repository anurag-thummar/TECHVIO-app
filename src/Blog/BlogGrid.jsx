import React from 'react';
import "./BlogGrid.css";

const BlogGrid = () => {
    const blogData = [

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
        },
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
        }
    ];

    return (
        <>
            <div className="blogpage">
                <div className="container">
                    <div className="blogpage-inner">
                        <div className="blogpage-upper">
                            <p className="blogpageP center-text-title">Blog & Article</p>
                            <h2 className="blogpageH center-text-heading" id="blogpage-heading">
                                Recent Blog
                            </h2>
                        </div>
                        <div className="blogpage-down">
                            <div className="blogpage-down-inner">
                                {
                                    blogData.map((blogElement) => (

                                        <div className="blogpage-item">
                                            <div className="blogpage-item-inner">
                                                <div className="blogpage-img">
                                                    <img src={blogElement.img} alt="blog-1" />
                                                </div>

                                                <div className="blogpage-description">
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

                                                    <div className="blogpage-read-more">
                                                        <a href="#">
                                                            <i className="fa-regular fa-arrow-right"></i>Read More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                                {/* <div className="blog-hover-dots">
                      <i className="fa-solid fa-arrow-left"></i>
                      <div className="blog-dots dot1"></div>
                      <div className="blog-dots dot2"></div>
                      <div className="blog-dots dot3"></div>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default BlogGrid;