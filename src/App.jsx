
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
import ReelSlider from './components/reelSlider'


   

function App() {
  const [section, setSection] = useState("home")
  const [users, setUsers] = useState([])
  const [logUsers, setLoggedUser] = useState(loggedUser)
  const [posts, setPosts] = useState(Posts)
  const [reels, setReels] = useState([])



  useEffect(() => {
    fetch("https://api.npoint.io/fb71fe7b4dc064c4e326")
    .then((res) => res.json())
    .then((data) => setUsers(data))
  }, [])

  useEffect(() => {
    fetch("https://api.npoint.io/c59d0538fafba6432ffe")
    .then((res) => res.json())
    .then((data) => setPosts(data))
  }, [])

  useEffect(() => {
    fetch("https://api.npoint.io/2a77231d88a8a950feed")
    .then((res) => res.json())
    .then((data) => setReels(data))
  }, [])



        const onSectionRender = () => {
    switch(section) {
      case "home":
        return ( <>
          <Stories stories={users}/>
          <Post post={posts}/>
        </>);
      case "camera":
        return <Camera />
      case "IGTV":
        return <div>IGTV</div>
      case "messanger":
        return <Messanger />
        case "feed":
          return <Explore />
        case "New Post":
          return <div>New Post Section</div>
        case "Likes":
          return <ReelSlider data={reels} />
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
