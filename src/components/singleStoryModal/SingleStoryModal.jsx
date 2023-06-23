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
    setStart(index);
  }, [index]);

 return ( 
 <div>
    <div className="ModalStories__Close" onClick={() => closeModal()}>✖</div>
    <Swiper initialSlide={i}>
        {data && data?.map((userStories) => {
            <SwiperSlide key={userStories?.id}>
                <UserHeader data={userStories}/>
                <WriteMessage placeholder="Send message"/>
                <Swiper modules={[Pagination]} pagination={{type: "progressbar"}}>
                    {userStories?.stories?.map((singleStory) => (
                        <SwiperSlide key={singleStory.id}>
                            {story?.type === "image" ? (
                                <img src={story.src}></img>
                            ) : (
                                <video src={story.src} playsInline muted autoPlay loop></video>
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