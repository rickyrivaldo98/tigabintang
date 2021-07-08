import AboutUs from "../components/AboutUs";
import React, { useEffect, useState } from "react";
import FaqLanding from "../components/FaqLanding";
import { Menu } from "../layout";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const About = () => {
  // fungsi navbar

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Menu open={isOpen} setOpen={setIsOpen} />

      <Navbar toggle={toggle} />
      <div className="overflow-hidden">
        <div className="py-20 text-4xl font-semibold text-center">
          <div>About Us</div>
          <span class="inline-block h-1 w-40 rounded bg-black mb-2"></span>
          <div className="font-thin pt-7">Home / About Us</div>
        </div>
        <AboutUs />
        <FaqLanding />
        <Footer />
      </div>
    </>
  );
};

export default About;
