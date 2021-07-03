import { Link, Switch, Route } from "react-router-dom";
import Calendar from "../assets/img/calendar.svg";
import Callcenter from "../assets/img/callcenter.svg";
import Email from "../assets/img/email.svg";
import { FaCaretDown } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className="mx-28 pt-10">
        <div className="flex justify-between">
          <div data-aos="fade-right" className="text-6xl font-black">
            TIGA BINTANG <br /> SUKSES
          </div>
          <div data-aos="fade-up" className="flex text-xl font-light">
            <div className="flex pr-28 pt-5">
              <div>
                <img src={Calendar} alt="" />
              </div>
              <div className="pl-7">
                <div>Opening Hour</div>
                <div className="mt-3">Mon-fri, 8:00-17:00</div>
              </div>
            </div>
            <div className="flex pr-28 pt-2">
              <div>
                <img src={Callcenter} alt="" />
              </div>
              <div className="pl-7 pt-3">
                <div>Call Us</div>
                <div className="mt-3">081225466738</div>
              </div>
            </div>
            <div className="flex pt-5">
              <div>
                <img src={Email} alt="" />
              </div>
              <div className="pl-7">
                <div>Email Us</div>
                <div className="mt-3">info@gloriamandiriteknik.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-900 mt-10 w-full h-28 ">
          <div className="flex text-2xl gap-x-8 p-10 text-white font-medium">
            <Link to="/">
              <div>HOME</div>
            </Link>
            <Link to="/about">
              <div>ABOUT</div>
            </Link>
            <Link to="/team">
              <div>TEAM</div>
            </Link>
            <Link to="/service">
              <div>SERVICE</div>
            </Link>
            <Link to="/produk">
              <div className="flex">
                <div>PRODUCT</div>
                <div className="pl-4">
                  <FaCaretDown />
                </div>
              </div>
            </Link>
            <Link to="/contact">
              <div>CONTACT</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
