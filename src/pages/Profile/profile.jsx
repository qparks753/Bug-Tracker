import React from 'react'
import Sidebar from "../../Components/sidebar/Sidebar";
import "./profile.scss"
import Navbar from "../../Components/navbar/Navbar"
import Profilecomp from "../../Components/profile/Profilecomp"

function Profile() {
  return (
    <div className='profile'>
    <Sidebar />
    <div className="profileContainer">
      <Navbar />
      <div className="profilediv">
      <Profilecomp  />
      </div>
    </div>

    </div>
  
  )
}

export default Profile