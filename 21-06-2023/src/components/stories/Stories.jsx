import "./index.css";
import { useState } from "react";

import SingleStory from "../singleStory";


const Stories = ({ user, stories }) => {
    return (<div className="stories__div">
                    <ul className="stories__list">
                            <div className="logged--user__stories">
                                <SingleStory user={user[0]} />
                            </div>
                        {stories && stories.map((singleStory) => {
                            return (
                                    <div className="followed__stories" key={singleStory.id}>
                                        <SingleStory user={singleStory} />
                                    </div>
                            )
                        }
                        )}
                    </ul>
            </div>)
}

export default Stories;