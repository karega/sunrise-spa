import React from "react";
import "./LoginButton.css";

const LoginButton = () => {
   const showLoggedIn = false
  return (
    <div className="header-login component-same ml-10">
 {   showLoggedIn ?  <span>
        <a href="#" data-test="login-info-name">
          <i className="dl-icon-user12"></i>
          <span className="target-text hidden-xs hidden-sm">myAccount</span>
        </a>
      </span> : 
      <span  data-test="login-button">
        <a href="#">
          <i className="dl-icon-user12"></i>
          <span className="target-text hidden-xs hidden-sm">signIn</span>
        </a>
      </span>}
    </div>
  );
};

export default LoginButton;
