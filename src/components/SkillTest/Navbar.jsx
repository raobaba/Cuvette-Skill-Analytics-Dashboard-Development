import React from "react";
import "../../styles/SkillTest/Navbar.css"; // Import the CSS file
import cuvette from "../../assets/images/cuvette_logo.png";
import user from "../../assets/images/user_logo.png";

function Navbar() {
  return (
    <div>
      <div className="custom-navbar-container"> {/* Renamed the container for the entire navbar */}
        <div className="custom-container"> {/* Renamed the inner container */}
          <div className="custom-logo"> {/* Renamed the logo container */}
            <img src={cuvette} alt="cuvette_logo" />
          </div>
          <div className="custom-top-bar"> {/* Renamed the top bar container */}
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
