import "./index.css";

const SingleStory = ({ user }) => {



    return (<div className="single--story__div">
      <div className="story--user__img">
        <img src={user?.userImage} alt={user?.username} />
      </div>
      <p className="story--user__username">
        {user?.isUser ? "Your Story" : user?.username}
      </p>
    </div>)
}

export default SingleStory;