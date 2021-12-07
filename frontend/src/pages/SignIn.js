import React from "react";
import Container from "react-bootstrap/esm/Container";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";
import MessageType from "../components/MessageType";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Mytinerary from "../assets/mytinerary-cn.svg";
import User from "../assets/user.png";
import Logo from "../assets/logo2.png"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

class SingIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePass: true,
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.placeholder.toLowerCase().trim()]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    let formParams = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(formParams);
    event.preventDefault();
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
    return (
      <>
        <Container fluid className="m-0 p-0 citySection">
          <MainNav />
          <Container className="singIn-card">
            <Row className="vh-70 p-5">
              <Col sm={4} className="welcome-sign">
                <p>Welcome Back!</p>
                <img width="500" src={Mytinerary} alt="mytinerary concept" />
                <p>Don't have an account? Sign Up</p>
              </Col>
              <Col sm={8} className="form-sign">
                <img className="sign-logo" src={Logo} alt="user" />
                <h2>Sign In to MyTinerary</h2>
                <Form onSubmit={this.handleSubmit}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      aria-label="Text input with checkbox"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      type={this.state.hidePass ? "password" : "pass"}
                      placeholder="Password"
                      aria-describedby="passwordHelpBlock"
                      onChange={(e) => this.handleChange(e)}
                    />
                    <div className="d-flex justify-content-between">
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
                      <Form.Text id="passwordHelpBlock" muted>
                        Forgot your password?
                      </Form.Text>
                    </div>
                  </FloatingLabel>
                  <input type="submit" value="Submit"></input>
                </Form>
              </Col>
            </Row>
          </Container>
        </Container>
        <Footer />
      </>
    );
  }
}

export default SingIn;
