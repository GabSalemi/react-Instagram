import "./index.css"
import Post from "../post/post"

const Posts = ({user, post}) => {

    
    return (
        
        <div>
            <Post user={user} post={post}/>
        </div>
    )
}

export default Posts