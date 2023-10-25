import React from 'react';
import '../../styles/SkillTest/Modal.css';
import HTML from '../../assets/images/html_icon.png';

function Modal() {
  return (
    <div className='modal'>
        <div className='text-icon'>
          <div className='html-icon'>
              <img src={HTML} alt="html_icon" width={50} height={50} />
           </div>
          <div className='modal-text'>
             <h4>Hypertext Markup Language</h4>
             <p>Questions:08 | Duration:15 mins | Submitted on 5 jun 2021</p>
          </div>
        </div>
        <div className='update-button'>
             <button>Update</button>
        </div>
    </div>
  )
}

export default Modal