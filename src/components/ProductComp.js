import axios from "axios";
import React, { useState, useEffect } from "react";
import panen1 from "../assets/img/panen1.svg";
import "../assets/css/Service.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
const ProductComp = () => {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const res = await axios({
        url: "https://api.tigabintangsukses.com/v1/produk/",
        method: "get",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status == 200) {
        setData(res.data.data);
      } else {
        console.log(res.status);
      }
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <>
      {Loading && <div>loading</div>}
      {!Loading && (
        <>
          <div className="text-center w-full py-20 bg-white overflow-hidden">
            <div className="text-yellow-500 font-bold text-2xl">
              Our Product
            </div>
            <div className="font-bold text-4xl">We Provide Product</div>
            <div className="grid grid-cols-3 mx-auto container gap-y-16">
              {Data.map((x) => (
                <Link to={`/produk/${x.id}`}>
                <div className="md:h-96 mb-5 md:mb-0 w-96  mx-auto">
                  <div className="serviceMenu">
                    <img
                      src={
                        "https://api.tigabintangsukses.com/uploads/" +
                        x.gambar_produk
                      }
                      alt=""
                    />
                    <div className="textServices">{x.deskripsi_produk}</div>
                  </div>
                  <div className="flex justify-between bg-indigo-900">
                    <div className="px-2 py-4 text-lg font-bold text-yellow-500">
                      {x.nama_produk}
                    </div>
                    <div className="pt-3 text-4xl px-4 bg-yellow-500">
                      <AiOutlinePlus />
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductComp;
