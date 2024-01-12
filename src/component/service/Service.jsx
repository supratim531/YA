import React, { useState } from 'react';
import serviceCardLogo from "../../assets/logo.png"
import Designing from './Designing';
import Development from './Development';
import Marketing from './Marketing';
import Placement from './Placement';
import ServiceContext from "../../context/ServiceContext";

function Service() {
  const [services, setServices] = useState({
    designing: false,
    development: true,
    marketing: false
  });

  function showServiceModal() {
    window.document.getElementById("popup-service-modal").classList.add("flex");
    window.document.getElementById("popup-service-modal").classList.remove("hidden");
  }

  function hideServiceModal() {
    window.document.getElementById("popup-service-modal").classList.add("hidden");
    window.document.getElementById("popup-service-modal").classList.remove("flex");
  }

  return (
    <ServiceContext.Provider value={{ serviceCardLogo, showServiceModal, hideServiceModal }}>
      <div id="service">
        <div className="pt-20 pb-10 flex flex-col gap-y-20 mx-auto container">
          <div className="lg:mx-10 flex flex-col-reverse lg:flex-row justify-between gap-y-5 lg:gap-y-4">
            <div className="font-[Poppins] w-full flex flex-col justify-center">
              <div className="space-y-1.5">
                <div className="uppercase font-medium text-primary">salesforce implementation</div>
                <div className="text-3xl lg:text-4xl font-bold text-secondary">Create A New Way To</div>
                <div className="text-3xl lg:text-4xl font-bold text-primary">Connect With Your Customers</div>
                <div className="pt-2 text-slate-600">
                  <span>Stay organised and improve. Streamline sales, marketing, customer service, and other business operations of your enterprise. Let us help enhance the bottom line of your business with Salesforce.</span>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center lg:justify-end">
              <img className="w-[28rem]" src="https://www.theblueflamelabs.com/mainsite/assets/img/about.png" alt="" />
              {/* <img className="w-[28rem]" src={serviceLogo} alt="" /> */}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-between rounded-full cursor-pointer text-[0.6rem] xs:text-xs md:text-base font-medium text-white bg-secondary">
              <div style={{ backgroundColor: services.designing ? "#b12233" : "inherit" }} onClick={() => setServices({ designing: true, development: false, marketing: false })} className="px-4 lg:px-6 py-2 rounded-l-full">Designing</div>
              <div style={{ backgroundColor: services.development ? "#b12233" : "inherit" }} onClick={() => setServices({ designing: false, development: true, marketing: false })} className="px-4 lg:px-6 py-2 border-r border-l">Development</div>
              <div style={{ backgroundColor: services.marketing ? "#b12233" : "inherit" }} onClick={() => setServices({ designing: false, development: false, marketing: true })} className="px-4 lg:px-6 py-2 rounded-r-full">Marketing</div>
            </div>
          </div>
          {
            services.designing && <Designing />
          }
          {
            services.development && <Development />
          }
          {
            services.marketing && <Marketing />
          }
        </div>
        <Placement />
      </div>
    </ServiceContext.Provider>
  );
}

export default Service;
