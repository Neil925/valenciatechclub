import React from 'react'
import './NavMenu.scss'

export default function NavMenu() {
    return (
        <div id='navMenu'>
            <nav className='nav-links'>
                <a href='/'>Home</a>
                <a href='/events'>Events</a>
                <a href='/members'>Members</a>
                <a href='/about-us'>About Us</a>
                <a href='/contact'>Contact</a>
            </nav>
        </div>
    )
}
