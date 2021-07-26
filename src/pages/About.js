import AboutUs from "../components/AboutUs";
import React, { useEffect, useState } from "react";
import FaqLanding from "../components/FaqLanding";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Sidebar from "../layout/Sidebar";

const About = () => {
  // fungsi navbar

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="lg:hidden">
        <Sidebar />
      </div>
      <Navbar toggle={toggle} />
      <div className="overflow-hidden">
        <div className="py-20 text-4xl font-semibold text-center">
          <div data-aos="fade-up">About Us</div>
          <span class="inline-block h-1 w-40 rounded bg-black mb-2"></span>
          <div data-aos="fade-left" className="font-thin pt-7">
            Home / About Us
          </div>
        </div>
        <AboutUs />
        <FaqLanding />
        <Footer />
      </div>
    </>
  );
};

export default About;
