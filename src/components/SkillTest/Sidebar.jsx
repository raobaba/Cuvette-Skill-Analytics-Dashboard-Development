import React, { useState } from "react";
import { FiBarChart2 } from "react-icons/fi";
import { BiAward } from "react-icons/bi";
import { AiOutlineFile } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../styles/SkillTest/Sidebar.css";

function Sidebar() {
  const [activeSection, setActiveSection] = useState("skilltest");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="sidebar-container">
      <div className="page-container">
        <Link to="/">
          <div
            className={`page ${activeSection === "dashboard" ? "active" : ""}`}
            onClick={() => handleSectionClick("dashboard")}
          >
            <div>
              <span>
                <FiBarChart2 />
              </span>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
        <Link to="/skilltest">
          <div
            className={`page ${activeSection === "skilltest" ? "active" : ""}`}
            onClick={() => handleSectionClick("skilltest")}
          >
            <div>
              <span>
                <BiAward />
              </span>
              <p>Skill Test</p>
            </div>
          </div>
        </Link>
        <Link to="/internships">
          <div
            className={`page ${
              activeSection === "internships" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("internships")}
          >
            <div >
              <span>
                <AiOutlineFile />
              </span>
              <p>Internships</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
