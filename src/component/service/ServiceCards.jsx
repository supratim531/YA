import React, { useContext, useState } from 'react';
import ServiceContext from '../../context/ServiceContext';
import ServiceModal from '../modal/ServiceModal';

function ServiceCards({ services }) {
  const [title, setTitle] = useState("");
  const context = useContext(ServiceContext);

  let learnMore = title => {
    setTitle(title);
    context.showServiceModal();
  }

  return (
    <>
      <ServiceModal title={title} close={context.hideServiceModal} />
      <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="600" className="font-[Poppins] flex flex-wrap justify-center gap-10">
        {
          services.map(e => {
            return (
              <div className="px-6 py-16 w-[360px] flex flex-col items-center gap-10 rounded-[50px] duration-200 cursor-pointer hover:-translate-y-2 outline outline-1 outline-slate-400 hover:border-b-4 hover:border-secondary hover:shadow-[0px_0px_12px_4px_rgba(0,0,0,0.3)] hover:shadow-slate-400">
                <div className="">
                  <img className="w-36" src={context.serviceCardLogo} alt="" />
                </div>
                <div className="space-y-2">
                  <h1 className="capitalize text-center text-lg font-bold text-secondary">{e.title}</h1>
                  <p className="text-center text-sm text-slate-600">{e.description}</p>
                </div>
                <div onClick={() => learnMore(e.title)} className="font-bold text-center text-primary">Learn More</div>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default ServiceCards;
