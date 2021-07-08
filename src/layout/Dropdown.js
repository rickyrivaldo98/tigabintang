import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <>
      <div
        className={
          isOpen
            ? " grid grid-rows-5 text-center items-center bg-transparent text-gray-500 pt-5"
            : "hidden"
        }
        onClick={toggle}
      >
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
          <div className="flex">
            <div>PRODUCT</div>
            <div className="pl-4">
              <FaCaretDown />
            </div>
          </div>
        </Link>
        <Link to="/contact">
          <div>CONTACT</div>
        </Link>
      </div>
    </>
  );
};

export default Dropdown;
