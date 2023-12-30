import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import d from "../../assets/d.jpg";
import m from "../../assets/m.jpg";

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
      <SwiperSlide>
        <div className="group relative w-full h-full">
          <div className="font-[Roboto] invisible group-hover:visible flex absolute h-full w-full p-4 flex-col justify-end opacity-70 bg-black">
            <h1 className="text-xl font-bold text-teal-500">Mriganka Paul</h1>
            <span className="text-xs text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem ratione esse cupiditate placeat repellat.</span>
          </div>
          <img className="h-full w-full object-cover object-center" src={m} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="group relative w-full h-full">
          <div className="font-[Roboto] invisible group-hover:visible flex absolute h-full w-full p-4 flex-col justify-end opacity-70 bg-black">
            <h1 className="text-xl font-bold text-teal-500">Dipayan Banik</h1>
            <span className="text-xs text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem ratione esse cupiditate placeat repellat.</span>
          </div>
          <img className="h-full w-full object-cover object-center" src={d} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default CardSwiper;
