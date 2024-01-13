import React from 'react';
import TestimonialCard from './TestimonialCard';

function Testimonial() {
  return (
    <div className="flex justify-center items-center">
      <div className="px-4">
        <div className="sm:px-10 sm:container sm:mx-auto">
          <div className="font-[Poppins] font-poppins font-semibold text-center text-2xl md:text-4xl text-[#889094]">What people are saying about us</div>
          <div className="py-8 flex flex-wrap justify-center gap-10">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
