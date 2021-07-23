import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const FaqLanding = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  return (
    <>
      <div className="py-20 bg-white">
        <div data-aos="fade-down" className="text-center pb-10">
          <div
            data-aos="fade-up"
            className="text-yellow-500 font-bold text-xl md:text-2xl"
          >
            Frequently Asked Question
          </div>
          <div data-aos="fade-up" className="font-bold text-2xl md:text-4xl">
            You May Ask
          </div>
        </div>
        <div data-aos="fade-up" className="w-full md:flex">
          <div className="w-full md:w-1/2 px-20">
            <div>
              <div
                className={
                  "flex justify-end justify-between py-5 px-4 " +
                  (expanded ? "bg-yellow-500" : "border-2")
                }
                onClick={() => setExpanded(!expanded)}
              >
                <div className="cursor-pointer">
                  Dimana kami bisa membeli produk TBS
                </div>
                <div className="py-1 md:pl-20">
                  {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
              </div>
              {expanded && (
                <div className="border-2 animate-fade-in-down">
                  <p className="pt-4 pb-10 px-4">
                    Seluruh produk TBS bisa kamu beli di e-commerce, kantor
                    pusat dan kantor distributor
                  </p>
                </div>
              )}
            </div>
            <div className="pt-5">
              <div
                className={
                  "flex justify-end justify-between py-5 px-4 " +
                  (expanded2 ? "bg-yellow-500" : "border-2")
                }
                onClick={() => setExpanded2(!expanded2)}
              >
                <div className="cursor-pointer">
                  Berapa kapasitas produksi TBS dalam waktu 1 bulan
                </div>
                <div className="py-1 md:pl-20">
                  {expanded2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
              </div>
              {expanded2 && (
                <div className="border-2 animate-fade-in-down">
                  <p className="pt-4 pb-10 px-4">
                    Kami mampu memproduksi Egrek, Kampak, Dodos dengan total
                    produksi 5.000 pcs & Gancu, Tojok dengan jumlah 1.000 pcs
                    Setiap bulannya.
                  </p>
                </div>
              )}
            </div>
          </div>
          <span class="inline-block h-40 w-1 rounded bg-yellow-500 mb-6 hidden md:block"></span>
          <span class="mt-10 mx-auto  w-1/2 h-1 rounded bg-yellow-500 mb-6 block md:hidden"></span>

          <div className="w-full md:w-1/2 px-20">
            <div
              className={
                "flex justify-end justify-between py-5 px-4 " +
                (expanded3 ? "bg-yellow-500" : "border-2")
              }
              onClick={() => setExpanded3(!expanded3)}
            >
              <div className="cursor-pointer">
                Berapa lama waktu yang dibutuhkan jika ingin melakukan order
                dalam jumlah yang besar?
              </div>
              <div className="py-1 md:pl-20">
                {expanded3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
            </div>
            {expanded3 && (
              <div className="border-2 animate-fade-in-down">
                <p className="pt-4 pb-10 px-4">
                  Produk special order membutuhkan waktu 1-2 minggu pengerjaan
                </p>
              </div>
            )}
            <div className="pt-5">
              <div
                className={
                  "flex justify-end justify-between py-5 px-4 " +
                  (expanded4 ? "bg-yellow-500" : "border-2")
                }
                onClick={() => setExpanded4(!expanded4)}
              >
                <div className="cursor-pointer">
                  Apa keunggulan produk TBS dibanding alat panen lainnya
                </div>
                <div className="py-1 md:pl-20">
                  {expanded4 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
              </div>
              {expanded4 && (
                <div className="border-2 animate-fade-in-down">
                  <p className="pt-4 pb-10 px-4">
                    TBS berpengalaman memproduksi alat panen lebih dari 20
                    tahun. Pada kurun waktu tersebut kami terus berinovasi
                    sehingga mampu memberikan kualitas produk dan garansi produk
                    akan diganti baru jika sompel, hal ini dikarenakan kami
                    sangat memperhatikan kualitas alat panen dalam proses
                    produksi, quality control yang baik, dan bahan baku baja
                    yang di custom special.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqLanding;
