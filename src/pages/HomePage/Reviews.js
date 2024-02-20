import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import rcicPNG from "../../assets/rcic.png";

function Reviews() {
  return (
    <section className="section home-reviews">
      <div className="container">
        <h1 className="header">
          Hear It From <span>Our Clients</span>
        </h1>
        <div className="grid">
          <Swiper
            pagination
            spaceBetween={30}
            modules={[Autoplay, Pagination]}
            className="review-swiper"
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
          >
            <SwiperSlide>
              <div className="review-card">
                <h3>
                  Neetu Singh, <span>New Delhi</span>
                </h3>
                <p>
                  "I have been trying to immigate to Canada with my family since
                  2017 but after talking to many agents in Delhi, I decided to
                  hire one of the top consultants but with them also I ended up
                  wasting my time, money and effort for 4 years.
                </p>
                <p>
                  Then, during my online research, I found an immigration firm
                  in Canada with the name Sky White North and that was the
                  turning point for me. Mr. Kawaljit Shangari (the immigration
                  lawyer) and his team helped me to start afresh, all from
                  scratch, including the classes for the IELTS and CELPIP to
                  fetching me a job offer with an LMIA.
                </p>
                <p>
                  The entire process was flawless, friendly, and speedy. The
                  professional advice was reasonable.
                </p>
                <p>
                  I have full trust and faith in them because of my personal
                  success journey with Sky White North and owe my deepest
                  regards for Kalwajit Sir."
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="review-card">
                  <h3>
                    Neha Parwami, <span>New Delhi</span>
                  </h3>
                  <p>
                    "Kawaljit has been a great repertoire of valuable resources-
                    be it knowledge or connections. He has helped me pave the
                    way through PNP in such an incredibly orderly manner. His
                    years of experience is worthy of being commended. Would
                    trust and recommend his ability to communicate and expertise
                    in immigration law always."
                  </p>
                </div>
                <div className="review-card">
                  <h3>
                    Vandana Thukral, <span>New Delhi</span>
                  </h3>
                  <p>
                    "Kawaljit has been a great repertoire of valuable resources-
                    be it knowledge or connections. He has helped me pave the
                    way through PNP in an incredibly orderly manner. His years
                    of experience is worthy of being commended"
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="achievements">
            <div>
              <h1>10+</h1>
              <p>Years of Immigration Experience</p>
            </div>
            <div>
              <h1>97%</h1>
              <p>of our clients reccomend us</p>
            </div>
            <img src={rcicPNG} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
