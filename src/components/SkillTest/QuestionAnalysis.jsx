import React from "react";
import "../../styles/SkillTest/QuestionAnalysis.css";

function QuestionAnalysis() {
  return (
    <div className="question">
      <div className="create-space"></div>
      <div className="question-text">
        <h4 style={{ color: "rgba(30, 39, 46, 1)" }}>Question Analysis</h4>
        <h4 className="attempt-question">07/15</h4>
      </div>
      <div className="about-improvement">
        <span>
          You scored correct 7 questions out of 15. However it <br /> still
          needs some improvment
        </span>
      </div>
    </div>
  );
}

export default QuestionAnalysis;
