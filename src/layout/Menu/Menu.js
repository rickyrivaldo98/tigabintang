import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu
      style={{ zIndex: "99" }}
      className="bg-indigo-700 text-white lg:hidden "
      open={open}
      aria-hidden={!isHidden}
      {...props}
    >
      <Link tabIndex={tabIndex} to="/">
        <div>HOME</div>
      </Link>
      <Link tabIndex={tabIndex} to="/about">
        <div>ABOUT</div>
      </Link>
      <Link tabIndex={tabIndex} to="/team">
        <div>TEAM</div>
      </Link>
      <Link tabIndex={tabIndex} to="/service">
        <div>SERVICE</div>
      </Link>
      <Link tabIndex={tabIndex} to="/produk">
        <div className="flex">
          <div>PRODUCT</div>
          <div className="pl-4">
            <FaCaretDown />
          </div>
        </div>
      </Link>
      <Link tabIndex={tabIndex} to="/contact">
        <div>CONTACT</div>
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
