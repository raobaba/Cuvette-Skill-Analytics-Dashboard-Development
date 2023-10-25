import React from 'react';
import Navbar from '../components/SkillTest/Navbar';
import Sidebar from '../components/SkillTest/Sidebar';
import Home from '../components/Home/Home';

function SkillTest() {
  return (
    <div>
        <Navbar/>
       <div className='skill-container'>
       <Sidebar/>
       <Home/>
       </div>
    </div>
  )
}

export default SkillTest