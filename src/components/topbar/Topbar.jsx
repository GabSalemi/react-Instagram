import { CameraIcon, IGTVLogo, LikeIcon, MainLogo, MessangerIcon } from "../../icons";
import "./index.css";


const Topbar = ({setSection}) => {
    const onHandleClick = (section) => setSection(section)


    return (
        <div className="topbar__container">
            <div className="camera--icon__div">
                <CameraIcon onClick={() => onHandleClick("camera")}/>
            </div>
            <div className="main--logo__div">
                <MainLogo onClick={() => onHandleClick("home")}/>
            </div>
            <div className="other--icons__div">
                <div className="IGTV--logo__container" onClick={() => onHandleClick("Interactions")}>
                    <LikeIcon />
                </div>
                <div className="messanger--logo__container" onClick={() => onHandleClick("messanger")}>
                    <MessangerIcon />
                </div>
            </div>
        </div>
    )
}

export default Topbar  