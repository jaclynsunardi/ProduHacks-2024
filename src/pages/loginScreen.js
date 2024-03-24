import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/loginScreen.css";

export default function LoginScreen() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/home'); // Use the path for the page you want to navigate to
  };

  return (
    <>
      <div className="div">

        <div className="login">Log In</div>
        <div className="email">Email</div>
        <div className="passwordbox">
          <div className="password">Password</div>
          <div className="showbutton">Show</div>
        </div>
        <button className="loginbutton" onClick={handleLoginClick}>Log In</button> 
        <div className="forgetpass">Forgot your password?</div>
        <div className="div2" />
      </div>
    </>
  );
}
