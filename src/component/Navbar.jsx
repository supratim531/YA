import React from 'react';

function Navbar() {
  return (
    <nav className="navbar z-10 sticky top-0 py-4 flex justify-center items-center bg-green-300">
      <div className="uppercase text-xl flex space-x-6">
        <a href="#" className="">
          <i className="fa-solid fa-house"></i>
        </a>
        <a href="#service" className="">Service</a>
        <a href="#work" className="">Work</a>
        <a href="#about" className="">About</a>
      </div>
    </nav>
  );
}

export default Navbar;
