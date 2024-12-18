import React from 'react';
import "./ServiceDetails.css";

const ServiceDetails = () => {
    return (
        <>
            <section className="services-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-content">
                                <div className="services-details-image">
                                    <img src="/assets/images/services-details-1.jpg" alt="image" />
                                </div>

                                <h3>Software Development Consulting We Provide</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt laborum</p>

                                <div className="features-text">
                                    <h4>We Provide Our Client Best Software &amp; IT Solution Services</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt laborum</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt laborum</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <aside className="services-widget">
                                <section className="widget widget_categories">
                                    <h3 className="widget-title">Our Services</h3>
                                    <ul>
                                        <li> <a href="#">IT Solutions</a></li>
                                        <li> <a href="#">Web Development</a></li>
                                        <li> <a href="#">Technology</a></li>
                                        <li> <a href="#">Networking Services</a></li>
                                        <li> <a href="#">Software Development</a></li>
                                    </ul>
                                </section>
                                <section className="widget widget_download_btn">
                                    <h3 className="widget-title">Company Profile</h3>
                                    <div className="download-btn-box">
                                        <a href="#" className="default-btn">Download PDF <span></span></a>
                                        <a href="#" className="default-btn">Download Word File <span></span></a>
                                    </div>
                                </section>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceDetails;