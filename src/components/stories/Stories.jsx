import "./index.css";
import { useState, useEffect } from "react";
import SingleStoryModal from "../singleStoryModal";
import SingleStory from "../singleStory";


const Stories = ({ user, stories }) => {

    const [storyState, setStoryState] = useState(false); // Modal Start State

    const [modalState, setModalState] = useState(false); // Modal Open


    const openModalStories = (i) => {
        setStoryState(i);
        setModalState(true);
      };

      useEffect(() => {
        setStoryState(storyState !== false ? storyState : false);
      }, [storyState]);
    
      const closeModalStories = () => {
        setModalState(false);
        setStoryState(false);
      };

    return (
        <>
            <div className="stories__div">
        
                    <ul className="stories__list">
                        {stories && stories.map((singleStory, i) => {
                            return (   <li onClick={() => openModalStories(i)} key={singleStory.id}>
                                        <SingleStory user={singleStory}  />
                                        </li>
                            )
                        }
                        )}
                    </ul>
            </div>
            <div className="modal__container">
            {storyState !== false && (
            <SingleStoryModal 
                 data={stories}
                openModal={modalState}
                closeModal={closeModalStories}
                i={storyState}
        />
      )}
            </div>
        </>
        )
}

export default Stories;