import React from 'react'
import "./home.scss"
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from "../../Components/navbar/Navbar"
import Projects from '../../Components/projects/Projects'
import Projects2 from '../../Components/projects/Projects2'



const Home = () => {
  return (
    <div className="home">
    <Sidebar />
    <div className='homeContainer'>
     < Navbar/>
     <div className="hometitle"></div>
      <Projects2 />
      
     
 
    </div>
    
    </div>
  )
}

export default Home