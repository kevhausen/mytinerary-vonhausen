import React from "react";
import Container from "react-bootstrap/esm/Container";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Mytinerary from "../assets/mytinerary-cn.svg";
import Logo from "../assets/logo2.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";
import MessageType from "../components/MessageType";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {GoogleLogin} from 'react-google-login';


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePass: true,
      email: "",
      password: "",
      validated: false,
      isValid: false,
      modalShow: false,
    };
    this.props.setLoad(false)
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  responseGoogle = (response) => {
    const { givenName, familyName, email, googleId, imageUrl } =
    response.profileObj;
    const googlePassword = googleId + "F1#"
  let googleUser = {
    name: givenName,
    lastName: familyName,
    email: email,
    password: googlePassword,
    image: imageUrl,
      country:'',
      googleUser: true
  };
  console.log(googleUser);
  this.props.saveUser(googleUser);
  }
  

  resetValues() {
    this.setState({
      email: "",
      password: "",
    });
  }

  handleSubmit = (event) => {
    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      this.setState({ validated: false });
    } else {
      this.props.setLoad(true);
      this.setState({ isValid: true });
      this.props.signIn(user);
      this.setState({ modalShow: true });
      this.resetValues();
      console.log(user);
    }

    this.setState({ validated: true });
  };
  togglePassword = (e) => {
    const checked = e.target.checked;
    if (checked) {
      this.setState({ hidePass: false });
    } else {
      this.setState({ hidePass: true });
    }
  };
  render() {
    // console.log("la form es valida?");
    // console.log(this.state.isValid);
    // console.log("COMPONENT: esto llega desde el store principal");
    // console.log("la response: " + JSON.stringify(this.props.response));
    // console.log("la error: " + JSON.stringify(this.props.error));
    // console.log("la success: " + JSON.stringify(this.props.success));

    if (this.props.success) {
      return <Navigate to="/" />;
    }
    return (
      <>
        <Container
          fluid
          className="m-0 p-0 citySection d-flex flex-column justify-content-center"
        >
          <MainNav />
          <Container className="signIn-card">
            <Row className="vh-70 p-5 d-flex flex-column-reverse flex-lg-row">
              <Col
                sm={12}
                md={12}
                lg={4}
                xl={4}
                xxl={4}
                className="welcome-sign d-flex flex-column align-items-center justify-content-center p-1 p-xxl-5"
              >
                <p className="text-white display-6 fw-bold text-center">
                  Welcome Back!
                </p>
                <img
                  className="sign-mytinerary"
                  src={Mytinerary}
                  alt="mytinerary concept"
                />
                <p className="text-white">
                  Don't have an account?{" "}
                  <Link to="/signup">
                    <strong>Sign Up</strong>
                  </Link>
                </p>
              </Col>
              {this.props.isLoading ? (
                <Col
                  sm={12}
                  md={12}
                  lg={8}
                  xl={8}
                  xxl={8}
                  className="form-sign d-flex flex-column justify-content-center align-items-center p-2 p-md-5 p-lg-5 p-xxl-5"
                >
                  <MessageType type="load" message="Loading..." />
                </Col>
              ) : (
                <Col
                  sm={12}
                  md={12}
                  lg={8}
                  xl={8}
                  xxl={8}
                  className="form-sign d-flex flex-column justify-content-center align-items-center p-2 p-md-5 p-lg-5 p-xxl-5"
                >
                  <Modal
                    show={this.state.modalShow}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header>
                      <Modal.Title id="contained-modal-title-vcenter">
                        <h4>Error Message</h4>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>{this.props.error}</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        onClick={() => this.setState({ modalShow: false })}
                      >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <img className="sign-logo" src={Logo} alt="user" />
                  <h2 className="text-white fw-bold text-center">
                    Sign In to MyTinerary
                  </h2>
                  <Form
                    onSubmit={this.handleSubmit}
                    className="w-100"
                    noValidate
                    validated={this.state.validated}
                  >
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="mb-3"
                    >
                      <Form.Control
                        aria-label="Text input with checkbox"
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(e) => this.handleChange(e)}
                        name="email"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Password"
                    >
                      <Form.Control
                        type={this.state.hidePass ? "password" : "pass"}
                        placeholder="Password"
                        value={this.state.password}
                        aria-describedby="passwordHelpBlock"
                        onChange={(e) => this.handleChange(e)}
                        name="password"
                        required
                      />
                      <div className="d-flex justify-content-between flex-column flex-sm-row">
                        <div>
                          <input
                            onClick={(e) => {
                              this.togglePassword(e);
                            }}
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label className="form-check-label text-white ms-1">
                            Show Password
                          </label>
                        </div>
                        <Form.Text
                          id="passwordHelpBlock"
                          className="text-white"
                        >
                          Forgot your password?
                        </Form.Text>
                      </div>
                      <Form.Control.Feedback type="invalid">
                        Please provide a password.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                    <div className="d-flex justify-content-center mb-3 mt-4">
                      <input
                        type="submit"
                        value="SIGN IN"
                        className="submit-button"
                      ></input>
                    </div>
                  </Form>
                  <p className="text-white">or sign in with Google</p>
                  <GoogleLogin
    clientId="190201580680-u46pho0n2vjalcan540tm22oan4vhc0v.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
    />
                </Col>
              )}

              <Col className="mock-container"></Col>
            </Row>
          </Container>
        </Container>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    response: state.authReducer.response,
    error: state.authReducer.error,
    success: state.authReducer.success,
    isLoading: state.authReducer.isLoading,
  };
};
const mapDispatchToProps = {
  signIn: authActions.signIn,
  setLoad: authActions.setLoad,
  saveUser : authActions.saveUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
