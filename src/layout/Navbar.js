import { Link, Switch, Route } from "react-router-dom";
import Calendar from "../assets/img/calendar.svg";
import Callcenter from "../assets/img/callcenter.svg";
import Email from "../assets/img/email.svg";
import { FaCaretDown } from "react-icons/fa";
import { createPopper } from "@popperjs/core";
import React from "react";

const Navbar = ({ toggle }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <div className="flex justify-between items-center h-16 bg-white-500 text-black  pt-10 pb-10 ">
        <Link
          to="/"
          className="text-2xl font-semibold tracking-wide pl-10 lg:hidden"
        >
          TBS
        </Link>
        <div className="px-10 cursor-pointer lg:hidden" onClick={toggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      <div className="lg:mx-28 pt-10">
        <div className="flex-none xl:flex xl:justify-between">
          <div
            data-aos="fade-right"
            className=" text-3xl md:text-4xl text-center lg:text-left lg:text-6xl font-black"
          >
            TIGA BINTANG <br /> SUKSES
          </div>

          <div
            data-aos="fade-up"
            className=" grid grid-cols-1 xl:grid-cols-3 mx-auto text-xs md:text-lg lg:text-xl font-light"
          >
            <div className="xl:flex   xl:pr-28 pt-5">
              <div>
                <img className="mx-auto" src={Calendar} alt="" />
              </div>
              <div className="xl:pl-7  text-center xl:text-left">
                <div>Opening Hour</div>
                <div className="mt-3">Mon-fri, 8:00-17:00</div>
              </div>
            </div>
            <div className="xl:flex   xl:pr-28 pt-2">
              <div>
                <img className="mx-auto" src={Callcenter} alt="" />
              </div>
              <div className="xl:pl-7 xl:pt-3 text-center xl:text-left">
                <div>Call Us</div>
                <div className="mt-3">081225466738</div>
              </div>
            </div>
            <div className="xl:flex pt-5">
              <div>
                <img className="mx-auto" src={Email} alt="" />
              </div>
              <div className="xl:pl-7  text-center xl:text-left">
                <div>Email Us</div>
                <div className="mt-3">info@gloriamandiriteknik.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-900 mt-10 w-full h-28 ">
          <div className="hidden lg:block  ">
            <div className="flex text-2xl gap-x-8 p-10 text-white font-medium ">
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
              <Link>
                <div className="flex">
                  <div>
                    <button
                      className=" text-2xl font-medium "
                      type="button"
                      ref={btnDropdownRef}
                      onMouseEnter={() => {
                        dropdownPopoverShow
                          ? closeDropdownPopover()
                          : openDropdownPopover();
                      }}
                      onMouseLeave={() => {
                        dropdownPopoverShow
                          ? closeDropdownPopover()
                          : openDropdownPopover();
                      }}
                    >
                      PRODUCT
                    </button>
                    <div
                      onMouseEnter={() => {
                        openDropdownPopover();
                      }}
                      onMouseLeave={() => {
                        closeDropdownPopover();
                      }}
                      ref={popoverDropdownRef}
                      className={
                        (dropdownPopoverShow ? "block " : "hidden ") +
                        "bg-white z-50 float-left py-2 px-5 list-none text-left rounded shadow-lg mt-1 min-w-48"
                      }
                    >
                      <div className="flex">
                        <div className="mt-2 mr-7">
                          <Link
                            to="/produk"
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white bg-black transition duration-500 ease-in-out hover:text-yellow-500 "
                          >
                            Semua Produk
                          </Link>
                        </div>
                        <div>
                          <div className="text-sm py-2 px-4 font-black block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500">
                            Alat Panen
                          </div>
                          <Link
                            onClick={() => {
                              window.location.href = "/produk/1";
                            }}
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500"
                          >
                            Harvesting Sickle (Egrek)
                          </Link>
                          <Link
                            onClick={() => {
                              window.location.href = "/produk/2";
                            }}
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500"
                          >
                            Chisel (Dodos)
                          </Link>
                          <Link
                            to="/produk"
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500"
                          >
                            Harvesting Axe (Kampak Buah)
                          </Link>
                          <Link
                            onClick={() => {
                              window.location.href = "/produk/3";
                            }}
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500"
                          >
                            Loading Spike (Tojok)
                          </Link>
                          <Link
                            onClick={() => {
                              window.location.href = "/produk/4";
                            }}
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500"
                          >
                            Hook (Gancu)
                          </Link>
                        </div>
                        <div className="ml-10 mr-10">
                          <div className="text-sm py-2 px-4 font-black block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500">
                            Pelengkap Panen
                          </div>
                          <Link
                            onClick={() => {
                              window.location.href = "/produk/5";
                            }}
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500"
                          >
                            Klem Egrek
                          </Link>
                          <Link
                            onClick={() => {
                              window.location.href = "/produk/6";
                            }}
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500"
                          >
                            Sarung Tangan
                          </Link>
                          <Link
                            onClick={() => {
                              window.location.href = "/produk/7";
                            }}
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500"
                          >
                            Piring Buah Sawit
                          </Link>
                          <Link
                            onClick={() => {
                              window.location.href = "/produk/8";
                            }}
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500"
                          >
                            Holder Egrek
                          </Link>
                          <Link
                            onClick={() => {
                              window.location.href = "/produk/9";
                            }}
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500"
                          >
                            Batu Asah
                          </Link>
                          <Link
                            onClick={() => {
                              window.location.href = "/produk/10";
                            }}
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500"
                          >
                            Keranjang Buah
                          </Link>
                          <Link
                            onClick={() => {
                              window.location.href = "/produk/11";
                            }}
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500"
                          >
                            Garuh
                          </Link>
                        </div>
                        <div>
                          <div className="text-sm py-2 px-4 font-black block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500">
                            Penutup Keamanan
                          </div>
                          <Link
                            onClick={() => {
                              window.location.href = "/produk/12";
                            }}
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500"
                          >
                            Sarung Egrek
                          </Link>
                          <Link
                            onClick={() => {
                              window.location.href = "/produk/13";
                            }}
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-black transition duration-500 ease-in-out hover:text-yellow-500"
                          >
                            Sarung Dodos
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pl-1 pt-1"
                    onClick={() => {
                      dropdownPopoverShow
                        ? closeDropdownPopover()
                        : openDropdownPopover();
                    }}
                  >
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
      </div>
    </>
  );
};

export default Navbar;
