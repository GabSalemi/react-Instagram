import { AddIcon, CameraIcon, HomeIcon, LikeIcon, SearchIcon } from "../../icons";
import { useState } from "react";
import "./index.css"


const TabBar = ({setSection}) => {
    const onHandleClick = (destination) => setSection(destination)


    return (
        <div className="tabBar__container">
            <div className="home--icon__div" onClick={() => {onHandleClick("home")}}>
                <HomeIcon />
            </div>
            <div className="search--icon__div" onClick={() => {onHandleClick("feed")}}>
                <SearchIcon />
            </div>
            <div className="add--icon__div" onClick={() => {onHandleClick("New Post")}}>
                <AddIcon />
            </div>
            <div className="like--icon__div" onClick={() => {onHandleClick("Likes")}}>
                <LikeIcon />
            </div>
            <div className="profile--icon__div" onClick={() => {onHandleClick("Profile")}}>
                <CameraIcon />
            </div>
        </div>
    )
}

export default TabBar  