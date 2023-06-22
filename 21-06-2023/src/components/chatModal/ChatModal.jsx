import "./index.css"

const ChatModal = ({data}) => {
    console.log(data)

    return (
        <>
            <div className="chat__modal">
                <p>{data.id}</p>

            </div>
        </>
    )
}

export default ChatModal;