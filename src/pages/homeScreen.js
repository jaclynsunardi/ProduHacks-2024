import FeedPost from '../components/feedPost.js';
import NavBar from "../components/navbar.js";
import '../css/homeScreen.css';


export default function HomeScreen () {
  return (
      <div className = "HomeScreen">
        <div className = "header">
          <h1>Home</h1>
        </div>
        <div class = "search-bar">
          <input type = "text" placeholder="Type here..." />
        </div>
        <FeedPost/>
        <FeedPost />
        <FeedPost />
        <NavBar />
      </div>
  )
}