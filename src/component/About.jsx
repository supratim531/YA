import React from 'react';
import CardSwiper from './swiper/CardSwiper';
import Testimonial from './Testimonial';

function About() {
  return (
    <div id="about" className="bg-gradient-to-t from-[#00040f] to-[#2c293d]">
      <div className="px-5 sm:px-10 py-10 flex flex-col gap-y-20 mx-auto container">
        <div className="px-2 sm:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="h-full w-full flex flex-col sm:items-center md:items-start">
            <h4 className="font-[Roboto] font-semibold uppercase text-primary">our team</h4>
            <h2 className="font-[Poppins] font-bold text-lg xs:text-3xl lg:text-4xl text-white">Certified Team Of</h2>
            <h2 className="font-[Poppins] font-bold text-lg xs:text-3xl lg:text-4xl text-white">Expert <b className="text-primary">To Assist You</b></h2>
          </div>
          <div className="h-full w-full flex justify-center">
            <div className="">
              <CardSwiper />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">About Us</div> */}
      {/* <div className=""><Testimonial /></div> */}
    </div>
  );
}

export default About;
