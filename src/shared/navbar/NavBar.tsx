import React from 'react'
import "./NavBar.scss"
import { Link } from 'react-router-dom';

export default function NavBar() {
  function handleClick() {
    var navMenu = document.getElementById("navMenu")!;
    navMenu.style.width = "300px";
  }

  return (
    <div id="navBar">
      <div className='nav-brand'>
        <img src='./logo512.png' alt='VTechLogo' />
        VTech Club
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/events'>Events</Link>
        <Link to='/members'>Members</Link>
        <Link to='/about-us'>About Us</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <button onClick={handleClick} />
    </div>
  )
}
