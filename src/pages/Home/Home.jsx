import React from 'react'
import "./home.scss"
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from "../../Components/navbar/Navbar"
import Widget from '../../Components/widgets/Widget'
import Widget2 from '../../Components/widgets/Widget2'

const Home = () => {
  return (
    <div className="home">
    <Sidebar />
    <div className='homeContainer'>
     < Navbar/>
     <div className="widgets">
       <Widget />
       <Widget2 />
     </div>
    </div>
    
    </div>
  )
}

export default Home