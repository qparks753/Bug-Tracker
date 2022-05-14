import React from 'react'
import Sidebar from "../../Components/sidebar/Sidebar";
import "./Newuser.scss";
import Navbar from "../../Components/navbar/Navbar";
import Adduser from '../../Components/addUser/addUser';

function Newuser() {
  return (
    <div className='newuser'>
    <Sidebar />
    <div className="newUserContainer">
      <Navbar />
      <div className="newUserDiv">
     <Adduser />
      </div>
    </div>

    </div>
  )


}


export default Newuser