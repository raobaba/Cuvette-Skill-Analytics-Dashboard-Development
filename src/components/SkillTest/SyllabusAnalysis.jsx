import React from "react";
import "../../styles/SkillTest/SyllabusAnalysis.css";


function SyllabusAnalysis() {
  const syllabusItems = [
    {
      label: "HTML Tools, Forms, History",
      color: "rgba(67, 138, 246, 1)",
      percentage: 80,
    },
    {
      label: "Tags & References in HTML",
      color: "rgba(255, 145, 66, 1)",
      percentage: 60,
    },
    {
      label: "Tables & CSS Basics",
      color: "rgba(251, 94, 94, 1)",
      percentage: 24,
      marginRight: "112px", // Add marginRight here
    },
    {
      label: "Tables & CSS Basics",
      color: "rgba(46, 201, 113, 1)",
      percentage: 96,
      marginRight: "112px", // Add marginRight here
    },
  ];


  return (
    <div className="syllabusAnalysis">
      <div className="create-space"></div>
      <div className="syllabus">
        <h4>Syllabus wise Analysis</h4>
        {syllabusItems.map((item, index) => (
          <div className="horizontal-bar-graph" key={index}>
            <div className="about-input">
              <label style={{ marginRight: item.marginRight }}>
                {item.label}
              </label>
            </div>
            <div className="syllabus-container">
              <div className="input-graph">
                <div class="rounded-graph">
                  <div class="progress" style={{width:item.percentage,background:item.color}}></div>
                </div>
              </div>
              <div className="percentage">
                <span
                  style={{
                    color: item.color,
                    fontSize: "17px",
                    fontWeight: "700",
                  }}
                >
                  {item.percentage}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SyllabusAnalysis;
