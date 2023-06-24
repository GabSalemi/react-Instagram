
import React from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";


import "swiper/css";
import "swiper/css/pagination";

import "./index.css";


import WriteMessage from "../writemessage";
import UserHeader from "../userheader";

const SingleStoryModal = ({data, openModal, closeModal, i}) => {

    const [modalState, setModalState] = useState(false);

    useEffect(() => {
    setModalState(i);
  }, [i]);

 return ( 
 <div className={`${openModal ? "open" : ""} modal__stories`}>
    <div className="modal__close" onClick={() => closeModal()}>✖</div>
    
    <Swiper initialSlide={i} spaceBetween={0}>
        {data && data?.map((userStories) => 
        
            
            <SwiperSlide key={userStories?.id}>
                <UserHeader userData={userStories}/>
                <WriteMessage placeholder={"Send message"}/>
                <Swiper className={userStories?.id} modules={[Pagination]} pagination={{type: "progressbar"}}>
                    {userStories?.stories?.map((singleStory) => (
                        <SwiperSlide key={singleStory?.id}>
                            {singleStory?.type === "image" ? (
                                <img src={singleStory?.src}></img>
                            ) : (
                                <video src={singleStory?.src} playsInline muted autoPlay loop></video>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper> 
            </SwiperSlide>
        
        )}
    </Swiper> 
</div>
    
)}

export default SingleStoryModal;