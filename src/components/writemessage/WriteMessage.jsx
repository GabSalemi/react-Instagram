import "./index.css";
import { LikeIcon, MessangerIcon } from "../../icons";


const WriteMessage = ({placeholder}) => {

    return (
        <div className="interaction__div">
            <input type="text" placeholder={placeholder} />
            <LikeIcon fill={"#ffffff"} />
            <MessangerIcon fill={"#ffffff"} />
        </div>
    )
}

export default WriteMessage;