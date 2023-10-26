import React from "react";
import "../../styles/SkillTest/QuestionAnalysis.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
ChartJS.register(ArcElement);

function QuestionAnalysis({ correctAnswers }) {
  const totalQuestions = 15;
  const degree = (correctAnswers / totalQuestions) * 360;

  const data = {
    lebels: ["Yes"],
    datasets: [
      {
        label: "Poll",
        borderWidth: 0,
        circumference: degree < 270 ? 270 : degree,
        outerRadius: "80%",
        innerRadius: "60%",
        data: [300, 50, 100],
        backgroundColor: ['rgba(67, 138, 246, 1)', 'rgba(67, 138, 246, 0.1)'],
      },
    ],
  };

  const options = {
    cutout: "70%",
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
      ctx.strokeStyle = "grey";
      ctx.arc(xCoor, yCoor, outerRadius - width / 2, 0, angle * 360, false);
      ctx.stroke();
    },
  };

  return (
    <div className="question">
      <div className="create-space"></div>
      <div className="question-text">
        <h4 style={{ color: "rgba(30, 39, 46, 1)" }}>Question Analysis</h4>
        <h4 className="attempt-question">{`${correctAnswers}/${totalQuestions}`}</h4>
      </div>
      <div className="about-improvement">
        <span>
          {` You scored ${correctAnswers} questions out of ${totalQuestions}. However it still needs some improvement`}
        </span>
      </div>
      <div className="circular-graph">
        <Doughnut style={{ marginLeft: '10px' }} data={data} options={options} plugins={[backgroundCircle]} />
      </div>
    </div>
  );
}

export default QuestionAnalysis;
