import "./index.css";
import { useState } from "react";
import SingleStoryModal from "../singleStoryModal";
import SingleStory from "../singleStory";


const Stories = ({ user, stories }) => {

    const [storyState, setStoryState] = useState(false); // Modal Start State

    const [modalState, setModalState] = useState(false); // Modal Open

    const openModalStories = (index) => {
        setStoryState(index);
        setModalState(true);
      };

      useEffect(() => {
        setStoryStart(storyState !== false ? storyState : false);
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
                            return (
                                        <SingleStory user={singleStory} key={singleStory.id} />
                            )
                        }
                        )}
                    </ul>
            </div>
            <div>
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