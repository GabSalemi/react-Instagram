import "./index.css";
import { useState } from "react";

const Chatmodal = ({data, value, setModalState}) => {

   return(
    <div className="modal__chat">
        <div className="close__button" onClick={setModalState}>{data.id}</div>
    </div>
   )
}

export default Chatmodal;