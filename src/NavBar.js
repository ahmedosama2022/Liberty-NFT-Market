import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './header.css'
const NavBar = () => {
  return (
    <div className='NavBar '>
       
       <Navbar  expand="lg" style={{borderRadius: "50px" }}>
      <Container>
        <Navbar.Brand to="/home"><img src='images\logo.png'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav1">
            <Link className='navLink' to="/" ><a href='#'>Home</a></Link>
            <Link className='navLink' to="/Explore"><a href='#'>Explore</a></Link>
            <Link className='navLink' to="/ItemDetails" ><a href='#'>Item Details</a></Link>
            <Link className='navLink' to="/Author"><a href='#'>Author</a></Link>
            <Link className='navLink' to="/CreateYours"><a href='#'>Create Yours</a></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </div>
  )
}

export default NavBar