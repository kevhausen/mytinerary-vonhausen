import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Logo from "../assets/logo2.png";
import User from "../assets/user.png";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";

function MainNav(props) {
  let imagenUsuario = (
    <Image
      className="user-icon"
      src={props.user ? props.user.image : User}
    ></Image>
  );
  return (
    <Navbar collapseOnSelect expand="md" className="main-nav-container">
      <Container>
        <Nav>
          <DropdownButton id="dropdown-basic-button" title={imagenUsuario}>
            {props.user ? (
              <Dropdown.Item onClick={() => props.logOut()}>
                Log Out
              </Dropdown.Item>
            ) : (
              <Dropdown.Item as={Link} to="/signup">
                Sign Up
              </Dropdown.Item>
            )}
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
            {props.user ? (
              ""
            ) : (
              <>
                <Link className="nav-link" to="/signin">
                  Sign In
                </Link>
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.authReducer.response,
  };
};

const mapDispatchToProps = {
  logOut: authActions.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
