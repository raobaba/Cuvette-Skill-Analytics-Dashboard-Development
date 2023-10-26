import React, { useState } from "react";
import "../../styles/SkillTest/QuickStatistics.css";
import Trophy from '../../assets/images/trophy.png';
import Checked from '../../assets/images/checked.png';
import Folder from '../../assets/images/folder.png';

function QuickStatistics({ rank, percentile, correctAnswers }) {
  return (
    <div className="quickStatistics">
      <div className="create-space"></div>
      <h4>Quick Statistics</h4>
      <div className="quick-mini">
        <div className="quick-box">
          <div className="div-circle">
            <img src={Trophy} alt="trophy" width={23} height={23} />
          </div>
          <div className="description">
            <h4>{rank}</h4>
            <span>YOUR RANK</span>
          </div>
        </div>
        <div class="vertical-line">
        </div>
        <div className="quick-box">
          <div className="div-circle">
            <img src={Folder} alt="trophy" width={23} height={23} />
          </div>
          <div className="description">
            <h4>{percentile} %</h4>
            <span>PERCENTILE</span>
          </div>
        </div>
        <div class="vertical-line"></div>
        <div className="quick-box">
          <div className="div-circle">
            <img src={Checked} alt="trophy" width={23} height={23} />
          </div>
          <div className="description">
            <h4>{correctAnswers}/15</h4>
            <span>CORRECT ANSWERS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickStatistics;
