import panen1 from "../assets/img/panen1.svg";
import React, { useEffect, useState } from "react";

import "../assets/css/Service.css";
import { Menu } from "../layout";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
const Service = () => {
  // fungsi navbar

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Menu open={isOpen} setOpen={setIsOpen} />
      <Navbar toggle={toggle} />
      <div className="py-20 text-4xl font-semibold text-center">
        <div>Our Team</div>
        <span class="inline-block h-1 w-40 rounded bg-black mb-2"></span>
        <div className="font-thin pt-7">Home / Team</div>
        <div className="lg:flex justify-center gap-x-40 pt-40 pb-20 flex-none mx-auto">
          <div className="lg:w-96 mt-10">
            <div className="flex justify-center">
              <div className="mb-10 rounded-full bg-indigo-900 h-40 w-40 ">
                <img src="" alt="" />
              </div>
            </div>
            <div>Imanuel Belly</div>
            <div className="font-thin text-lg">Jabatan disini</div>
            <div className="font-thin pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 mb-2"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class="leading-relaxed text-lg md:text-2xl">
                Kualitas menjadi fokus utama TBS. Kami siap untuk terus
                berinovasi dan berkolaborasi memberikan alat panen terbaik bagi
                konsumen
              </p>
            </div>
          </div>
          <div className="lg:w-96 mt-10">
            <div className="flex justify-center">
              <div className="mb-10 rounded-full bg-indigo-900 h-40 w-40 ">
                <img src="" alt="" />
              </div>
            </div>
            <div>Imanuel Belly</div>
            <div className="font-thin text-lg">Jabatan disini</div>
            <div className="font-thin pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 mb-2"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class="leading-relaxed text-lg md:text-2xl">
                Kualitas menjadi fokus utama TBS. Kami siap untuk terus
                berinovasi dan berkolaborasi memberikan alat panen terbaik bagi
                konsumen
              </p>
            </div>
          </div>
          <div className="lg:w-96 mt-10">
            <div className="flex justify-center">
              <div className="mb-10 rounded-full bg-indigo-900 h-40 w-40 ">
                <img src="" alt="" />
              </div>
            </div>
            <div>Imanuel Belly</div>
            <div className="font-thin text-lg">Jabatan disini</div>
            <div className="font-thin pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 mb-2"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class="leading-relaxed text-lg md:text-2xl">
                Kualitas menjadi fokus utama TBS. Kami siap untuk terus
                berinovasi dan berkolaborasi memberikan alat panen terbaik bagi
                konsumen
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
