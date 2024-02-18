import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

function Intro() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      modules={[EffectFade]}
      className="home-swiper"
      loop={true}
    >
      <SwiperSlide className="slide" id="slide-1">
        <div className="container">
          <h1>Connecting Dreams With Reality</h1>
          <p>Your Canadian Story Begins Now!</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide" id="slide-2">
        <div className="container"></div>
      </SwiperSlide>
      <SwiperSlide className="slide" id="slide-3">
        <div className="container"></div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Intro;
