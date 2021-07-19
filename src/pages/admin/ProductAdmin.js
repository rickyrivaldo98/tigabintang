import axios from "axios";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState("");

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
        setEmpty(true);
      }
      setLoading(false);
    }
    getData();
  }, []);

  useEffect(() => {
    setFilterData(
      data.filter((produk) =>
        produk.nama_produk.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  let i = 1;

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className="relative flex w-1/2 flex-wrap items-stretch mb-3 text-gray-500">
            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
              <i className="fas fa-search" />
            </span>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search By Nama Produk"
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
            />
          </div>

          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
            }
          >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className={"font-semibold text-lg "}>Produk</h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                      No
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                      Produk Name
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {empty ? (
                    <div className="w-full justify-center items-center flex flex-col p-6">
                      Data Kosong
                    </div>
                  ) : (
                    <>
                      {loading && (
                        <div>
                          {/* <Loader
                        className="flex items-center justify-center mx-auto text-center mt-10 mb-10"
                        type="Oval"
                        color="#00BFFF"
                        height={80}
                        width={80}
                      /> */}
                          Loading
                        </div>
                      )}
                      {!loading &&
                        filterData.map((x) => (
                          <tr>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-bold">
                              {i++}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-bold">
                              {x.nama_produk}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                              <div className="flex">
                                {/* <Link
                              to={`/admin/adminworksdetail/${x.id}`}
                            >
                              <button
                                className="bg-blue-500 text-white active:bg-blue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                              >
                                Details
                              </button>
                            </Link> */}
                                <Link to={`/admin/editproduk/${x.id}`}>
                                  <button
                                    className="bg-yellow-500 text-white active:bg-blue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                  >
                                    Edit
                                  </button>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                      {filterData.length === 0 && (
                        <>
                          <div className="flex justify-center items-center text-center my-8">
                            <span>Nama Produk tidak ditemukan</span>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAdmin;
