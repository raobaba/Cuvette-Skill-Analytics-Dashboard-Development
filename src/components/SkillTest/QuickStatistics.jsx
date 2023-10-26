import React from "react";
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
        {[
          { icon: Trophy, label: "YOUR RANK", value: rank.toLocaleString('en-US') },
          { icon: Folder, label: "PERCENTILE", value: `${percentile} %` },
          { icon: Checked, label: "CORRECT ANSWERS", value: `${correctAnswers}/15` },
        ].map((item, index) => (
          <div className="quick-box" key={index}>
            <div className="div-circle">
              <img src={item.icon} alt={item.label} width={23} height={23} />
            </div>
            <div className="description">
              <h4>{item.value}</h4>
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickStatistics;
