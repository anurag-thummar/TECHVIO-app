import React from "react";
import About_section from "./Home/About-section/About-section";
import BusinessStats_section from "./Home/BusinessStat-section/BusinessStats-section";
import Team_section from "./Home/Team-seaction/Team-section";
import Hire_section from "./Home/Hire-section/Hire-section";
import PartnersSection from "./Home/Partners-section/PartnersSection";
// import "./Aboutus.css";

const Aboutus = () => {
  return (
    <>
      <About_section />
      <BusinessStats_section />
      <Team_section/>
      <Hire_section/>
      <PartnersSection/>
    </>
  );
};

export default Aboutus;
