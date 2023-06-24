import "./index.css";
import { LikeIcon, MessangerIcon } from "../../icons";

const UserHeader = ({userData}) => {
    console.log(userData)
    return (
        <div className="user__header">
            <div className="user__avatar">
                <img src={userData.userImage} alt={userData.username} />
            </div>
            <div className="username__div">
                <p>{userData.username}</p>
            </div>
        </div>
    )

}

export default UserHeader;