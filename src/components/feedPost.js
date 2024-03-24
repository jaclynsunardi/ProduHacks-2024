import '../css/homeScreen.css';

export default function FeedPost () {
  return (
      <div className>
        <div class="post-header">
          <img src="Group_5.png" />
          <div class="post-name">John Smith</div>
          <div class = "timeStamp">Today at 4:03 PM</div>
        </div>
        <div class="post-title">Afternoon Chest Workout</div>
        <div class="post-stats">
          <div class = "header">
            <p>Time</p>
            <p>Abg HR</p>
            <p>Cal</p>
          </div>
          <div class ="stat">
            <p>1h 7m</p>
            <p>105 bpm</p>
            <p>338 Cal</p>
          </div>
        </div>
        <div class="post-actions">
          Action bar
        </div>
      </div>
  );
}