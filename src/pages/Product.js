import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import ProductComp from "../components/ProductComp";
import Sidebar from "../layout/Sidebar";

const Product = () => {
  // fungsi navbar

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="lg:hidden">
        <Sidebar />
      </div>
      <Navbar toggle={toggle} />
      <div className="py-20 text-4xl font-semibold text-center">
        <div data-aos="fade-up">Our Product</div>
        <span class="inline-block h-1 w-40 rounded bg-black mb-2"></span>
        <div data-aos="fade-left" className="font-thin pt-7">
          Home / Product
        </div>
      </div>
      <ProductComp />
      <Footer />
    </>
  );
};

export default Product;
