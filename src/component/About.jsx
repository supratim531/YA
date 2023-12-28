import React from 'react';
import Testimonial from './Testimonial';

function About() {
  return (
    <div id="about" className="flex flex-col justify-between h-[100vh] uppercase font-bold text-4xl text-gray-800 bg-blue-200">
      <div className="">About Us</div>
      <div className=""><Testimonial /></div>
    </div>
  );
}

export default About;
