import React from 'react'
import Sidebar from "../../Components/sidebar/Sidebar";
import "./Updateproject.scss";
import Navbar from "../../Components/navbar/Navbar";
import Editproject from "../../Components/updateProject/Updateproject"



function Updateproject() {
  return (
    <div className='updateproject'>
    <Sidebar />
    <div className="updateProjectContainer">
      <Navbar />
      <div className="updateProjectDiv">
     <Editproject />
      </div>
    </div>

    </div>
  )


}


export default Updateproject