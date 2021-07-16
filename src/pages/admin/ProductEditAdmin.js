import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormData from "form-data";
import { useAlert } from "react-alert";
import { EditorState, ContentState, convertFromHTML } from "draft-js";
import { convertToHTML } from "draft-convert";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ProductEditAdmin = () => {
  const alert = useAlert();
  let { id } = useParams();

  let history = useHistory();
  const [loading, setLoading] = useState();

  const [data, setData] = useState([]);

  const [namaProduk, setnamaProduk] = useState("");
  const [gambarProduk, setgambarproduk] = useState("");
  const [linkTokopedia, setlinkTokopedia] = useState("");
  const [linkShoppe, setlinkShoppe] = useState("");
  const [kategori, setKategori] = useState("");

  const [Content, setContent] = useState(EditorState.createEmpty());
  const [convertedContent, setConvertedContent] = useState(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const res = await axios({
        url: `https://api.tigabintangsukses.com/v1/produk/${id}`,
        method: "get",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status == 200) {
        // console.log(res.data.data.deskripsi_produk);
        setData(res.data.data);
        setnamaProduk(res.data.data.nama_produk);
        setgambarproduk(res.data.data.gambar_produk);
        setlinkTokopedia(res.data.data.linkTokopedia);
        setlinkShoppe(res.data.data.linkShoppe);
        setKategori(res.data.data.kategori);
        setContent(
          EditorState.createWithContent(
            ContentState.createFromBlockArray(
              convertFromHTML(res.data.data.deskripsi_produk)
            )
          )
        );
      } else {
        console.log(res.status);
      }
      setLoading(false);
    }
    getData();
  }, []);

  const handlenamaProduk = (e) => setnamaProduk(e.target.value);
  const handlegambarProduk = (e) => setgambarproduk(e.target.files[0]);
  const handlelinkTokopedia = (e) => setlinkTokopedia(e.target.value);
  const handlelinkShoppe = (e) => setlinkShoppe(e.target.value);
  const handleKategori = (e) => setKategori(e.target.value);

  const handleContent = (e) => {
    setContent(e);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(Content.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  let editBerita = (e) => {
    e.preventDefault();
    let produk = new FormData();
    produk.set("nama_produk", namaProduk);
    if (Content === "") {
      produk.set("deskripsi_produk", data.deskripsi_produk);
    } else if (convertedContent == null) {
      produk.set(
        "deskripsi_produk",
        convertToHTML(Content.getCurrentContent())
      );
    } else {
      produk.set("deskripsi_produk", convertedContent);
    }
    if (gambarProduk === "") {
      produk.set("gambar_produk", data.gambar_produk);
    } else {
      produk.set("gambar_produk", gambarProduk);
    }
    produk.set("link_tokopedia", linkTokopedia);
    produk.set("link_shoppe", linkShoppe);
    produk.set("kategori", kategori);

    for (var pair of produk.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    const config = {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "content-type": `multipart/form-data;boundary=${produk._boundary}`,
      },
    };
    axios
      .put(`https://api.tigabintangsukses.com/v1/produk/${id}`, produk, config)
      .then((res) => {
        alert.show("Produk Succesfully Added!");
        setTimeout(() => {
          history.push("/admin/produk");
        }, 3000);
      }, [])
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {loading ? (
        <>
          <div>loading</div>
        </>
      ) : (
        <>
          <div className="flex flex-wrap mt-4">
            <div className="w-10/12 mb-12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-start">
                    <button
                      className="bg-blue-500 text-white active:bg-lightBlue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => window.history.back()}
                    >
                      Back
                    </button>
                    <h6 className="m-2 text-blueGray-700 text-xl font-bold">
                      Edit Produk
                    </h6>
                  </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form onSubmit={(e) => editBerita(e)}>
                    <div className="flex flex-col flex-wrap">
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block   text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Produk
                          </label>
                          <input
                            type="text"
                            name="title"
                            placeholder="Insert Nama Produk"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={namaProduk}
                            onChange={(e) => {
                              handlenamaProduk(e);
                            }}
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block   text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Kategori
                          </label>
                          <input
                            type="text"
                            name="title"
                            placeholder="Insert Kategori"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={kategori}
                            onChange={(e) => {
                              handleKategori(e);
                            }}
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block   text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Link Tokopedia
                          </label>
                          <input
                            type="text"
                            name="title"
                            placeholder="Insert Link Tokopedia"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={linkTokopedia}
                            onChange={(e) => {
                              handlelinkTokopedia(e);
                            }}
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block   text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Link Shoppe
                          </label>
                          <input
                            type="text"
                            name="title"
                            placeholder="Insert Link Shoppe"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={linkShoppe}
                            onChange={(e) => {
                              handlelinkShoppe(e);
                            }}
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Deskripsi Produk
                          </label>
                          <Editor
                            editorState={Content}
                            // onChange={setContent}
                            // initialContentState={Content}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            // onContentStateChange={setContent}
                            onEditorStateChange={handleContent}
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block  text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Gambar Produk
                          </label>
                          <img
                            src={`https://api.tigabintangsukses.com/uploads/${data.gambar_produk}`}
                            alt=""
                          />
                          <input
                            onChange={handlegambarProduk}
                            type="file"
                            placeholder="input file image"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                        <button
                          className="bg-green-500 text-white active:bg-lightBlue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductEditAdmin;
