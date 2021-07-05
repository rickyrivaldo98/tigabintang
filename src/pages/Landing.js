import Header from "../components/Header";
import AboutUsLanding from "../components/AboutUsLanding";
import ServiceLanding from "../components/ServiceLanding";
import TeamLanding from "../components/TeamLanding";
import FaqLanding from "../components/FaqLanding";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Landing = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <AboutUsLanding />
        <ServiceLanding />
        <TeamLanding />
        <FaqLanding />
      </div>
    </>
  );
};

export default Landing;
