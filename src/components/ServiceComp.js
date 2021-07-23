import service1 from "../assets/img/service1.jpeg";
import service2 from "../assets/img/service2.jpeg";
import service3 from "../assets/img/service3.jpeg";
import service4 from "../assets/img/service4_.png";
import service5 from "../assets/img/service5.jpeg";
import service6 from "../assets/img/service6.png";
import "../assets/css/Service.css";
import { AiOutlinePlus } from "react-icons/ai";
const ServiceComp = () => {
  return (
    <>
      <div className="text-center w-full py-20 bg-white overflow-hidden">
        <div data-aos="fade-up" className="text-yellow-500 font-bold text-2xl">
          Our Service
        </div>
        <div data-aos="fade-up" className="font-bold text-4xl">
          We Provide Service
        </div>
        <div className="md:flex md:justify-center  gap-x-20 py-14">
          <div data-aos="fade-down" className="md:h-96 mb-5 md:mb-0 w-96">
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
          <div data-aos="fade-down" className="md:h-96 mb-5 md:mb-0  w-96">
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
          <div data-aos="fade-down" className="md:h-96 mb-5 md:mb-0  w-96">
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
        <div className="md:flex md:justify-center  gap-x-20 py-14">
          <div data-aos="fade-down" className="md:h-96 mb-5 md:mb-0  w-96">
            <div className="serviceMenu">
              <img src={service4} alt="" />
              <div className="textServices">Menjual Aksesoris Alat Panen</div>
            </div>
            <div className="flex justify-between bg-indigo-900">
              <div className="px-2 py-4 text-lg font-bold text-yellow-500">
                Menjual Aksesoris Alat Panen
              </div>
              <div className="pt-3 text-4xl px-4 bg-yellow-500">
                <AiOutlinePlus />
              </div>
            </div>
          </div>
          <div data-aos="fade-down" className="md:h-96 mb-5 md:mb-0  w-96">
            <div className="serviceMenu">
              <img src={service5} alt="" />
              <div className="textServices">Packing</div>
            </div>
            <div className="flex justify-between bg-indigo-900">
              <div className="px-2 py-4 text-lg font-bold text-yellow-500">
                Packing
              </div>
              <div className="pt-3 text-4xl px-4 bg-yellow-500">
                <AiOutlinePlus />
              </div>
            </div>
          </div>
          <div data-aos="fade-down" className="md:h-96 mb-5 md:mb-0  w-96">
            <div className="serviceMenu">
              <img src={service6} alt="" />
              <div className="textServices">Menjual Penutup Keamanan</div>
            </div>
            <div className="flex justify-between bg-indigo-900">
              <div className="px-2 py-4 text-lg font-bold text-yellow-500">
                Menjual Penutup Keamanan
              </div>
              <div className="pt-3 text-4xl px-4 bg-yellow-500">
                <AiOutlinePlus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceComp;
