import AboutUs from "../components/AboutUs";
import FaqLanding from "../components/FaqLanding";

const About = () => {
  return (
    <>
      <div className="py-20 text-4xl font-semibold text-center">
        <div>About Us</div>
        <span class="inline-block h-1 w-40 rounded bg-black mb-2"></span>
        <div className="font-thin pt-7">Home / About Us</div>
      </div>
      <AboutUs />
      <FaqLanding />
    </>
  );
};

export default About;
