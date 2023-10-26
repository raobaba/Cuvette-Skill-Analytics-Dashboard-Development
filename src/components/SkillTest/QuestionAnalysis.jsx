import React from "react";
import "../../styles/SkillTest/QuestionAnalysis.css";
import TARGET from "../../assets/images/target_icon.png";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
ChartJS.register(ArcElement);
function QuestionAnalysis() {
  const data = {
    lebels: ["Yes"],
    datasets: [
      {
        label: "Poll",
        data: [12],
        background: ['green'],
        borderWidth: 0,
        circumference: 270,
        outerRadius: "30%", // You can adjust this percentage
        innerRadius: "30%", // You can adjust this percentage
      },
    ],
  };

  const options = {
    cutout: "65%", // This controls the size of the cutout in the center
  };

  const backgroundCircle = {
    id: "backgroundCircle",
    beforeDatasetsDraw(chart, arg, pluginOption) {
      const { ctx } = chart;
      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
      const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
      const width = outerRadius - innerRadius;
      const angle = Math.PI / 180;
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.strokeStyle = "rgba(67, 138, 246, 1)";
      ctx.arc(xCoor, yCoor, outerRadius - width / 2, 0, angle * 360, false);
      ctx.stroke();
    },
  };

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
      <div className="circular-graph">
        <Doughnut data={data} options={options} plugins={[backgroundCircle]}>
          {/* Render the image inside the circular graph */}
          <img src={TARGET} alt="target_icon" width={40} height={40} />
        </Doughnut>
      </div>
    </div>
  );
}

export default QuestionAnalysis;
