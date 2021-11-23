import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Logo from "../assets/logo2.png";
import User from "../assets/user.png";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <Navbar collapseOnSelect expand="lg" className="main-nav-container">
      <Container>
            <Nav>
        <Link className="hover-white" to="/account" > <Image className="user-icon" src={User}></Image> </Link>
          </Nav>
      <Link to="/" className="nav-brands">
              <img className="mytinerary-logo" src={Logo} alt="Mytinerary Logo"></img>
            </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex justify-content-center container align-items-center main-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/">About</Link>
            <Link className="nav-link" to="/cities">Cities</Link>
            
            <Link className="nav-link" to="/reservation">Reservation</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>        
        </Navbar.Collapse>      
          
      </Container>   
    </Navbar>
  );
}

export default MainNav;
