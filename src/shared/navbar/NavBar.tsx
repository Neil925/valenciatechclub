import React from 'react'
import "./NavBar.scss"

export default function NavBar() {
  function handleClick() {
    document.getElementById("navMenu")?.classList.add('shown');
  }

  return (
    <div className='nav-bar'>
      <div className='nav-brand'>
        <img src='./logo512.png' alt='VTechLogo' />
        VTech Club
      </div>
      <nav>
        <a href='/'>Home</a>
        <a href='/events'>Events</a>
        <a href='/members'>Members</a>
        <a href='/about-us'>About Us</a>
        <a href='/contact'>Contact</a>
      </nav>
      <button onClick={handleClick} />
    </div>
  )
}
