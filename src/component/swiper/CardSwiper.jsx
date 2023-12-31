import React from 'react';

// import required modules for Swiper
import 'swiper/css';
import './CardSwiper.css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function CardSwiper({ teams }) {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className=""
    >
      {
        teams.map(e => {
          return (
            <SwiperSlide className="outline outline-3 outline-white">
              <div className="group relative w-full h-full">
                <div className="font-[Roboto] flex absolute h-full w-full p-4 flex-col justify-end -bottom-32 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60">
                  <h1 className="text-xl font-bold text-teal-500">{e.name}</h1>
                  <span className="text-xs text-white">{e.description}</span>
                </div>
                <img className="h-full w-full object-cover object-center" src={e.image} alt="" />
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  )
}

export default CardSwiper;
