import { CameraIcon } from "../../icons";
import "./index.css";

import { useState } from "react";

const Messanger = ({message}) => {
    const [searchInput, setSearchInput] = useState("")
    
    let filteredMessages = message.filter(singleMessage => singleMessage.username.includes(searchInput))

    const inputChange = (e) => {
        setSearchInput(e.target.value)}

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
                
                {searchInput === "" ? message.map(element => {
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
                ) : filteredMessages.map((element) => {
                    return (
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
                    )
                })}
            </ul>
        </div>
    </>
    )

}

export default Messanger;