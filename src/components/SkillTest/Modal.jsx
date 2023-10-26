import React, { useState } from "react";
import "../../styles/SkillTest/Modal.css";
import HTML from "../../assets/images/html_icon.png";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill } from "react-icons/pi";

function Modal({ updateQuickStatistics }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ rank: "", percentile: "", correctAnswers: "" });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSave = () => {
    updateQuickStatistics(formData);
    closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="modal">
      <div className="text-icon">
        <div className="html-icon">
          <img src={HTML} alt="html_icon" width={50} height={50} />
        </div>
        <div className="modal-text">
          <h4>Hypertext Markup Language</h4>
          <span>Questions: 08 | Duration: 15 mins | Submitted on 5 Jun 2021</span>
        </div>
      </div>
      <div className="update-button">
        <button onClick={openModal}>Update</button>
      </div>
      {isModalOpen && (
        <div className="modal-background">
          <div className="modal-content">
            <h2>Update Score</h2>
            {[
              { label: "Update your rank", name: "rank" },
              { label: "Update your percentile", name: "percentile" },
              { label: "Update your current score (out of 15)", name: "correctAnswers" },
            ].map((item, index) => (
              <div className="input-group" key={index}>
                <label htmlFor={item.name}>
                  {index === 0 ? <PiNumberCircleOneFill /> : index === 1 ? <PiNumberCircleTwoFill /> : <PiNumberCircleThreeFill />}
                  <span style={{ fontSize: '15px', fontWeight: '500' }}>{item.label}</span>
                </label>
                <input
                  type="text"
                  id={item.name}
                  name={item.name}
                  value={formData[item.name]}
                  onChange={handleChange}
                />
              </div>
            ))}
            <div className="button-group">
              <button onClick={closeModal} style={{borderRadius:'5px',cursor:'pointer'}} >Cancel</button>
              <button onClick={handleSave} style={{ width: '80px', borderRadius: '5px', border: 'none', cursor: 'pointer', height: '30px', color: 'white', background: 'rgba(20, 38, 131, 1)' }}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
