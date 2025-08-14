import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { HiOutlineBars2 } from "react-icons/hi2";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const toggleMenu = () => {
    setIsMenu((prev) => !prev);
  };

  const closeMenu = () => setIsMenu(false);
  useEffect(() => {
    if (isMenu) {
      gsap.from(".nav-links li", {
        x: 100,
        opacity: 0,
        stagger: 0.06,
      });
    }
  }, [isMenu]);
  return (
    <nav className="flex items-center z-50 justify-between px-4 lg:px-0 fixed top-10 w-full  container ">
      <img
        src="/images/logo.png"
        alt="logo"
        className="w-10 h-10 object-cover rounded-full"
      />

      <button onClick={toggleMenu} className="text-4xl relative cursor-pointer">
        {isMenu ? <FaXmark /> : <HiOutlineBars2 />}
      </button>
      {isMenu && (
        <ul
          key={isMenu}
          className="flex backdrop-blur-3xl p-4 border border-[#484848] rounded-2xl fixed right-5 nav-links top-24 text-xl  flex-col gap-6"
        >
          <li>
            <a href="#" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#features" onClick={closeMenu}>
              Features
            </a>
          </li>
          <li>
            <a href="#modes" onClick={closeMenu}>
              Modes
            </a>
          </li>
          <li>
            <a href="#zlatan" onClick={closeMenu}>
              Outro
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
