import Tele from "../assets/img/akar-icons_phone.svg";
import Email from "../assets/img/carbon_email.svg";
import Maps from "../assets/img/mdi_google-maps.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-indigo-900 w-full pb-40 pt-20 px-28">
        <div className="text-3xl">
          <div className="text-5xl font-black text-yellow-400">
            Official Contact :
          </div>
          <br />
          <div className="text-white ">
            <div className="font-bold">PT. Gloria Mandiri Teknik</div>
            <div className="flex pt-4">
              <div className="pr-10">
                <img src={Email} alt="" />
              </div>
              <div>info@gloriamandiriteknik.com</div>
            </div>
            <div className="flex pt-4">
              <div className="pr-10">
                <img src={Maps} alt="" />
              </div>
              <div>
                Jalan Soekarno-Hatta No 10, Kec. Payung Sekaki, Pekanbaru
              </div>
            </div>
            <div className="flex pt-4">
              <div className="pr-10">
                <img src={Tele} alt="" />
              </div>
              <div>081225466738</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
