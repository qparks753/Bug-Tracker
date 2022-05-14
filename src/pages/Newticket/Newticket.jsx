import React from 'react'
import Sidebar from "../../Components/sidebar/Sidebar";
import "./Newticket.scss";
import Navbar from "../../Components/navbar/Navbar";
import Addticket from '../../Components/addTicket/addTicket.jsx';

function Newticket() {
  return (
    <div className='newticket'>
    <Sidebar />
    <div className="newTicketContainer">
      <Navbar />
      <div className="newTicketDiv">
     <Addticket />
      </div>
    </div>

    </div>
  )


}


export default Newticket