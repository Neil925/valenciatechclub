import React, { useState } from 'react'
import "./NavBar.scss"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar() {
  const [expanded, setCheck] = useState<boolean>(false);

  function handleClick() {
    var navMenu = document.getElementById("navMenu")!;
    if (expanded) {
      navMenu.style.width = "0";
    }
    else {
      navMenu.style.width = "300px";
    }

    setCheck(prevCheck => !prevCheck);
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
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={expanded ? ['fas', 'plus'] : ['fas', 'bars']} className='fa-icon' />
      </button>
    </div>
  )
}
