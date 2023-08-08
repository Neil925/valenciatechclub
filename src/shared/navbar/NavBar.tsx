import React, { useState } from 'react'
import "./NavBar.scss"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar() {
  const [expanded, setCheck] = useState<boolean>(false);

  function handleClick() {
    var navMenu = document.getElementById("navMenu")!;
    var faIcon = document.getElementById("faIcon")!;

    if (expanded) {
      navMenu.style.width = "0";
      setCheck(prevCheck => !prevCheck);
    }
    else {
      faIcon.classList.add('change-to-x');
      navMenu.style.width = "300px";
      setTimeout(() => setCheck(prevCheck => !prevCheck), 200);
    }

    
  }

  return (
    <div id="navBar">
      <div className='nav-brand'>
        <img src='./text-logo.png' alt='VTechLogo' />
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/events'>Events</Link>
        <Link to='/members'>Members</Link>
        <Link to='/about-us'>About Us</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={expanded ? ['fas', 'plus'] : ['fas', 'bars']} id='faIcon'
          className={expanded ? 'change-to-x' : ''} />
      </button>
    </div>
  )
}
