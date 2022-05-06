import React from 'react'
import "./Navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';


const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="container">
      <div className="search">
        <input type="text" placeholder="Search" />
        <SearchIcon />
      </div>

       <div className="items">
        <div className="item">
        <LanguageRoundedIcon className='icon'/>
        English
        </div>

        <div className="item">
        <NightlightRoundedIcon className='icon'/>

        </div>

        <div className="item">
        <NotificationsActiveRoundedIcon className='icon'/>
        
        </div>

        <div className="item">
        <ChatBubbleRoundedIcon className='icon'/>
       
        </div>

       </div>


    </div>
    </div>
  )
}

export default Navbar