import React, { useState } from 'react';
import PlacementModal from "../modal/PlacementModal";
import js from "../../assets/js.png";
import java from "../../assets/java.png";
import python from "../../assets/python.png";

function Placement() {
  const [title, setTitle] = useState("");
  const [modules, setModules] = useState([]);
  const [courses, setCourses] = useState([
    {
      name: "Java",
      image: java,
      modules: [
        "Java Module 1",
        "Java Module 2",
        "Java Module 3",
      ]
    },
    {
      name: "JavaScript",
      image: js,
      modules: [
        "JavaScript Module 1",
        "JavaScript Module 2",
        "JavaScript Module 3",
      ]
    },
    {
      name: "Python",
      image: python,
      modules: [
        "Python Module 1",
        "Python Module 2",
        "Python Module 3",
      ]
    },
  ]);

  let showModulesOnClick = (title, modules) => {
    setTitle(title);
    setModules(modules);
    showPlacementModal();
  }

  function showPlacementModal() {
    window.document.getElementById("popup-placement-modal").classList.add("flex");
    window.document.getElementById("popup-placement-modal").classList.remove("hidden");
  }

  function hidePlacementModal() {
    window.document.getElementById("popup-placement-modal").classList.add("hidden");
    window.document.getElementById("popup-placement-modal").classList.remove("flex");
  }

  return (
    <>
      <PlacementModal title={title} close={hidePlacementModal} modules={modules} />
      <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="600" className="py-10 flex flex-col gap-y-20 mx-auto container">
        <h1 className="font-[Poppins] text-center uppercase text-2xl sm:text-4xl font-bold text-secondary"><b className="text-4xl sm:text-5xl font-bold text-primary">C</b>ourses <b className="ml-2 text-4xl sm:text-5xl font-bold text-primary">F</b>or <b className="ml-2 text-4xl sm:text-5xl font-bold text-primary">S</b>tudents</h1>
        <div className="lg:mx-10 flex flex-wrap justify-center gap-10">
          {
            courses.map(e => {
              return (
                <div onClick={() => showModulesOnClick(e.name, e.modules)} className="px-6 w-[360px] h-[130px] flex justify-between rounded-sm cursor-pointer hover:-translate-y-4 duration-100 border-r-4 border-[#f6f7f7] hover:border-primary hover:shadow-[0px_0px_12px_4px_rgba(0,0,0,0.3)] hover:shadow-slate-300 bg-[#f6f7f7]">
                  <div className="w-full flex flex-col justify-center font-[Roboto] leading-6 font-medium text-lg text-slate-600">
                    <div className="">{e.name}</div>
                    <div className="">Fundamentals</div>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <img className="w-[3.8rem]" src={e.image} alt="" />
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default Placement;
