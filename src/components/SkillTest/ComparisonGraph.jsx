import React from "react";
import "../../styles/SkillTest/ComparisonGraph.css";
import CanvasJSReact from '@canvasjs/react-charts';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function ComparisonGraph() {
  const percentageValues = [
    { x: 0, label: '0%' },
    { x: 20, label: '20%' },
    { x: 40, label: '40%' },
    { x: 60, label: '60%' },
    { x: 80, label: '80%' },
    { x: 100, label: '100%' }
  ];

  const options = {
    animationEnabled: true,
   
    axisX: {
      title: "Percentage",
      interval: 20,
      minimum: 0,
      maximum: 100,
      labelFormatter: function (e) {
        return e.value + "%";
      }
    },
    axisY: {
      title: "Sales (in USD)",
      prefix: "$"
    },
    data: [
      {
        yValueFormatString: "$#,###",
        type: "spline",
        dataPoints: percentageValues
      }
    ]
  };
  return (
    <div className="comparisonGraph">
      <div className="mini-container">
        <div className="comp-text">
          <h4>Comparison Graph</h4>
          <span>
            You scored 37% percentile which is lower then the <br />
            average percentile 72% of all the engineers who took this assessment
          </span>
        </div>
        <div className="comp-logo">
          <div className="circle">logo</div>
        </div>
      </div>
      <div className="comp-graph">
      <CanvasJSChart options={options} />
      </div>
    </div>
  );
}

export default ComparisonGraph;
