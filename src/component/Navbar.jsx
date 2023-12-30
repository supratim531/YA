import React from 'react';
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <nav className="navbar z-10 sticky top-0 px-8 py-6 bg-[#0c1d27]">
      <div className="flex justify-between items-center">
        <div className="">
          <img className="w-32" src={logo} alt="" />
        </div>
        <div className="uppercase text-xl flex space-x-6 text-[#00c6ff]">
          <a href="#" className="">
            <i className="fa-solid fa-house"></i>
          </a>
          <a href="#service" className="">Service</a>
          <a href="#work" className="">Work</a>
          <a href="#about" className="">About</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
