import "./index.css";
import React from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import WriteMessage from "../writemessage";
import UserHeader from "../userheader";

const SingleStoryModal = ({data, openModal, closeModal, i}) => {

    const [start, setStart] = useState(false);
    useEffect(() => {
    setStart(i);
  }, [i]);

  console.log(data)
 return ( 
 <div className={`${openModal ? "open" : ""} modal__stories`}>
    <div className="ModalStories__Close" onClick={() => closeModal()}>✖</div>
    <Swiper initialSlide={i} spaceBetween={50}>
        {data && data?.map((userStories) => {
            
            <SwiperSlide key={userStories?.id} className={userStories.id}>
                
                <Swiper modules={[Pagination]} pagination={{type: "progressbar"}}>
                    {userStories?.stories?.map((singleStory) => (
                        <SwiperSlide key={singleStory?.id}>
                            {singleStory?.type === "image" ? (
                                <img src="https://picsum.photos/200/300"></img>
                            ) : (
                                <video src={singleStory?.src} playsInline muted autoPlay loop></video>
                            )}
                        </SwiperSlide>
                    ))}

                </Swiper>
            </SwiperSlide>
        })}
    </Swiper>
</div>
    
)}

export default SingleStoryModal;