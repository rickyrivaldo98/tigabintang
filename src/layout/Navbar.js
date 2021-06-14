import { Link, Switch, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="mx-28 pt-10">
        <div className="flex justify-between">
          <div className="text-6xl font-black">
            TIGA BINTANG <br /> SUKSES
          </div>
          <div className="flex text-2xl font-light">
            <div className="pr-40">
              <div>Opening Hour</div>
              <div className="mt-3">Mon-fri, 8:00-17:00</div>
            </div>
            <div className="pr-40">
              <div>Call Us</div>
              <div className="mt-3">081225466738</div>
            </div>
            <div>
              <div>Email Us</div>
              <div className="mt-3">info@gloriamandiriteknik.com</div>
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
              <div>PRODUCT</div>
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
