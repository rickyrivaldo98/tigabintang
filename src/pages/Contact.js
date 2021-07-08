import ContactComp from "../components/ContactComp";
import { Menu } from "../layout";
import Navbar from "../layout/Navbar";
import React, { useEffect, useState } from "react";
import Footer from "../layout/Footer";

const Contact = () => {
  // fungsi navbar

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Menu open={isOpen} setOpen={setIsOpen} />

      <Navbar toggle={toggle} />
      <div className="py-20 text-4xl font-semibold text-center">
        <div>Contact Us</div>
        <span class="inline-block h-1 w-40 rounded bg-black mb-2"></span>
        <div className="font-thin pt-7">Home / Contact Us</div>
      </div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default Contact;
