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
        <div className={`page ${activeSection === "dashboard" ? "active" : ""}`} onClick={() => handleSectionClick("dashboard")}>
          <div>
            <span>
              <FiBarChart2 />
            </span>
            <Link to="/">Dashboard</Link>
          </div>
        </div>
        <div className={`page ${activeSection === "skilltest" ? "active" : ""}`} onClick={() => handleSectionClick("skilltest")}>
          <div>
            <span>
              <BiAward />
            </span>
            <Link to="/skilltest">Skill Test</Link>
          </div>
        </div>
        <div className={`page ${activeSection === "internships" ? "active" : ""}`} onClick={() => handleSectionClick("internships")}>
          <div>
            <span>
              <AiOutlineFile />
            </span>
            <Link to="/internships">Internships</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
