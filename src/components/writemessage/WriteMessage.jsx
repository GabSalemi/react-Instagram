import "./index.css";
import { LikeIcon, MessangerIcon } from "../../icons";


const WriteMessage = (placeholder) => {

    return (
        <>
            <input type="text" placeholder={placeholder} />
            <LikeIcon />
            <MessangerIcon />
        </>
    )
}

export default WriteMessage;