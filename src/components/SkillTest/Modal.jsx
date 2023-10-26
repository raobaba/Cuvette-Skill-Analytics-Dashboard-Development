import React, { useState } from "react";
import "../../styles/SkillTest/Modal.css";
import HTML from "../../assets/images/html_icon.png";
import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
} from "react-icons/pi";

function Modal({ updateQuickStatistics }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    rank: "",
    percentile: "",
    correctAnswers: "",
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSave = () => {
    updateQuickStatistics(formData);
    closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="modal">
      <div className="text-icon">
        <div className="html-icon">
          <img src={HTML} alt="html_icon" width={50} height={50} />
        </div>
        <div className="modal-text">
          <h4>Hypertext Markup Language</h4>
          <span>Questions:08 | Duration:15 mins | Submitted on 5 jun 2021</span>
        </div>
      </div>
      <div className="update-button">
        <button onClick={openModal}>Update</button>
      </div>
      {isModalOpen && (
        <div className="modal-background">
          <div className="modal-content">
            <h2>Update Score</h2>
            <div className="input-group">
              <label htmlFor="rank">
                <PiNumberCircleOneFill />
                <span style={{fontSize:'15px',fontWeight:'500'}}>Update your rank</span>
              </label>
              <input
                type="text"
                id="rank"
                name="rank"
                value={formData.rank}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="percentile">
                <PiNumberCircleTwoFill />
                <span style={{fontSize:'15px',fontWeight:'500'}}>Update your percentile</span>
              </label>
              <input
                type="text"
                id="percentile"
                name="percentile"
                value={formData.percentile}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="score">
                <PiNumberCircleThreeFill />
                <span style={{fontSize:'15px',fontWeight:'500'}}>Update your current score(out of 15)</span>
              </label>
              <input
                type="text"
                id="score"
                name="correctAnswers"
                value={formData.correctAnswers}
                onChange={handleChange}
              />
            </div>
            <div className="button-group">
              <button onClick={closeModal}>Cancel</button>
              <button onClick={handleSave} style={{width:'80px',borderRadius:'5px',border:'none',cursor:'pointer' ,height:'30px',color:'white',background:'rgba(20, 38, 131, 1)'}}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
