import React from "react";
import { HiOutlineBars2 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="flex items-center z-50 justify-between px-4 lg:px-0 fixed top-10 w-full  container ">
      <img
        src="./images/logo.png"
        alt="logo"
        className="w-10 h-10 object-cover rounded-full"
      />
      <p className="text-4xl">
        <HiOutlineBars2 />
      </p>
    </nav>
  );
};

export default Navbar;
