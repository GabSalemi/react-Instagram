import "./index.css";
import { useState, useEffect } from "react";

import WriteMessage from "../writemessage";
import UserHeader from "../userheader";

const Chatmodal = ({data, showModal, setShowModal, index}) => {
    console.log(data)
    const [chatState, setChatState] = useState(false);

    useEffect(() => {
        setChatState(index);
        console.log(index)
      }, [index]);
   
   return(
        <div className={`${showModal === false ? "hide" : "shown"} modal__chat`}>
                <div className="modal__close" onClick={() => setShowModal(false)}>🡠</div>
                <div className="user__header">
                  <UserHeader userData={data.participants[1]}/>
                </div>
                <div className="chat__content">
                  {data.messages.map(singleMessage => {
                    return <div className={singleMessage.sender === "John" ? "right chat" : "left chat"}>{singleMessage.content}</div>
                  })}
                </div>
                <WriteMessage placeholder={"Write a message"}/>
        </div>
   )
}

export default Chatmodal;