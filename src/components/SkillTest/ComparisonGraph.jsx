import React, { useRef } from "react";
import "../../styles/SkillTest/ComparisonGraph.css";
import Graph_Icon from '../../assets/images/graph_icon.png';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

function ComparisonGraph({ percentile }) {
  const chartRef = useRef(null);

  const data = {
    labels: ['0%', '20%', '40%', '60%', '80%', '100%'],
    datasets: [{
      label: "My First dataset",
      data: [0, 39, percentile, 90, 10, 60],
      backgroundColor: 'transparent',
      borderColor: 'grey',
      pointBorderColor: 'transparent',
      pointBorderWidth: 1,
      tension: 0.4
    }]
  };

  // const { ctx, tooltip, chartArea:{top,buttom,left,right,height}, scales:{x,y} } = chart;
  // if(tooltip._active.length>0){
  //   const xCoor = x.getPixelForValue(tooltip.dataPoints[0].dataIndex)
  //   const yCoor = y.getPixelForValue(tooltip.dataPoints[0].dataIndex)
  //   ctx.save();
  //   ctx.beginPath();
  //   ctx.lineWidth=3;
  //   ctx.strokeStyle = 'rgba(0,0,0,1)';
  //   ctx.setLineDash([6,6]);
  //   ctx.moveTo(xCoor,yCoor);
  //   ctx.lineTo(xCoor,yCoor);
  //   ctx.stroke();
  //   ctx.closePath();
  //   ctx.setLineDash([]);
  // }

  const options = {
    plugins: {
      legend: false,
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.data[context.dataIndex];
            return `${label} Percentile <br/> Your Rank`;
          },
        },
      },
    },
    interaction: {
      mode: 'index',
      // Add hover effects for gridlines
      onHover: (event, elements) => {
        if (elements.length > 0) {
          chartRef.current.canvas.style.cursor = 'pointer';
        } else {
          chartRef.current.canvas.style.cursor = 'default';
        }
      },
      pointHoverBackgroundColor: 'black',
      pointHoverBorderColor: 'white',
      pointHoverBorderWidth: 1,
      pointHoverRadius: 5
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: (value) => value + '%',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="comparisonGraph">
      <div className="mini-container">
        <div className="comp-text">
          <div className="create-space-comp"></div>
          <h4>Comparison Graph</h4>
          <span>
            You scored {`${percentile}`}% percentile which is lower than the <br />
            average percentile of 72% of all the engineers who took this assessment
          </span>
        </div>
        <div className="comp-logo">
          <div className="circle">
            <img src={Graph_Icon} alt="graph_icon" width={23} height={23} />
          </div>
        </div>
      </div>
      <div className="comp-graph">
        <Line data={data} options={options} ref={chartRef}></Line>
      </div>
    </div>
  );
}

export default ComparisonGraph;
