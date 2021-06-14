import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const FaqLanding = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  return (
    <>
      <div className="py-20 bg-white">
        <div className="text-center pb-10">
          <div className="text-yellow-500 font-bold text-2xl">
            Frequently Asked Question
          </div>
          <div className="font-bold text-4xl">You May Ask</div>
        </div>
        <div className="w-full flex">
          <div className="w-1/2 px-20">
            <div>
              <div
                className="flex justify-end justify-between"
                onClick={() => setExpanded(!expanded)}
              >
                <div className="">Dimana kami bisa membeli produk TBS</div>
                <div className="py-1 pl-20">
                  {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
              </div>
              {expanded && (
                <p className="">
                  Seluruh produk TBS bisa kamu beli di e-commerce, kantor pusat
                  dan kantor distributor
                </p>
              )}
            </div>
            <div className="pt-5">
              <div
                className="flex justify-end justify-between"
                onClick={() => setExpanded2(!expanded2)}
              >
                <div className="">Dimana kami bisa membeli produk TBS</div>
                <div className="py-1 pl-20">
                  {expanded2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
              </div>
              {expanded2 && (
                <p className="">
                  Seluruh produk TBS bisa kamu beli di e-commerce, kantor pusat
                  dan kantor distributor
                </p>
              )}
            </div>
          </div>
          <span class="inline-block h-40 w-1 rounded bg-yellow-500 mb-6"></span>

          <div className="w-1/2 px-20">
            <div
              className="flex justify-start justify-between"
              onClick={() => setExpanded3(!expanded3)}
            >
              <div className="">Dimana kami bisa membeli produk TBS</div>
              <div className="py-1 pl-20">
                {expanded3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
            </div>
            {expanded3 && (
              <p>
                Seluruh produk TBS bisa kamu beli di e-commerce, kantor pusat
                dan kantor distributor
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqLanding;
