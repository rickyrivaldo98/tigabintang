import Header from "../components/Header";
import AboutUsLanding from "../components/AboutUsLanding";
import ServiceLanding from "../components/ServiceLanding";
import TeamLanding from "../components/TeamLanding";
import FaqLanding from "../components/FaqLanding";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Sidebar from "../layout/Sidebar";
const Landing = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
      once: true,
    });
  }, []);

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
      {/* <Menu open={isOpen} setOpen={setIsOpen} /> */}

      <Navbar toggle={toggle} />
      <div className="overflow-hidden">
        <Header />
        <AboutUsLanding />
        <ServiceLanding />
        <TeamLanding />
        <FaqLanding />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
