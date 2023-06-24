import "./index.css";
import { useState } from "react";

const Chatmodal = ({data, modalState, setModal}) => {
   
   return(
   
    <div className={`${modalState !== false ? "shown" : "hide"} modal__chat`}>
        <div className="modal__close" onClick={setModal()}>🡠</div>
        <div className="modal__chat">
            <p>{data.id}</p>
        </div>
    </div>
   )
}

export default Chatmodal;