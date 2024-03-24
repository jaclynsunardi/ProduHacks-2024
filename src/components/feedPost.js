import '../css/homeScreen.css';
import React, { useState } from 'react';

export default function FeedPost ({ handleClick }) {
  const [isLiked, setIsLiked] = useState(false);
  
  const toggleLike = () => {
    setIsLiked(!isLiked);
  }
  
  const likeSrc = isLiked ? 'Thumbs-up-liked.png' : 'Thumbs-up.png';
  
  return (
      <div className>
        <div className="post-header">
          <img src="Group_5.png" />
          <div className="post-name">John Smith</div>
          <div className = "timeStamp">Today at 4:03 PM</div>
        </div>
        <div className="post-title">Afternoon Chest Workout</div>
        <div className="post-stats">
          <div className = "stats-header">
            <div>Time</div>
            <div>Avg HR</div>
            <div>Cal</div>
          </div>
          <div className ="stat-value">
            <div>1h 7m</div>
            <div>105 bpm</div>
            <div>338 Cal</div>
          </div>
        </div>
        <div className="post-actions">
          <div className='post-action' onClick={toggleLike}>
            <img src = {likeSrc} />
          </div>
          <div className='post-action'>
            <img src = "Chat.png"/>
          </div>
          <div className='post-action'>
            <img src = "Share_iOS.png" />
          </div>
        </div>
      </div>
  );
}

