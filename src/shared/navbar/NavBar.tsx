import React from 'react'
import "./NavBar.scss"
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function NavBar() {
  return (
    <Navbar className="nav-bar" sticky='top'>
    <Container>
      <Navbar.Brand href="/" className='nav-brand'>
        <img alt="" src="./logo512.png" width="30" height="30" className="d-inline-block align-top"/>{' '}
        VTechClub
      </Navbar.Brand>
      <Nav className='me-auto px-4'>
        <Nav.Link href='/' className='nav-link'>Home</Nav.Link>
        <Nav.Link href='/events'>Events</Nav.Link>
        <Nav.Link href='/about-us'>About Us</Nav.Link>
        <Nav.Link href='/contact'>Contact</Nav.Link>
        <Nav.Link href='/memebrs'>Members</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
