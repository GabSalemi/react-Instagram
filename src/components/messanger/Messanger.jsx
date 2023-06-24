import {CameraIcon} from "../../icons";
import "./index.css";
import { useState, useEffect, useRef } from "react";
import Chatmodal from "../chatmodal";

const Messanger = () => {
    const [searchInput, setSearchInput] = useState("")
    const [chats, setChats] = useState([])
    const [modalState, setModalState] = useState(false)

    const ChatName = useRef("")

    
    useEffect(() => {
        fetch("https://api.npoint.io/45615d0ddef177eef95b")
        .then((res) => res.json())
        .then((data) => setChats(data.messageList))
    }, []);

    const inputChange = (e) => {
        setSearchInput(e.target.value)
    }

    let filteredChats = chats.filter(singleConversation => singleConversation.participants[1].username.includes(searchInput))

    // Toggle chatModal

    const onChatClick = () => {
            setModalState(true)
            ChatName.current = ChatName.current.textContent
        console.log(ChatName.current.textContent)
    //    const foundChat = chats.find(chat => chat.participants[1].username === chatName)   
      };

      const closeModalChat = () => {
        setModalState(false);
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
                    <div className="user__message" key={element.id} onClick={() => onChatClick()}>
                        <div className="user__img">
                            <img src={element.participants[1].avatar_url} alt={element.username} />
                        </div>
                        <div className="user__info">
                            <h4 ref={ChatName} >{element.participants[1].username}</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="camera__icon">
                            <CameraIcon />
                        </div>
                       
                        <Chatmodal data={element} modalState={modalState} setModal={closeModalChat} />
                    </div>
                )}
                ) : 
                filteredChats.map((element) => {
                    return (
                    <div className="user__message" key={element.id}>
                        <div className="user__img">
                            <img src={element.participants[1].avatar_url} alt={element.participants[1].username} />
                        </div>
                        <div className="user__info" >
                            <h4>{element.participants[1].username}</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="camera__icon">
                            <CameraIcon />
                        </div>
                        
                        <Chatmodal data={element} modalState={modalState} setModal={closeModalChat} />
                  </div>)
            })
        }
            </ul>
        </div>
    </>
    ) 

}

export default Messanger;