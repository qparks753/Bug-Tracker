import React from 'react'
import Sidebar from "../../Components/sidebar/Sidebar";
import "./Addproject.scss";
import Navbar from "../../Components/navbar/Navbar";
import Additionproject from '../../Components/addProject/addProject';


function Addproject() {
  return (
    <div className='addproject'>
    <Sidebar />
    <div className="addProjectContainer">
      <Navbar />
      <div className="addProjectDiv" style={{display:"flex", justifyContent:"left"  }}>
     <Additionproject />
      </div>
    </div>

    </div>
  )


}


export default Addproject