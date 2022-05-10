import React from 'react'
import Sidebar from "../../Components/sidebar/Sidebar";
import "./Tickets.scss"
import Navbar from "../../Components/navbar/Navbar"
import Ticketscomp from '../../Components/tickets/Ticketscomp';

const Tickets = () => {
  return (
    <div className='tickets'>
    <Sidebar />
    <div className="ticketsContainer">
      <Navbar />
      <div className="ticketsdiv">
      <Ticketscomp  />
      </div>
    </div>

    </div>
  )
}

export default Tickets
