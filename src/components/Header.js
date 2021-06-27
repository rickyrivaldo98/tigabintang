import List from "../assets/img/list.svg";
import Quality from "../assets/img/quality.svg";
import Vision from "../assets/img/vision.svg";
import Carousel from "../components/Carousel";

const Header = () => {
  return (
    <>
      <div className="mt-2">
        <div className="">
          <Carousel />
        </div>
        <div className="flex text-3xl w-full">
          <div className="w-1/3 py-20 bg-indigo-900 text-yellow-400">
            <div className="flex justify-center">
              <div className="pr-7">
                <img src={Vision} alt="" />
              </div>
              <div>
                <div>OUR VISION</div>
                <div className="text-base w-80">
                  Menjadi salah satu produsen dan supplier terbaik dalam
                  menyediakan kebutuhan alat panen sawit yang berkualitas dengan
                  harga yang kompetitif.
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 py-20 ">
            <div className="flex justify-center">
              <div className="pr-7">
                <img src={List} alt="" />
              </div>
              <div>
                <div>OUR PRIORITY</div>
                <div className="text-base w-80">
                  Memberikan kepuasan kualitas dan pelayanan yang maksimal bagi
                  pelanggan
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 py-20 bg-indigo-900 text-yellow-400">
            <div className="flex justify-center">
              <div className="pr-7">
                <img src={Quality} alt="" />
              </div>
              <div>
                <div>OUR SUPERIORITY</div>
                <div className="text-base w-80">
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
