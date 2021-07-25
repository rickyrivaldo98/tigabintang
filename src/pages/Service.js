import ServiceComp from "../components/ServiceComp";
import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const Service = () => {
  // fungsi navbar

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <div className="py-20 text-4xl font-semibold text-center">
        <div data-aos="fade-up">Our Service</div>
        <span class="inline-block h-1 w-40 rounded bg-black mb-2"></span>
        <div data-aos="fade-left" className="font-thin pt-7">
          Home / Service
        </div>
      </div>
      <ServiceComp />
      <Footer />
    </>
  );
};

export default Service;
