import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Logo from "../assets/logo2.png";
import User from "../assets/user.png";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function MainNav() {
  let imagenUsuario = <Image className="user-icon" src={User}></Image>;
  return (
    <Navbar collapseOnSelect expand="md" className="main-nav-container">
      <Container>
        <Nav>
          <DropdownButton id="dropdown-basic-button" title={imagenUsuario}>
            <Link  to="/signup">
              <Dropdown.Item href="#/action-1">Sign Up</Dropdown.Item>
            </Link>
            {/* que se muestren estos dos cuando este logeado */}
            <Link  to="/account">
            <Dropdown.Item href="#/action-2">Log Out</Dropdown.Item>
            </Link>
            <Link to="/account">
            <Dropdown.Item href="#/action-2">My Account</Dropdown.Item>
            </Link>
          </DropdownButton>
        </Nav>
        <Link to="/" className="nav-brands">
          <img
            className="mytinerary-logo"
            src={Logo}
            alt="Mytinerary Logo"
          ></img>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="toggle-nav">
          <Nav className="d-flex justify-content-center container align-items-center main-nav flex-wrap">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/cities">
              Cities
            </Link>
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;
