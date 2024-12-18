import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Aboutus from "./Aboutus";
import Blog from "./Blog";
import Contact from "./Contact";
import Pages from "./Pages";
import NoPagesFound from "./NoPages";
import PortfolioDetails from "./Portfolio/Portfolio-sections/Portfolio-details";
import PortfolioSection from "./Portfolio/Portfolio-sections/Portfolio-section";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Service1 from "./Services/Service1"
import Service2 from "./Services/Service2";
import Service3 from "./Services/Service3";
import ServiceDetails from "./Services/ServiceDetails";
import Team from "./pages/Team";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import CommingSoon from "./pages/CommingSoon";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermAndConditions";
import BlogGrid from "./Blog/BlogGrid";
import BlogRightSidebar from "./Blog/BlogRightSidebar";
import BlogDetails from "./Blog/BlogDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Services/Service1" element={<Service1/>} />
        <Route path="/Services/Service2" element={<Service2/>} />
        <Route path="/Services/Service3" element={<Service3/>} />
        <Route path="/Services/ServiceDetails" element={<ServiceDetails/>} />
        <Route path="/Portfolio/Portfolio-sections/Portfolio-section" element={<PortfolioSection />} />
        <Route path="/Portfolio/Portfolio-sections/Portfolio-details" element={<PortfolioDetails />} />
        <Route path="/pages/Team" element={<Team/>}/>
        <Route path="/pages/Pricing" element={<Pricing/>}/>
        <Route path="/pages/Faq" element={<Faq/>}/>
        <Route path="/pages/CommingSoon" element={<CommingSoon/>}/>
        <Route path="/pages/Privacy&Policy" element={<PrivacyPolicy/>}/>
        <Route path="/pages/TermAndConditions" element={<TermsAndConditions/>}/>
        <Route path="/Blog/BlogGrid" element={<BlogGrid/>}/>
        <Route path="/Blog/BlogRightSidebar" element={<BlogRightSidebar/>}/>
        <Route path="/Blog/BlogDetails" element={<BlogDetails/>}/>
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NoPagesFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
);
