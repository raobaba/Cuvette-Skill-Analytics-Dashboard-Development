import React from "react";
import "../../styles/SkillTest/Navbar.css"; // Import the CSS file
import cuvette from "../../assets/images/cuvette_logo.png";
import user from "../../assets/images/user_logo.png";

function Navbar() {
  return (
    <div>
      <div className="custom-navbar-container"> 
        <div className="custom-container"> 
          <div className="custom-logo"> 
            <img src={cuvette} alt="cuvette_logo" />
          </div>
          <div className="custom-top-bar"> 
            <div>
              <img src={user} alt="user_logo" />
              <span>Siddharth Jain</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
