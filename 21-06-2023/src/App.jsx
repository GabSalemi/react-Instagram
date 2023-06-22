
import './App.css'
import { useState, useEffect } from 'react'
import Topbar from './components/topbar'
import Stories from './components/stories'
import { loggedUser } from './Data/LoggedUserData.js'
import TabBar from './components/tabbar'
import { followedUsers } from './Data/usersData.js'
import { Posts } from './Data/postList.js'
import Post from './components/post/post'
import Camera from './components/camera'
import Messanger from './components/messanger/Messanger'
import Explore from './components/explore/Explore'



   

function App() {
  const [section, setSection] = useState("home")
  const [users, setUsers] = useState(followedUsers)
  const [logUsers, setLoggedUser] = useState(loggedUser)
  const [posts, setPosts] = useState(Posts)

  useEffect(() => {
    fetch("https://api.npoint.io/90519d89d6a9f3659be6")
    .then((res) => res.json())
    .then((data) => setUsers(data))
  }, [])

  useEffect(() => {
    fetch("https://api.npoint.io/c59d0538fafba6432ffe")
    .then((res) => res.json())
    .then((data) => setPosts(data))
  }, [])

        const onSectionRender = () => {
    switch(section) {
      case "home":
        return ( <>
          <Stories user={logUsers} stories={users}/>
          <Post post={posts}/>
        </>);
      case "camera":
        return <Camera />
      case "IGTV":
        return <div>IGTV</div>
      case "messanger":
        return (<div>
          <Messanger />
        </div>)
        case "feed":
          return <Explore />
        case "New Post":
          return <div>New Post Section</div>
        case "Likes":
          return <div>Like section</div>
        case "Profile":
          return <div>Profile Section</div>
    }
  } 



  

  return (
    <>
      <Topbar setSection={setSection} />
      <TabBar setSection={setSection}/>
      {onSectionRender()}
      
    </>
    )
}


export default App
