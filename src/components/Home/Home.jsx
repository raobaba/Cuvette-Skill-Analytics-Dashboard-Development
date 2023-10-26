import React, { useState } from "react";
import "../../styles/Home/Home.css";
import Modal from "../SkillTest/Modal";
import QuickStatistics from "../SkillTest/QuickStatistics";
import SyllabusAnalysis from "../SkillTest/SyllabusAnalysis";
import ComparisonGraph from "../SkillTest/ComparisonGraph";
import QuestionAnalysis from "../SkillTest/QuestionAnalysis";

function Home() {
  const [quickStats, setQuickStats] = useState({
    rank: "12,890",
    percentile: "38",
    correctAnswers: "07/15",
  });

  const updateQuickStatistics = (newStats) => {
    setQuickStats(newStats);
  };

  return (
    <div className="home-container">
      <span>Skill Test</span>
      <div className="mini-home-container">
        <div className="container">
          <div className="first-container">
            <div className="modal-container">
              <Modal updateQuickStatistics={updateQuickStatistics} />
            </div>
            <div className='quickStatistics-container'>
               <QuickStatistics
                 rank={quickStats.rank}
                 percentile={quickStats.percentile}
                 correctAnswers={quickStats.correctAnswers}
               />
            </div>
            <div className="comparisonGraph-container">
               <ComparisonGraph/>
            </div>
          </div>
          <div className="second-container">
            <div className="syllabusAnalysis-container">
                 <SyllabusAnalysis/>
            </div>
            <div className="questionAnalysis-container">
                 <QuestionAnalysis/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
