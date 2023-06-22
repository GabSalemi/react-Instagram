import { CameraIcon } from "../../icons";
import "./index.css";
import { useState, useEffect, useRef } from "react";

const Messanger = ({message}) => {
    const [searchInput, setSearchInput] = useState("")
    const [chats, setChats] = useState([])

    useEffect(() => {
        fetch("https://api.npoint.io/45615d0ddef177eef95b")
        .then((res) => res.json())
        .then((data) => setChats(data.messageList))
    }, []);

    
    

    const inputChange = (e) => {
        setSearchInput(e.target.value)
        
    }

    const renderFilteredChats = () => {
        let filteredChats = chats.filter(singleConversation => singleConversation.participants[1].username.includes(searchInput))
        console.log(filteredChats)
        filteredChats.map((element) => {
            return (
                <div className="user__message" key={element.id}>
                    <div className="user__img">
                        <img src={element.participants[1].avatar_url} alt={element.participants[1].username} />
                    </div>
                    <div className="user__info">
                        <h4>{element.participants[1].username}</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="camera__icon">
                        <CameraIcon />
                    </div>
              </div>
            )
        })
    }

    const onChatClick = (e) => {
        let singleChat = chats.find(chat => chat.participants[1].username) 
        let chatParticipant = singleChat.participants[1].username // relativo interlocutore
        let chatParticipantLower = chatParticipant.toLowerCase()
        console.log(chatParticipantLower)
    }
    


   return (
    <>
        <div>
            <h4>Random-User</h4>
        </div>
        <div>
        <input type="text" onChange={inputChange} className="search__bar" placeholder="🔎︎ Search"></input>
        </div>
        <div>
            <ul>
                
                {searchInput === "" ? chats.map(element => {
                return(
                    <div className="user__message" key={element.id}>
                        <div className="user__img">
                            <img src={element.userImage} alt={element.username} />
                        </div>
                        <div className="user__info">
                            <h4>{element.username}</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="camera__icon">
                            <CameraIcon />
                        </div>
                    </div>
                )}
                ) : console.log("")}
            </ul>
        </div>
    </>
    ) 

}

export default Messanger;