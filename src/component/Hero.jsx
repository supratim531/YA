import React from 'react';
import logo from "../assets/logo.png";

function Hero() {
  return (
    <div id="hero" className="bg-[#0c1d27]">
      <div className="py-20 flex flex-col gap-y-20 mx-auto container">
        <div className="lg:mx-10 flex flex-col-reverse lg:flex-row justify-between gap-y-5 lg:gap-y-4">
          <div className="font-[Poppins] w-full flex flex-col justify-center">
            <div className="space-y-1.5">
              <div className="uppercase font-medium text-white">salesforce implementation</div>
              <div className="text-3xl lg:text-4xl font-bold text-[#00c6ff]">Create A New Way To</div>
              <div className="text-3xl lg:text-4xl font-bold text-primary">Connect With Your Customers</div>
              <div className="pt-2 text-slate-400">
                <span>Stay organised and improve. Streamline sales, marketing, customer service, and other business operations of your enterprise. Let us help enhance the bottom line of your business with Salesforce.</span>
              </div>
            </div>
          </div>
          <div className="relative w-full flex justify-center">
            <img className="w-[30rem]" src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
