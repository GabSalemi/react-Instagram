import "./index.css";
import { useState } from "react";

import SingleStory from "../singleStory";


const Stories = ({ user, stories }) => {
    return (<div className="stories__div">
                    <ul className="stories__list">
                        {stories && stories.map((singleStory) => {
                            return (
                                        <SingleStory user={singleStory} />
                            )
                        }
                        )}
                    </ul>
            </div>)
}

export default Stories;