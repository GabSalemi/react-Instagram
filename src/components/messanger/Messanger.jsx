import {CameraIcon} from "../../icons";
import "./index.css";
import { useState, useEffect, useRef } from "react";
import Chatmodal from "../chatmodal";

const Messanger = () => {
    const [searchInput, setSearchInput] = useState("")
    const [chats, setChats] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [chatState, setChatState] = useState(false)

  
    const ChatName = useRef("")
    function checkRef() {
        console.log(ChatName.current.innerText)
    }
    
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

    const modalInteraction = (index) => {
        setShowModal(true)
        setChatState(index)
       
    }

    useEffect(() => {
        setChatState(chatState !== false ? chatState : false);
      }, [chatState]);

   
    //    const foundChat = chats.find(chat => chat.participants[1].username === chatName)   
      

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
                
                {searchInput === "" ? chats.map((element, index)=> {
                return(
                    <div className="user__message" key={element.id}>
                        <div className="user__img">
                            <img src={element.participants[1].avatar_url} alt={element.username} />
                        </div>
                        <div className="user__info" onClick={() => modalInteraction(index)}>
                            <h4 className='selected'>{element.participants[1].username}</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="camera__icon">
                            <CameraIcon />
                        </div>
                        {chatState !== false && (
                        <Chatmodal data={element} showModal={showModal} setShowModal={modalInteraction} index={element.id}/>
                        )}        
                    </div>
                )}
                ) : 
                filteredChats.map((element) => {
                    return (
                    <div className="user__message" key={element.id}>
                        <div className="user__img">
                            <img src={element.participants[1].avatar_url} alt={element.participants[1].username} />
                        </div>
                        <div className="user__info" onClick={() => setShowModal(true)}>
                            <h4>{element.participants[1].username}</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="camera__icon">
                            <CameraIcon />
                        </div>
                        
                        <Chatmodal data={chats} showModal={showModal} setShowModal={setShowModal}/>
                  </div>)
            })
        }
            </ul>
        </div>
    </>
    ) 

}

export default Messanger;