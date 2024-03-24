import * as React from "react";
import "../css/progressScreen.css";
import NavBar from "../components/navbar.js";


export default function ProgressScreen() {

    const ProgressBar = ({ value }) => (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${value}%` }} />
        </div>
      );
      
      const MonthLabels = () => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov"];
      
        return (
          <div className="month-labels">
            {months.map((month) => (
              <div key={month} className="month-label">
                {month}
              </div>
            ))}
          </div>
        );
      };
      
      const Milestone = ({ imgSrc, text }) => (
        <div className="milestone">
          <img src={imgSrc} alt={text} className="milestone-image" />
          <p className="milestone-text">{text}</p>
        </div>
      );
      
  return (
    <>
      <div className="progress-tracker">
        <div className="content">
          <nav className="navigation">
            <div className="back-link">Back</div>
            <h1 className="page-title">Progress</h1>
            <div className="new-link">New</div>
          </nav>
          <div className="chart">
          <img loading="lazy" src={`${process.env.PUBLIC_URL}/graph.png`} alt="" className="chart" />
 
              </div>
          <div className="goal-summary">
            <div className="goal-percentage">
            <img loading="lazy" src={`${process.env.PUBLIC_URL}/acheivemnt.png`} alt="" className="percentage-background" />
              
            </div>
            <div className="goal-label">goals completed</div>
          </div>
          <div className="milestones">
            <div className="milestone-images">
              <Milestone imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/127ce24163da144794b5406147363ff9ff81640788d1ff678cf4f57100afb41f?apiKey=d537083c60ba4eb0b4f182d256617b45&" text="🎉 Wow! You've just squatted a whopping 225lb last month, setting a new personal record! Ready to brag? Share your achievement with friends!" />
              <Milestone imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9b6129f7335bfea0e40b3264793b7a01ad2c5e3c563864f1acefc1ac8adf6d34?apiKey=d537083c60ba4eb0b4f182d256617b45&" text="Hey there, superstar! 🌟 You've just crushed a 300lb deadlift. We're so proud of you! Why not share this awesome moment with your friends?" />
            </div>
          </div>
        </div>
        <NavBar />
      </div>

    </>
  );
}
