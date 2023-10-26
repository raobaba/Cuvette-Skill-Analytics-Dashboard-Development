import React from "react";
import "../../styles/SkillTest/ComparisonGraph.css";
import Graph_Icon from '../../assets/images/graph_icon.png';

import { Line} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)




function ComparisonGraph() {
   const data = {
    labels:['0%','20%','40%','60%','80%','100%'],
    datasets:[{
      label: "My First dataset",
      data:[20,59,20,90,50,83],
      backgroundColor:'transparent',
      borderColor:'grey',
      PointBorderColor:'transparent',
      PointBorderWidth:1,
      tension:0.4
    }]
   }
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
      pointHoverBackgroundColor:'black',
      pointHoverBorderColor	:"white",
      pointHoverBorderWidth:'red',
      pointHoverRadius:5
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 10,
        max: 100,
        ticks: {
          stepSize: 10,
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
            You scored 37% percentile which is lower then the <br />
            average percentile 72% of all the engineers who took this assessment
          </span>
        </div>
        <div className="comp-logo">
          <div className="circle">
            <img src={Graph_Icon} alt="graph_icon" width={23} height={23}/>
          </div>
        </div>
      </div>
      <div className="comp-graph">
      <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

export default ComparisonGraph;
