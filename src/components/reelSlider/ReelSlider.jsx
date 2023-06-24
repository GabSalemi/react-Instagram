import "./index.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";

import { Pagination } from "swiper";


import "swiper/css";
import "swiper/css/pagination";


const ReelSlider = ({data}) => {
    return (
        <>
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
                <video src={data[0].reelSrc}></video>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </>
      );
}

export default ReelSlider;