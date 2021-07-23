import List from "../assets/img/list.svg";
import Quality from "../assets/img/quality.svg";
import Vision from "../assets/img/vision.svg";
import Carousel from "../components/Carousel";
const Header = () => {
  return (
    <>
      <div className="mt-2">
        <div data-aos="zoom-in" className="">
          <Carousel />
        </div>
        <div className="mt-5 flex-none lg:flex text-3xl w-full">
          <div className="w-full lg:w-1/3 py-20 bg-indigo-900 text-yellow-400">
            <div
              className="grid grid-cols-1  md:flex md:justify-center"
              data-aos="fade-down"
            >
              <div className="md:pr-7 my-5 md:my-0">
                <img
                  className="mx-auto w-20 md:w-auto"
                  src={Vision}
                  alt="vision"
                />
              </div>
              <div>
                <div className="text-center  md:text-left">OUR VISION</div>
                <div className="text-center md:text-left mx-auto md:mx-none text-base w-80">
                  Menjadi salah satu produsen dan supplier terbaik dalam
                  menyediakan kebutuhan alat panen sawit yang berkualitas dengan
                  harga yang kompetitif.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 py-20 ">
            <div
              className="grid grid-cols-1  md:flex md:justify-center"
              data-aos="fade-up"
            >
              <div className="md:pr-7 my-5 md:my-0">
                <img
                  className="mx-auto  w-20 md:w-auto"
                  src={List}
                  alt="list"
                />
              </div>
              <div>
                <div className="text-center  md:text-left">OUR PRIORITY</div>
                <div className="text-center md:text-left mx-auto md:mx-none text-base w-80">
                  Memberikan kepuasan kualitas dan pelayanan yang maksimal bagi
                  pelanggan
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 py-20 bg-indigo-900 text-yellow-400">
            <div
              className="grid grid-cols-1  md:flex md:justify-center"
              data-aos="fade-down"
            >
              <div className="md:pr-7 my-5 md:my-0">
                <img className="mx-auto  w-20 md:w-auto" src={Quality} alt="" />
              </div>
              <div>
                <div className="text-center  md:text-left">OUR SUPERIORITY</div>
                <div className="text-center md:text-left mx-auto md:mx-none text-base w-80">
                  Kami menempah besi baja terbaik yang dicustom khusus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
