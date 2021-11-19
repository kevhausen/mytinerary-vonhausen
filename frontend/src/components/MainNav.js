import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Image from "react-bootstrap/Image";
import Logo from "../assets/logo2.png"

import User from '../assets/user.png'

function MainNav(){
    return(
        <Navbar collapseOnSelect expand="lg" >
        <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="d-flex justify-content-center container align-items-center">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <Nav.Link href="#pricing">Cities</Nav.Link>
            <Navbar.Brand href="#home"><img width="300px" src={Logo} alt="Mytinerary Logo" ></img></Navbar.Brand>
            <Nav.Link href="#pricing">Reservation</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link className="hover-white" href="#deets" > <Image className="user-icon" src={User}></Image> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>


    )
}

export default MainNav;