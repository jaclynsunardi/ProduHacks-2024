import '../css/global.css';
import '../css/addActivity.css';
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function AddActivityScreen () {
  let navigate = useNavigate();
  const toHome = () => {
    let path = `/home`;
    navigate(path);
  }
  
  return (
      <div className = "AddActivityScreen">
        <div className="add-activity-header">
          <button onClick={toHome} className='header-back-button'>Back</button>
          <button onClick={toHome} className='header-publish-button'>Publish</button>
          <h1 className='header-title'>Add Activity</h1>
        </div>
      </div>
    );
  }