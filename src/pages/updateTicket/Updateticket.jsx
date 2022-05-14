import React from 'react'
import Sidebar from "../../Components/sidebar/Sidebar";
import "./Updateticket.scss";
import Navbar from "../../Components/navbar/Navbar";
import Editticket from "../../Components/updateTicket/Updateticket.jsx"


function Updateticket() {
  return (
    <div className='updateticket'>
    <Sidebar />
    <div className="newUpdateContainer">
      <Navbar />
      <div className="newUpdateDiv">
     <Editticket />
      </div>
    </div>

    </div>
  )


}


export default Updateticket