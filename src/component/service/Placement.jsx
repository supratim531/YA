import React from 'react';

function Placement() {
  return (
    <div className="py-10 flex flex-col gap-y-20 mx-auto container">
      <h1 className="font-[Poppins] text-center uppercase text-4xl font-bold text-secondary"><b className="text-5xl font-bold text-primary">C</b>ourses <b className="text-5xl font-bold text-primary">F</b>or <b className="text-5xl font-bold text-primary">S</b>tudents</h1>
      <div className="lg:mx-10 flex flex-wrap justify-center gap-10">
        <div className="px-4 py-10 flex gap-x-8 justify-between items-center rounded-sm cursor-pointer hover:-translate-y-4 duration-100 border-r-4 hover:border-primary hover:shadow-[0px_0px_12px_4px_rgba(0,0,0,0.3)] hover:shadow-slate-300 bg-[#f6f7f7]">
          <div className="font-[Roboto] leading-6 font-medium text-lg text-slate-600">
            <div className="">Python</div>
            <div className="">Fundamentals</div>
          </div>
          <div className="">
            <img className="w-44" src="https://www.python.org/static/community_logos/python-logo-inkscape.svg" alt="" />
          </div>
        </div>
        <div className="px-4 py-10 flex gap-x-8 justify-between items-center rounded-sm cursor-pointer hover:-translate-y-4 duration-100 border-r-4 hover:border-primary hover:shadow-[0px_0px_12px_4px_rgba(0,0,0,0.3)] hover:shadow-slate-300 bg-[#f6f7f7]">
          <div className="font-[Roboto] leading-6 font-medium text-lg text-slate-600">
            <div className="">Python</div>
            <div className="">Fundamentals</div>
          </div>
          <div className="">
            <img className="w-44" src="https://www.python.org/static/community_logos/python-logo-inkscape.svg" alt="" />
          </div>
        </div>
        <div className="px-4 py-10 flex gap-x-8 justify-between items-center rounded-sm cursor-pointer hover:-translate-y-4 duration-100 border-r-4 hover:border-primary hover:shadow-[0px_0px_12px_4px_rgba(0,0,0,0.3)] hover:shadow-slate-300 bg-[#f6f7f7]">
          <div className="font-[Roboto] leading-6 font-medium text-lg text-slate-600">
            <div className="">Python</div>
            <div className="">Fundamentals</div>
          </div>
          <div className="">
            <img className="w-44" src="https://www.python.org/static/community_logos/python-logo-inkscape.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Placement;
