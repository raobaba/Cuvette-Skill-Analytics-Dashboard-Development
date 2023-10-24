import React from "react";
import "../../styles/SkillTest/Navbar.css";
import cuvette from "../../assets/images/cuvette_logo.png";
import user from "../../assets/images/user_logo.png";

function Navbar() {
  return (
    <div>
      <div className="navbar-container">
        <div className="container">
          <div className="logo">
            <img src={cuvette} alt="cuvette_logo" />
          </div>
          <div className="top-bar">
            <div>
              <img src={user} alt="user_logo" />
              <p>Siddharth Jain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
