import React, { useState } from 'react'
import "./NavBar.scss"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar(props: { toggleMenu: () => void, expanded: boolean }) {
  return (
    <div id="navBar" className='flex-center'>
      <Link to="/">
        <div className='nav-brand'>
          <img src='./text-logo.png' alt='VTechLogo' />
        </div>
      </Link>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/events'>Events</Link>
        <Link to='/members'>Members</Link>
        <Link to='/join-us'>Join Us</Link>
        {/* <Link to='/contact'>Contact</Link> */}
      </nav>
      <button onClick={props.toggleMenu}>
        <FontAwesomeIcon icon={props.expanded ? ['fas', 'plus'] : ['fas', 'bars']} id='faIcon'
          className={props.expanded ? 'change-to-x' : ''} />
      </button>
    </div>
  )
}
