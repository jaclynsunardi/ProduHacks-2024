import * as React from "react";
import "../css/activity.css";

export default function ActivityScreen() {

    const exerciseData = [
        {
          name: "Bench Press",
          date: "23-03-24",
          time: "0h 20m",
          avgHR: "90 bpm",
          calories: "100 Cal",
        },
        {
          name: "Dead lift",
          date: "23-03-24", 
          time: "0h 15m",
          avgHR: "97 bpm",
          calories: "90 Cal",
        },
        {
          name: "Bicep Curls",
          date: "23-03-24",
          time: "0h 21m", 
          avgHR: "92 bpm",
          calories: "103 Cal",
        },
      ];
      
      const ExerciseCard = ({ exercise }) => (
        <div className="exercise-card">
          <div className="exercise-name">{exercise.name}</div>
          <div className="exercise-details">
            <div className="exercise-date">
              <div className="date-label">Date</div>
              <div className="date-value">{exercise.date}</div>
            </div>
            <div className="exercise-time">
              <div className="time-label">Time</div>
              <div className="time-value">{exercise.time}</div>
            </div>
            <div className="exercise-hr">
              <div className="hr-cal-labels">
                <div className="hr-label">Avg HR</div>
                <div className="cal-label">Cal</div>
              </div>
              <div className="hr-cal-values">
                <div className="hr-value">{exercise.avgHR}</div>
                <div className="cal-value">{exercise.calories}</div>
              </div>
            </div>
          </div>
        </div>
      );
      
      
  return (
    <>
      <div className="container">
        <div className="content">
          <header className="header">
            <div className="back-link">Back</div>
            <h1 className="page-title">Activities</h1>
          </header>
          <div className="ongoing-activity">Ongoing activity : Leg Workout</div>
          <div className="stats">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b8c3063b3fa887d1eb6c27911c8bc71133eceb39a2843c27c5fc8beec251b64?apiKey=d537083c60ba4eb0b4f182d256617b45&" alt="" className="stats-image" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc1bcb8cb6096e1d4e90986431e98a8611da3bd1e30451083846336a92a57909?apiKey=d537083c60ba4eb0b4f182d256617b45&" alt="" className="stats-image" />
            <img loading="lazy" src={`${process.env.PUBLIC_URL}/fire.png`} alt="" className="stats-image" />

          </div>
          <h2 className="past-exercises-title">Past exercises</h2>
          {exerciseData.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}

        </div>
      </div>
    </>
  );
}