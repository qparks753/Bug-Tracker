import React from 'react'
import Sidebar from "../../Components/sidebar/Sidebar";
import "./Newproject.scss";
import Navbar from "../../Components/navbar/Navbar";
import Addproject from '../../Components/addProject/addProject';

function Newproject() {
  return (
    <div className='newProject'>
    <Sidebar />
    <div className="newProjectContainer">
      <Navbar />
      <div className="newProjectDiv">
      <Addproject />
      
      </div>
    </div>

    </div>
  )


}


export default Newproject