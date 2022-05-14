import React from 'react'
import Sidebar from "../../Components/sidebar/Sidebar";
import "./Updateuser.scss";
import Navbar from "../../Components/navbar/Navbar";
import Edituser from '../../Components/Updateuser/Updateuser';



function Updateuser() {
  return (
    <div className='updateuser'>
    <Sidebar />
    <div className="updateUserContainer">
      <Navbar />
      <div className="UpdateUserDiv">
     <Edituser />
      </div>
    </div>

    </div>
  )


}


export default Updateuser