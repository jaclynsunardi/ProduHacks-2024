import * as React from "react";
import '../css/addActivity.css';
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar.js";

export default function AddActivityScreen () {
  let navigate = useNavigate();
  const toHome = () => {
    let path = `/home`;
    navigate(path);
  }
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <button onClick={toHome} className='div-4'>Back</button>
            <div className="div-5">Add Activity</div>
            <button onClick={toHome} className='div-6'>Publish</button>
          </div>
          <input type='text' placeholder='Evening Workout' className="div-7" />
          <select className="div-8">
            <option value="full body">Full Body Workout</option>
            <option value="legs">Legs Workout</option>
            <option value="arms">Arms Workout</option>
            <option value="chest">Chest Workout</option>
            <option value="back">Back Workout</option>
            <option value="mobility">Mobility Workout</option>
          </select>
          <div className="div-9">
            <div className="div-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6d02e2c278812e5f6a6f62ce613da885e8f7009384ef3438db26d6b400ce50d?"
                className="img-2"
              />
              <div className="div-11">Add Photos/Video</div>
            </div>
          </div>
          <div className="div-12">Activity Stats</div>
          <div className="div-13">Today, 9:41 PM</div>
          <div className="div-14">1h 25m</div>
          <div className="div-15">
            <div className="div-16">
              <div className="div-17"> Squats | 3 sets | 8 reps | 150lbs</div>
              <div className="div-18">
                Bench Press | 4 sets | 5 reps | 125lbs
              </div>
              <div className="div-19"> Deadlift | 4 sets | 5 reps | 160lbs</div>
            </div>
            <div className="div-20">
              <img src="plus-icon.png"></img>
            </div>
          </div>
          <input type='text' placeholder='Notes' className="div-23" />
        </div>
        <NavBar />
      </div>
    </>
  );
}


