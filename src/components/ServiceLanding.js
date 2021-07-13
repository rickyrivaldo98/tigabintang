import service1 from "../assets/img/service1.jpeg";
import service2 from "../assets/img/service2.jpeg";
import service3 from "../assets/img/service3.jpeg";
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
          className="flex-none lg:flex justify-center items-center text-center gap-x-20 py-14"
        >
          <div className="lg:h-96 mb-5 md:mb-4  w-76 sm:w-96  mx-auto ">
            <div className="serviceMenu">
              <img src={service1} alt="" />
              <div className="textServices">Mencetak alat panen perkebunan</div>
            </div>
            <div className="flex justify-between bg-indigo-900">
              <div className="px-2 py-4  text-sm sm:text-lg font-bold text-yellow-500">
                Mencetak alat panen perkebunan
              </div>
              <div className="pt-3 text-4xl px-4 bg-yellow-500">
                <AiOutlinePlus />
              </div>
            </div>
          </div>
          <div className="lg:h-96 mb-5 md:mb-0  w-76 sm:w-96  mx-auto">
            <div className="serviceMenu">
              <img src={service2} alt="" />
              <div className="textServices">
                Perbaikan produk yang bergaransi
              </div>
            </div>
            <div className="flex justify-between bg-indigo-900">
              <div className="px-2 py-4  text-sm sm:text-lg font-bold text-yellow-500">
                Perbaikan produk yang bergaransi
              </div>
              <div className="pt-3 text-4xl px-4 bg-yellow-500">
                <AiOutlinePlus />
              </div>
            </div>
          </div>
          <div className="lg:h-96 mb-5 md:mb-0 w-76 sm:w-96  mx-auto">
            <div className="serviceMenu">
              <img src={service3} alt="" />
              <div className="textServices">Penyetelan Besi</div>
            </div>
            <div className="flex justify-between bg-indigo-900">
              <div className="px-2 py-4 text-sm sm:text-lg font-bold text-yellow-500">
                Penyetelan Besi
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
