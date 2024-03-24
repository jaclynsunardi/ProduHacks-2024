import * as React from "react";
import '../css/addActivity.css';
import { useNavigate } from "react-router-dom";

export default function AddActivityScreen () {
  let navigate = useNavigate();
  const toHome = () => {
    let path = `/home`;
    navigate(path);
  }
  return (
    <>
      <div className="div">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/09307d20bc0dfc4d761c974bcc61e6be23b112e34a4d574451b9e3a6e8559245?"
          className="img"
        />
        <div className="div-2">
          <div className="div-3">
            <button onClick={toHome} className='div-4'>Back</button>
            <div className="div-5">Add Activity</div>
            <button onClick={toHome} className='div-6'>Publish</button>
          </div>
          <div className="div-7">Evening Workout</div>
          <div className="div-8">Type of workout</div>
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
              <div className="div-21" />
              <div className="div-22" />
            </div>
          </div>
          <div className="div-23">Notes</div>
          <div className="div-24">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3b56f603ae7885ce66bf71dd9ab77ac0140bc9efea9107f6964c96c69b713b6?"
              className="img-3"
            />
            <img
              loading="lazy"
              srcSet="..."
              className="img-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}


