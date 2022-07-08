import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { NavHashLink as NavLink } from 'react-router-hash-link'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'




const PageNavbar = () => {
  return (


    <Navbar className='pagenav ' expand="sm" fixed="top">
      <Container>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        

      
          <NavLink className='hash' as={Link} to="#aboutme" smooth>About Me</NavLink>
          <NavLink className='hash' as={Link} to="#projects" smooth>Projects</NavLink>
          <NavLink className='hash' as={Link} to="#skills" smooth>Skills</NavLink>
        
          <NavLink className='hash' as={Link} to="#experience"  smooth>Experience</NavLink>
          <NavLink className='hash' as={Link} to="#contact"  smooth>Contact</NavLink>
         
          {/* <Nav.Link as={Link} to="/yuanmengcv">CV</Nav.Link> */}



        </Navbar.Collapse>

      </Container>
    </Navbar >


  )




}

export default PageNavbar
