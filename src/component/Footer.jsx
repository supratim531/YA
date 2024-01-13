import React from 'react';
import footerLogo from "../assets/footer-logo.png";

function Footer() {
  return (
    <footer className="text-white bg-[#111725]">
      <div className="p-4 sm:p-0 sm:px-10 sm:py-8 mx-auto container">
        <div className="mb-8">
          <img className="w-40" src={footerLogo} alt="" />
        </div>
        <hr />
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-[Roboto] text-gray-400">
            <div className="text-center sm:text-start">Copyrihgt &copy; 2024 YA. All Rights Reserved.</div>
          </div>
          <div className="flex gap-4 items-center">
            <div className=""><i className="fa-brands fa-instagram"></i></div>
            <div className=""><i className="fa-brands fa-facebook-f"></i></div>
            <div className=""><i className="fa-brands fa-twitter"></i></div>
            <div className=""><i className="fa-brands fa-linkedin-in"></i></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
