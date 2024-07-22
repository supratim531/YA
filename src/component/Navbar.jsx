import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const hamburger = useRef(null);
  const [isMenuAvailable, setIsMenuAvailable] = useState(false);

  useEffect(() => {
    hamburger.current.addEventListener("click", () => {
      setIsMenuAvailable(!isMenuAvailable);
    });
  }, [isMenuAvailable]);

  return (
    <nav className="navbar z-10 sticky top-0 px-8 py-6 bg-black">
      <div className="flex justify-between items-center">
        <div className="">
          <img className="w-32" src={logo} alt="" />
        </div>
        <div ref={hamburger} className="sm:hidden relative">
          <i className="fa-solid fa-bars text-3xl text-[#babfc2]"></i>
          {isMenuAvailable && (
            <div className="p-4 absolute flex justify-start right-[0%] rounded-xl bg-gradient-to-br from-[#d0d0d1] to-[#67666e]">
              <ul className="font-[Roboto] pr-10 flex flex-col gap-2 text-lg font-semibold text-slate-800">
                <li>
                  <a href="#" className="">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#service" className="">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#work" className="">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#about" className="">
                    About
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="hidden uppercase text-xl sm:flex space-x-6 text-[#00c6ff]">
          <a href="#" className="">
            <i className="fa-solid fa-house"></i>
          </a>
          <a href="#service" className="">
            Service
          </a>
          <a href="#work" className="">
            Work
          </a>
          <a href="#about" className="">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
