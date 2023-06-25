import "./index.css";
import { useState, useEffect } from "react";

const Chatmodal = ({data, showModal, setShowModal, index}) => {

    const [chatState, setChatState] = useState(false);

    useEffect(() => {
        setChatState(index);
        console.log(index)
      }, [index]);
   
   return(
        <div className={`${showModal === false ? "hide" : "shown"} modal__chat`}>
                <div className="modal__close" onClick={() => setShowModal(false)}>🡠</div>
                <div className="modal__info">{data.username}</div>
                <div className="modal__chat">{data.id}</div>
        </div>
   )
}

export default Chatmodal;