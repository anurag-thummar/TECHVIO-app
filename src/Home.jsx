import React, { useState, useEffect } from 'react';
import "./Home.css";
import Header from './Component/SimpleHeader/SimpleHeader';
import Hero_section from "./Home/Hero-section/Hero-section";
import Service_section from "./Home/Service-section/Service-section";
import HireSection0 from "./Home/Hire-section0/Hire-section0";
import Technology_section from "./Home/Technology-section/Technology-section";
import Feature_section from "./Home/Feature-section/Feature-section";
import AboutSection from "./Home/About-section/About-section";
import Overview_section from "./Home/Overview-section/Overview-section";
import BusinessStats_section from "./Home/BusinessStat-section/BusinessStats-section";
import Blog_section from "./Home/Blog-section/Blog-section";
import PartnersSection from "./Home/Partners-section/PartnersSection";
import Testimonial_section from "./Home/Testimonial-section/Testimonial-section";
import Team_section from "./Home/Team-seaction/Team-section";
import Hire_section from "./Home/Hire-section/Hire-section";
// import Contact_section from "./Home/Contact-section/Contact-section";
import Footer from "./Footer/Footer";
import PortfolioSectionHomePage from "./Home/Portfolio-sections/Portfolio";
import Contact from "./Contact";
import Preloader from './Component/Preloader/Preloader';
import "./Mediaquery/HomeMediaQuery.css"
import ResponsiveHeader from './Header/Header';


const Home = () => {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   },); // Preloader for 2 seconds

  //   return () => clearTimeout(timer); // Cleanup on unmount
  // }, []);

  return (
    <>
      {/* {loading ? (
        <Preloader />
      ) : ( */}
        {/* <> */}
          {/* <Header /> */}
          {/* <ResponsiveHeader/> */}
          <Hero_section />
          <Service_section />
          <HireSection0 />
          <Technology_section />
          <Feature_section />
          <AboutSection />
          <Overview_section />
          <PortfolioSectionHomePage />
          <BusinessStats_section />
          <Blog_section />
          <Testimonial_section />
          <Team_section />
          <Hire_section />
          <PartnersSection />
          <Footer />
        {/* </> */}
       {/* )} */}
    </> 
  );
};

export default Home;
