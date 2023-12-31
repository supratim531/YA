import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import d from "../../assets/dipayan.jpg";
import m from "../../assets/mriganka.jpg";
import e from "../../assets/elliot.jpg";
import u from "../../assets/utsav.jpeg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './CardSwiper.css';

// import required modules
import { EffectCards } from 'swiper/modules';

function CardSwiper() {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className=""
    >
      <SwiperSlide className="outline outline-3 outline-white">
        <div className="group relative w-full h-full">
          <div className="font-[Roboto] flex absolute h-full w-full p-4 flex-col justify-end -bottom-32 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60">
            <h1 className="text-xl font-bold text-teal-500">Dipayan Banik</h1>
            <span className="text-xs text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem ratione esse cupiditate placeat repellat.</span>
          </div>
          <img className="h-full w-full object-cover object-center" src={d} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="outline outline-3 outline-white">
        <div className="group relative w-full h-full">
          <div className="font-[Roboto] flex absolute h-full w-full p-4 flex-col justify-end -bottom-32 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60">
            <h1 className="text-xl font-bold text-teal-500">Mriganka Paul</h1>
            <span className="text-xs text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem ratione esse cupiditate placeat repellat.</span>
          </div>
          <img className="h-full w-full object-cover object-center" src={m} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="outline outline-3 outline-white">
        <div className="group relative w-full h-full">
          <div className="font-[Roboto] flex absolute h-full w-full p-4 flex-col justify-end -bottom-32 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60">
            <h1 className="text-xl font-bold text-teal-500">Utsav Chatterjee</h1>
            <span className="text-xs text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem ratione esse cupiditate placeat repellat.</span>
          </div>
          <img className="h-full w-full object-cover object-center" src={u} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default CardSwiper;
