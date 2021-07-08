import panen1 from "../assets/img/panen1.svg";
import "../assets/css/Service.css";
import { AiOutlinePlus } from "react-icons/ai";
const ServiceLanding = () => {
  return (
    <>
      <div className="text-center w-full py-20 bg-white">
        <div
          data-aos="fade-down"
          className="text-yellow-500 font-bold text-xl md:text-2xl"
        >
          Our Service
        </div>
        <div data-aos="fade-down" className="font-bold text-2xl md:text-4xl">
          We Provide Service
        </div>
        <div
          data-aos="fade-down"
          className="md:flex md:justify-center  gap-x-20 py-14"
        >
          <div className="md:h-96 mb-5 md:mb-0 w-96">
            <div className="serviceMenu">
              <img src={panen1} alt="" />
              <div className="textServices">Halo</div>
            </div>
            <div className="flex justify-between bg-indigo-900">
              <div className="px-2 py-4 text-lg font-bold text-yellow-500">
                Mencetak alat panen perkebunan
              </div>
              <div className="pt-3 text-4xl px-4 bg-yellow-500">
                <AiOutlinePlus />
              </div>
            </div>
          </div>
          <div className="md:h-96 mb-5 md:mb-0  w-96">
            <div className="serviceMenu">
              <img src={panen1} alt="" />
              <div className="textServices">Halo</div>
            </div>
            <div className="flex justify-between bg-indigo-900">
              <div className="px-2 py-4 text-md md:text-lg font-bold text-yellow-500">
                Mencetak alat panen perkebunan
              </div>
              <div className="pt-3 text-4xl px-4 bg-yellow-500">
                <AiOutlinePlus />
              </div>
            </div>
          </div>
          <div className="md:h-96 mb-5 md:mb-0  w-96">
            <div className="serviceMenu">
              <img src={panen1} alt="" />
              <div className="textServices">Halo</div>
            </div>
            <div className="flex justify-between bg-indigo-900">
              <div className="px-2 py-4 text-lg font-bold text-yellow-500">
                Mencetak alat panen perkebunan
              </div>
              <div className="pt-3 text-4xl px-4 bg-yellow-500">
                <AiOutlinePlus />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-4 md:pt-10">
          <div
            data-aos="fade-up"
            className="text-xl md:text-3xl py-3 w-40 md:w-64 bg-yellow-400"
          >
            See More
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceLanding;
