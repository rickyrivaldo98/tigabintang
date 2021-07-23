import AboutImage from "../assets/img/aboutimage.svg";
import CustomerSupport from "../assets/img/customer-support.svg";
import Rating from "../assets/img/rating.svg";
import Productivity from "../assets/img/productivity.svg";
import Network from "../assets/img/network.svg";
const AboutUs = () => {
  return (
    <>
      <div className="w-full bg-white ">
        <div className="flex-none lg:flex  py-16">
          <div className="lg:pl-20 w-full lg:w-1/2">
            <div data-aos="fade-left" className="">
              <img src={AboutImage} alt="" />
            </div>
          </div>
          <div data-aos="fade-right" className="mx-auto md:pl-10 w-2/3">
            <div className="pt-10 text-4xl font-semibold text-yellow-400">
              Welcome to Tiga Bintang Sukses
            </div>
            <div className=" text-xl font-semibold text-yellow-400">
              Solusi alat panen anda!
            </div>
            <div className="pt-4 text-4xl md:text-7xl font-black text-black">
              20 Years Experience
            </div>
            <div className="pt-6 md:text-xl xl:text-3xl text-black">
              Tiga Bintang Sukses (TBS) didirikan dalam memenuhi berbagai <br />{" "}
              macam kebutuhan produk di bidang perkebunan kelapa sawit.
            </div>
            <div className="pt-6 lg:text-3xl text-black">
              Kami memproduksi alat panen dengan kualitas terbaik dan sebagai
              <br />
              distributor dalam menyediakan alat penunjang untuk melakukan{" "}
              <br />
              panen sehingga menghasilkan hasil yang maksimal dan efektif.
            </div>
            <div className="pt-6 lg:text-3xl text-black">
              Saat ini kami telah bekerjasama dengan banyak perusahaan dalam
              <br />
              mensupply alat panen yang berkualitas dan harga bersaing. Dengan
              <br />
              Visi kami menjadikan TBS sebagai produsen alat panen berskala
              <br />
              nasional yang unggul, kami siap menjadi solusi dalam pemuasan
              <br />
              kebutuhan alat panen anda!
            </div>
          </div>
        </div>
        <div className="md:flex text-4xl font-black">
          <div
            data-aos="fade-down"
            className="w-full md:w-1/2 py-20 bg-indigo-900 text-yellow-400"
          >
            <div data-aos="fade-up" className="w-full  md:flex">
              <div className="w-full md:w-1/2">
                <div className="mx-auto flex justify-center">
                  <div className="md:pr-5">
                    <img src={CustomerSupport} alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="md:text-2xl lg:text-4xl ">100.000</div>
                    <div className="text-2xl md:text-lg lg:text-2xl w-48 leading-5 pt-2">
                      TOOLS SOLD
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <div className="mx-auto flex justify-center">
                  <div className="md:pr-5">
                    <img src={Network} alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="md:text-2xl lg:text-4xl ">10</div>
                    <div className="text-2xl md:text-lg lg:text-2xl w-48 leading-5 pt-2">
                      COMPANY COLLABORATION
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="w-full md:w-1/2 py-20 bg-yellow-400"
          >
            <div data-aos="fade-down" className="w-full  md:flex">
              <div className="w-full md:w-1/2">
                <div className="mx-auto flex justify-center">
                  <div className="pr-5">
                    <img src={Productivity} alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="md:text-2xl lg:text-4xl ">5000pcs</div>
                    <div className="text-2xl md:text-lg lg:text-2xl w-48 leading-5 pt-2">
                      PRODUCTIVITY/ MONTH
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <div className="mx-auto flex justify-center">
                  <div className="pr-5">
                    <img src={Rating} alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="md:text-2xl lg:text-4xl ">30</div>
                    <div className="text-2xl md:text-lg lg:text-2xl w-48 leading-5 pt-2">
                      SATISFIED CUSTOMER
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
