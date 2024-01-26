
import React from 'react';
import './Sidebar.css'
import briefcase_icon from '/public/Assets/Briefcase.png'
import dash_icon from '/public/Assets/Circled Menu.png'
import statBoard from '/public/Assets/StatBoard.png'
import help from '/public/Assets/Help.png'
import support from '/public/Assets/Support.png'
import puzzle from '/public/Assets/Puzzle.png'

function Sidebar(){
  return(
    <div className='sidebar'>
      <div className='sidebar_icon'>
        <img src={briefcase_icon} alt="" />
        <h2><img src={statBoard} alt="" /></h2>

      </div>
<div className='sidebar-list'>
<ul>
  <li><img src={dash_icon} alt="" />Dashboard</li>
  <li><img src={support} alt="" />Support</li>
  <li><img src={help} alt="" />Help</li>
  <li><img src={puzzle} alt="" />plugin</li>
</ul>

</div>
    </div>
  )
}

export default Sidebar;
  
