import Telephone from "../assets/img/telephone.svg";
import Email from "../assets/img/email2.svg";
import Maps from "../assets/img/maps.svg";

const ContactComp = () => {
  return (
    <>
      <div className="text-center w-full py-20 bg-white overflow-hidden">
        <div data-aos="fade-up" className="text-yellow-500 font-bold text-2xl">
          Get In Touch
        </div>
        <div data-aos="fade-down" className="font-bold text-4xl mb-10">
          For Any Query
        </div>
        <div className="bg-indigo-900 justify-center ">
          <div className="md:flex container mx-auto  gap-x-10 py-14 ">
            <div
              data-aos="fade-left"
              className="h-96 w-full md:w-1/3 border-white border-solid border bg-indigo-900 flex items-center"
            >
              <div className="ml-7">
                <img src={Maps} alt="" />
              </div>
              <div className="text-left ml-5">
                <div className="text-4xl font-bold text-yellow-500">
                  Location
                </div>
                <div className="text-md md:text-lg text-white">
                  Jalan Soekarno-Hatta No 10, Kec. Payung Sekaki, Pekanbaru
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="h-96  w-full md:w-1/3 border-white border-solid border bg-indigo-900 flex items-center"
            >
              <div className="ml-7">
                <img src={Telephone} alt="" />
              </div>
              <div className="text-left ml-5">
                <div className="text-4xl font-bold text-yellow-500">Phone</div>
                <div className="text-md md:text-lg text-white">
                  081225466738
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="h-96  w-full md:w-1/3  border-white border-solid border bg-indigo-900 flex items-center"
            >
              <div className="ml-4 md:ml-7">
                <img src={Email} alt="" />
              </div>
              <div className="text-left ml-5">
                <div className="text-xl md:text-4xl font-bold text-yellow-500">
                  Email
                </div>
                <div className="text-md md:text-lg  text-white ">
                  info@gloriamandiriteknik.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComp;
