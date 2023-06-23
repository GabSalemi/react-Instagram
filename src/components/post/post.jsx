import "./index.css"
import { LikeIcon } from "../../icons"
import { useState } from "react";

const Post = ({post}) => {

    const { isLike } = post;
    const [like, setLike] = useState(isLike);

    const toggleLike = () => {
        setLike((prev) => !prev);
      };

    return (
        <article className="container__post">
            {post.map(element => {
                return(
                    <article className="post__elements" key={element.id}>
                        <div className="post__header">
                            <div className="user__img">
                                <img src={element.userImage} alt={element.userName} />
                            </div>
                            <div className="user__info">
                                <h4>{element.userName}</h4>
                                <p>{element.location}</p>
                            </div>
                        </div>
                        <div className="post__contents">
                            <img src={element.media[0].src} alt={element.media[0].src} />
                            <div className="post__details">
                                <div className="like--icon__div" onClick={() => toggleLike()}>
                                    <LikeIcon fill={like && like ? "#FD1D1D" : "#262626"} key={element.id}/>
                                </div>
                                <div className="post__description">
                                    <p><span>{element.userName}</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt optio facere excepturi mollitia modi recusandae eveniet perferendis fugiat culpa commodi.</p>
                                </div>
                            </div>
                        </div>
                        
                      
                    </article>
                )
            })}
        </article>
    )
}

export default Post;