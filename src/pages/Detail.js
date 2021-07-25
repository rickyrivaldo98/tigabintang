import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { data } from "autoprefixer";
import parse from "html-react-parser";
import UsePreloader from "../components/UsePreloader";

const Detail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  let { id } = useParams();
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [loader, showLoader, hideLoader] = UsePreloader();

  useEffect(() => {
    async function getData() {
      showLoader();

      const res = await axios({
        url: `https://api.tigabintangsukses.com/v1/produk/${id}`,
        method: "get",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status == 200) {
        setData(res.data.data);
        console.log(res.data.data);
      } else {
        console.log(res.status);
      }
      hideLoader();
    }
    getData();
  }, []);

  return (
    <>
      <Navbar toggle={toggle} />
      <div className="py-20 text-4xl font-semibold text-center">
        <div>Our Product</div>
        <span class="inline-block h-1 w-40 rounded bg-black mb-2"></span>
        <div className="font-thin pt-7">
          Home / Product / {Data.nama_produk}
        </div>
      </div>
      <div className="text-center w-full py-20 px-10 bg-white overflow-hidden">
        <div className="text-yellow-500 font-bold text-2xl">Alat Panen</div>
        <div className="font-bold text-4xl">See Our Product</div>
        {Loading && <div>Loading</div>}
        {!Loading && (
          <>
            <div className="text-left grid grid-cols-1 lg:grid-cols-2  py-16">
              <div className=" w-full">
                <div className="">
                  <img
                    src={
                      "https://api.tigabintangsukses.com/uploads/" +
                      Data.gambar_produk
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="m-auto">
                <div className="text-xl md:text-4xl font-medium mb-5">
                  {Data.nama_produk}
                </div>
                <div className="text-xl md:text-3xl font-normal py-5 px-5 bg-gray-200">
                  Deskripsi Produk
                </div>
                <div className="text-xl md:text-2xl py-5 pl-5">
                  {parse(`${Data.deskripsi_produk}`)}
                </div>

                <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2">
                  {Data.link_tokopedia == null && Data.link_shoppe == null ? (
                    <div className="text-3xl font-medium text-white py-5 px-20 bg-black">
                      Maaf Stock Habis
                    </div>
                  ) : Data.link_shoppe == null &&
                    Data.link_tokopedia != null ? (
                    <a
                      className="mr-5 text-3xl font-medium text-white py-5 px-20 bg-green-700"
                      target="_blank"
                      rel="noreferrer"
                      href={`${Data.link_tokopedia}`}
                    >
                      Beli di Tokopedia
                    </a>
                  ) : Data.link_tokopedia == null &&
                    Data.link_shoppe != null ? (
                    <a
                      className="mr-5 text-3xl font-medium text-white py-5 px-20 bg-red-500"
                      target="_blank"
                      rel="noreferrer"
                      href={`${Data.link_shoppe}`}
                    >
                      Beli di Shopee
                    </a>
                  ) : (
                    <>
                      <a
                        className="mr-5 text-xl font-medium text-center text-white py-5 px-10 lg:px-20 bg-green-700"
                        target="_blank"
                        rel="noreferrer"
                        href={`${Data.link_tokopedia}`}
                      >
                        Beli di Tokopedia
                      </a>
                      <a
                        className="mr-5 text-xl text-center font-medium text-white py-5 px-10 lg:px-20 bg-red-500"
                        target="_blank"
                        rel="noreferrer"
                        href={`${Data.link_shoppe}`}
                      >
                        Beli di Shopee
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
      {loader}
    </>
  );
};

export default Detail;
