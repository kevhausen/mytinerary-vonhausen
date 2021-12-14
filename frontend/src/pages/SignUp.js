import React from "react";
import Container from "react-bootstrap/esm/Container";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo from "../assets/logo2.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";
import Comments from "../assets/sign_up_icons/comments.png";
import Likes from "../assets/sign_up_icons/likes.png";
import Profile from "../assets/sign_up_icons/profile.png";
import { Link } from "react-router-dom";
import MessageType from "../components/MessageType";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { GoogleLogin } from "react-google-login";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePass: true,
      name: "",
      lastName: "",
      email: "",
      password: "",
      image: "",
      country: "Argentina",
      validated: false,
      isValid: false,
      show: true,
      selectedCountry: false,
    };
    this.props.setLoad(false);
  }
  handleCountry() {
    if (this.props.user.country) {
      if (this.state.country !== this.props.user.country) {
        return this.props.user.country;
      }
    } else {
      return this.state.country;
    }
  }

  resetValues() {
    this.setState({
      name: "",
      lastName: "",
      email: "",
      password: "",
      image: "",
      country: "Argentina",
    });
  }
  responseGoogle = (response) => {
    const { givenName, familyName, email, googleId, imageUrl } =
      response.profileObj;
    const googlePassword = googleId + "F1#";
    let googleUser = {
      name: givenName,
      lastName: familyName,
      email: email,
      password: googlePassword,
      image: imageUrl,
      country: "",
      googleUser: true,
    };
    this.props.saveUser(googleUser);
  };

  componentDidMount() {
    this.props.getCountries();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    const { name, lastName, email, password, image, country } = this.state;
    let user = {
      name,
      lastName,
      email,
      password,
      image,
      country,
    };

    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      this.setState({ isValid: false });
    } else {
      this.props.setLoad(true);
      this.setState({ isValid: true });
      this.props.saveUser(user);
      this.resetValues();
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

  getError = (path) => {
    if (this.props.error !== null && this.props.error !== undefined) {
      if (this.props.error.length > 0 && this.props.error.length < 10) {
        let pathErrors =
          path === "password"
            ? this.props.error.filter(
                (e) => e.path[0] === path || e.path.length === 0
              )
            : this.props.error.filter((e) => e.path[0] === path);
        if (pathErrors.length > 0) {
          return pathErrors.map((e) => e.message);
        } else {
          return null;
        }
      }
    }
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    return (
      <>
        <Container
          fluid
          className="m-0 p-0 citySection d-flex flex-column justify-content-center"
        >
          <MainNav />
          <Container className="signIn-card">
            <Row className="vh-70 p-5 d-flex flex-column-reverse flex-lg-row">
              {this.props.isLoading ? (
                <Col
                  sm={12}
                  md={12}
                  lg={8}
                  xl={8}
                  xxl={8}
                  className="form-sign d-flex flex-column justify-content-center align-items-center p-2 p-md-4 p-lg-4 p-xxl-4"
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
                  className="form-sign d-flex flex-column justify-content-center align-items-center p-2 p-md-4 p-lg-4 p-xxl-4"
                >
                  {this.props.success && (
                    <Modal
                      show={this.props.success}
                      onHide={this.handleClose}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header>
                        <Modal.Title>MyTinerary!🎉</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Welcome to Mytinerary,
                        <strong>{this.props.user.name}</strong>!
                        {this.props.user.googleUser &&
                        !this.props.user.country ? (
                          <>
                            <p>Please select your country before proceding:</p>{" "}
                            <FloatingLabel
                              controlId="floatingSelect"
                              label="Country"
                            >
                              <Form.Select
                                required
                                aria-label="Floating label select example"
                                name="country"
                                type="text"
                                value={this.state.country}
                                onChange={(e) =>
                                  this.setState({
                                    selectedCountry: true,
                                    country: e.target.value,
                                  })
                                }
                              >
                                {this.props.countries.length ? (
                                  ""
                                ) : (
                                  <option value="Argentina">Loading...</option>
                                )}
                                {this.props.countries
                                  .sort((a, b) => a.name.localeCompare(b.name))
                                  .map((country) => (
                                    <option
                                      key={country.name}
                                      value={country.name}
                                    >
                                      {country.name}
                                    </option>
                                  ))}
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">
                                Please select your country.
                              </Form.Control.Feedback>
                            </FloatingLabel>{" "}
                          </>
                        ) : (
                          <p>Please enjoy your stay.😉</p>
                        )}
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          onClick={this.handleClose}
                          disabled={
                            !this.state.selectedCountry &&
                            !this.props.user.country
                          }
                        >
                          <Link
                            to="/"
                            onClick={(e) =>
                              this.props.modifyUser({
                                email: this.props.user.email,
                                country: this.handleCountry(),
                              })
                            }
                          >
                            Go to Home
                          </Link>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  )}

                  <img className="sign-logo" src={Logo} alt="user" />
                  <h2 className="text-white fw-bold text-center">
                    Sign Up to MyTinerary
                  </h2>
                  <Form
                    onSubmit={this.handleSubmit}
                    className="w-100"
                    noValidate
                    validated={this.state.validated}
                  >
                    <div className="d-flex justify-content-between">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3 w-50"
                      >
                        <Form.Control
                          aria-label="Text input with checkbox"
                          type="text"
                          placeholder="Name"
                          value={this.state.name}
                          onChange={(e) => this.handleChange(e)}
                          name="name"
                          autoComplete="off"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide your name.
                          <p>{this.getError("name")}</p>
                        </Form.Control.Feedback>
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Last Name"
                        className="mb-3 w-50"
                      >
                        <Form.Control
                          aria-label="Text input with checkbox"
                          type="text"
                          placeholder="Last Name"
                          value={this.state.lastName}
                          onChange={(e) => this.handleChange(e)}
                          name="lastName"
                          autoComplete="off"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide your last name.
                          <p>{this.getError("lastName")}</p>
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </div>
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
                        autoComplete="off"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email address.
                        <p>{this.getError("email")}</p>
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
                        autoComplete="off"
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
                      </div>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                        {this.getError("password") &&
                          this.getError("password").map((e, i) => (
                            <p key={i}>{e.replace(`"value"`, "Password")}</p>
                          ))}
                      </Form.Control.Feedback>
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Image URL"
                      className="mb-3"
                    >
                      <Form.Control
                        aria-label="Text input with checkbox"
                        type="text"
                        placeholder="Image URL"
                        onChange={(e) => this.handleChange(e)}
                        name="image"
                        value={this.state.image}
                        autoComplete="off"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your image URL.
                      </Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingSelect" label="Country">
                      <Form.Select
                        required
                        aria-label="Floating label select example"
                        name="country"
                        type="text"
                        value={this.state.country}
                        onChange={(e) => this.handleChange(e)}
                      >
                        {this.props.countries ? (
                          this.props.countries.length ? (
                            ""
                          ) : (
                            <option value="Argentina">Loading...</option>
                          )
                        ) : (
                          ""
                        )}
                        {this.props.countries
                          ? this.props.countries
                              .sort((a, b) => a.name.localeCompare(b.name))
                              .map((country) => (
                                <option key={country.name} value={country.name}>
                                  {country.name}
                                </option>
                              ))
                          : ""}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        Please select your country.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                    <div className="d-flex justify-content-center mt-3 mb-3">
                      <input
                        type="submit"
                        value="SIGN UP"
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
                    cookiePolicy={"single_host_origin"}
                  />
                </Col>
              )}

              <Col
                sm={12}
                md={12}
                lg={4}
                xl={4}
                xxl={4}
                className="welcome-sign d-flex flex-column align-items-center justify-content-center p-2 p-lg-4 p-xxl-4 pt-5"
              >
                <p className="display-6 text-center fw-bold text-white">
                  Why register with us?
                </p>
                <div className="d-flex justify-content-between sign-icon-card align-items-center p-3">
                  <img className="sign-up-icon" src={Comments} alt="comments" />
                  <p className="m-0 w-75 text-white fw-bold sign-icon-text">
                    Participate in the comments. Tell us about your experience
                    and let others know. Express your opinions.
                  </p>
                </div>
                <div className="d-flex justify-content-between sign-icon-card align-items-center p-3">
                  <p className="m-0 w-75 text-white fw-bold sign-icon-text">
                    You can hit like in our itineraries and help others make up
                    their mind about certain trip.
                  </p>
                  <img className="sign-up-icon" src={Likes} alt="likes" />
                </div>
                <div className="d-flex justify-content-between sign-icon-card align-items-center p-3">
                  <img className="sign-up-icon" src={Profile} alt="profile" />
                  <p className="m-0 w-75 text-white fw-bold sign-icon-text">
                    Create and personalize your profile, meet other travelers
                    and share your experiences and passion for travel.
                  </p>
                </div>

                <p className="text-white">
                  Already have an account?{" "}
                  <Link to="/signin" onClick={() => this.props.resetError()}>
                    <strong>Sign In</strong>
                  </Link>
                </p>
              </Col>

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
    countries: state.authReducer.countries,
    user: state.authReducer.response,
    success: state.authReducer.success,
    error: state.authReducer.error,
    isLoading: state.authReducer.isLoading,
  };
};

const mapDispatchToProps = {
  getCountries: authActions.getCountries,
  saveUser: authActions.saveUser,
  setLoad: authActions.setLoad,
  modifyUser: authActions.modifyUser,
  resetError: authActions.resetErrors,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
