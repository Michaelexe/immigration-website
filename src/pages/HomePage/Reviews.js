import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import rcicPNG from "../../assets/rcic.png";

function Reviews() {
  return (
    <section className="section home-reviews">
      <div className="container">
        <h1 className="header">
          {/* Testimonials: Hear It From <span>Our Clients</span> */}
          <b>Testimonials</b> & <b>Feedback</b>
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
                  Mr. Kawaljit Shangari (the immigration lawyer) and his team
                  helped me to start afresh, all from scratch, including the
                  classes for the IELTS and CELPIP to fetching me a job offer
                  with an LMIA.
                </p>
                <p>
                  The entire process was flawless, friendly, and speedy. The
                  professional advice was reasonable.
                </p>
                <p>
                  I have full trust and faith in them because of my personal
                  success journey with Canada PR Calling and owe my deepest
                  regards for Kalwajit Sir."
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="review-card">
                  <h3>
                    Neha Parwani, <span>Mumbai</span>
                  </h3>
                  <p>
                    "Kawaljit has been a great repertoire of valuable resources-
                    be it knowledge or connections. He has helped me pave the
                    way through PNP in an incredibly orderly manner. His years
                    of experience is worthy of being commended. "
                  </p>
                </div>
                <div className="review-card">
                  <h3>
                    Rohan, <span>Post Graduate Work Permit</span>{" "}
                  </h3>
                  <p>
                    "I got my PGWP application approval through Canada PR
                    Calling in a week. I am glad that my application was
                    processed within time and got a timely response for my file.
                    Thanks to the team for their efforts."
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <h3>
                  Vandana Thukral, <span>New Delhi</span>
                </h3>
                <p>
                  "The most challenging part our life's journey comes heads on
                  at us at the decision of immigration and associated
                  paraphernalia.
                </p>
                <p>
                  To be frank, I had numerous inquiries ranging from identifying
                  the appropriate immigration pathway for my case and managing a
                  high CRS score to successfully navigating the Express Entry
                  system. Additionally, there were challenges related to
                  learning French proficiently and excelling in it, followed by
                  securing a job.
                </p>
                <p>
                  Throughout this journey, Canada PR Calling provided invaluable
                  advice at every step, addressing my specific needs.
                </p>
                <p>
                  Although I started my immigration journey at an advanced age
                  of 37 but at this time after landing in Canada, I can validate
                  that the right guidance holds great value despite all the
                  insurmountable initial challenges!"
                </p>
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
