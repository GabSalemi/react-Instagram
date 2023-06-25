import "./index.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";

import { Pagination } from "swiper";


import "swiper/css";
import "swiper/css/pagination";

import WriteMessage from "../writemessage";
import UserHeader from "../userheader";


const ReelSlider = ({data}) => {
    return (
        <>
          <Swiper
            direction={"vertical"}
            className="reel__swiper"
          >
            {data.map((singleReel, index) => {
              
              return <SwiperSlide>
                <UserHeader userData={singleReel} />
                <video className="reel__video" src={singleReel.reelSrc} autoPlay muted loop playsInline></video>
                <WriteMessage placeholder={"Comment!"}/>
              </SwiperSlide>

            })}
          </Swiper>
        </>
      );
}

export default ReelSlider;