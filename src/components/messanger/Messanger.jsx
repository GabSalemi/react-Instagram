import {CameraIcon} from "../../icons";
import "./index.css";
import { useState, useEffect, useRef } from "react";
import Chatmodal from "../chatmodal";

const Messanger = () => {
    const [searchInput, setSearchInput] = useState("")
    const [chats, setChats] = useState([])
    const [modalState, setModalState] = useState(false)
   
    const chatRef = useRef(null)

    useEffect(() => {
        fetch("https://api.npoint.io/45615d0ddef177eef95b")
        .then((res) => res.json())
        .then((data) => setChats(data.messageList))
    }, []);

    const changeRef = () => {
        console.log(chatRef.current.textContent)
    }
    
    const inputChange = (e) => {
        setSearchInput(e.target.value)
    }

    let filteredChats = chats.filter(singleConversation => singleConversation.participants[1].username.includes(searchInput))

    const onChatClick = (chatName) => {
            setModalState(!modalState)
    //    const foundChat = chats.find(chat => chat.participants[1].username === chatName)   
      };

   return (
    <>
        <div>
            <h4>Random-User</h4>
        </div>
        <div>
        <input type="text" onChange={inputChange} className="search__bar" placeholder="🔎︎ Search"></input>
        </div>
        <div>
            <ul className="message__container">
                
                {searchInput === "" ? chats.map(element => {
                return(
                    <div className="user__message" key={element.id}>
                        <div className="user__img">
                            <img src={element.participants[1].avatar_url} alt={element.username} />
                        </div>
                        <div className="user__info" onClick={() => onChatClick(element.participants[1].username)}>
                            <h4 ref={chatRef}>{element.participants[1].username}</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="camera__icon">
                            <CameraIcon />
                        </div>
                        <div className={modalState ? "modal__div shown" : "modal__div hide"}>
                            <Chatmodal data={element} modalState={modalState} setModalState={setModalState} />
                        </div>

                    </div>
                )}
                ) : 
                filteredChats.map((element) => {
                    return (
                    <div className="user__message" key={element.id}>
                        <div className="user__img">
                            <img src={element.participants[1].avatar_url} alt={element.participants[1].username} />
                        </div>
                        <div className="user__info" onClick={() => onChatClick(element.participants[1].username)}>
                            <h4>{element.participants[1].username}</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="camera__icon">
                            <CameraIcon />
                        </div>
                        <div className={modalState ? "modal__div shown" : "modal__div hide"}>
                            <Chatmodal data={element} modalState={modalState} setModalState={setModalState} />
                            <div className="close__button"></div>
                        </div>
                  </div>)
            })
        }
            </ul>
        </div>
    </>
    ) 

}

export default Messanger;