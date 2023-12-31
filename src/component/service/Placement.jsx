import React, { useState } from 'react';
import js from "../../assets/js.png";
import java from "../../assets/java.png";
import python from "../../assets/python.png";

function Placement() {
  const [courses, setCourses] = useState([
    {
      name: "Java",
      image: java
    },
    {
      name: "JavaScript",
      image: js
    },
    {
      name: "Python",
      image: python
    },
  ]);

  return (
    <div className="py-10 flex flex-col gap-y-20 mx-auto container">
      <h1 className="font-[Poppins] text-center uppercase text-2xl sm:text-4xl font-bold text-secondary"><b className="text-4xl sm:text-5xl font-bold text-primary">C</b>ourses <b className="text-4xl sm:text-5xl font-bold text-primary">F</b>or <b className="text-4xl sm:text-5xl font-bold text-primary">S</b>tudents</h1>
      <div className="lg:mx-10 flex flex-wrap justify-center gap-10">
        {
          courses.map(e => {
            return (
              <div className="px-6 py-2 w-[350px] flex justify-between rounded-sm cursor-pointer hover:-translate-y-4 duration-100 border-r-4 border-[#f6f7f7] hover:border-primary hover:shadow-[0px_0px_12px_4px_rgba(0,0,0,0.3)] hover:shadow-slate-300 bg-[#f6f7f7]">
                <div className="w-full flex flex-col justify-center font-[Roboto] leading-6 font-medium text-lg text-slate-600">
                  <div className="">{e.name}</div>
                  <div className="">Fundamentals</div>
                </div>
                <div className="w-full flex justify-center items-center">
                  <img className="w-16" src={e.image} alt="" />
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Placement;
