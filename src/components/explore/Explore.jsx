import "./index.css";
import { useState, useEffect } from "react";
import Search from "../search/Search";

const Explore = () => {
    
    const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=50")
    .then((res) => res.json())
    .then((data) => setPhotos(data.photos))
  }, [])

    const [searchInput, setSearchInput] = useState("")
    
    let filteredPicture = photos.filter(singlePhoto => singlePhoto.description.includes(searchInput))

    const inputChange = (e) => {
        setSearchInput(e.target.value)
    }

    return (
        <>
            <div className="search__section">
                < Search photos={filteredPicture} method={inputChange}/>
            </div>
            <div className="explore__container">
               {searchInput === "" ? photos.map((singlePhoto) => {

                return (
                    <div className={"single__photo item" + singlePhoto.id}  key={singlePhoto.id}>
                        <img src={singlePhoto.url} alt={singlePhoto.description} />
                    </div>
                )

               }) : filteredPicture.map((singlePhoto) => {

                return (
                    <div className={"single__photo item" + singlePhoto.id} key={singlePhoto.id}>
                        <img src={singlePhoto.url} alt={singlePhoto.description} />
                    </div>
                )
               })}
            </div>
        </>
        ) 
}

export default Explore;
