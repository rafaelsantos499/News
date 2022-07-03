import React from "react";
import styles from "./SliderFooter.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function App({
  slide1,
  title1,
  link1,
  //----
  slide2,
  title2,
  link2,
  //-----
  slide3,
  title3,
  link3,
  //-----
  slide4,
  title4,
  link4,
}) {
  if (slide1)
    return (
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.container}>
              <img src={slide1} alt={title1} />
              <a href={link1} target="_blank" rel="noreferrer">
                <p>{title1}</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container}>
              <img src={slide2} alt={title2} />
              <a href={link2} target="_blank" rel="noreferrer">
                <p>{title2}</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container}>
              <img src={slide3} alt={title3} />
              <a href={link3} target="_blank" rel="noreferrer">
                <p>{title3}</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.container}>
              <img src={slide4} alt={title4} />
              <a href={link4} target="_blank" rel="noreferrer">
                <p>{title4}</p>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
}
