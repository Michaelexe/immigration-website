import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Link } from "react-router-dom";
import { PopupButton } from "react-calendly";

function Intro() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      modules={[EffectFade, Autoplay]}
      className="home-swiper"
      loop={true}
      autoplay={{
        delay: 4000,
      }}
      allowTouchMove={false}
    >
      <SwiperSlide className="slide" id="slide-1">
        <div className="container">
          <h1>Connecting Dreams With Reality</h1>
          <p>Your Canadian Story Begins Now!</p>
          <div className="buttons">
            <PopupButton
              url="https://calendly.com/shangjolly"
              rootElement={document.getElementById("root")}
              text="Book Now"
              className="button"
            />
            <Link className="button" to="/services/express-entry/about">
              Read More
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide" id="slide-2">
        <div className="container">
          <h1>Unlock Knowledge, Ignite Potential</h1>
          <p>Your Academic Adventure Awaits in Canada.</p>
          <div className="buttons">
            <PopupButton
              url="https://calendly.com/shangjolly"
              rootElement={document.getElementById("root")}
              text="Book Now"
              className="button"
            />
            <Link className="button" to="/services/study/about">
              Read More
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide" id="slide-3">
        <div className="container">
          <h1>Empowering Careers, Enriching Lives</h1>
          <p>Work in Canada, Thrive in Canada</p>
          <div className="buttons">
            <PopupButton
              url="https://calendly.com/shangjolly"
              rootElement={document.getElementById("root")}
              text="Book Now"
              className="button"
            />
            <Link className="button" to="/services/work/why-work-in-canada">
              Read More
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Intro;
