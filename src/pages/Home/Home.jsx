import React from 'react'
import "./home.scss"
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from "../../Components/navbar/Navbar"
// import Projects from '../../Components/projects/Projects'
//import Projects2 from '../../Components/projects/Projects2'
import Charts from '../../Components/charts/Charts.jsx'
import Projects3 from '../../Components/projects/projects3'
import Projects from '../../Components/projects/Projects'




const Home = () => {
  return (
    <div className="home">
    <Sidebar />
    <div className='homeContainer'>
     < Navbar/>
     <div className="mainContainer">
     <div className="hometitle"></div>
      {/* <Projects2 /> */}
      {/* <Projects3 /> */}
      <Projects />
    
     
    </div>
    <div className="chartContainer">
      <div className="chart">
        <span>Tickets By Type</span>
      <Charts />
      </div>
      <div className="chart">
        <span>Tickets by Status</span>
      <Charts />
      </div>
      <div className="chart">
        <span>Priority</span>
      <Charts />
      </div>
      
    </div>
    </div>
    </div>
  )
}

export default Home