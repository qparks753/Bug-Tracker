import React from 'react'
import Sidebar from "../../Components/sidebar/Sidebar";
import "./List.scss"
import Navbar from "../../Components/navbar/Navbar"
// import Users from '../../Components/users/Users';
import Users3 from '../../Components/users/Users3';

const List = () => {
  return (
    <div className='list'>
    <Sidebar />
    <div className="listContainer">
      <Navbar />
      <div className="userdiv">
      {/* <Users /> */}
      < Users3 />
      </div>
    </div>

    </div>
  )
}

export default List