// por que registrarsse?
// participa de los comentarios. cuentanos tu experiencia y haz saber a otros de ello. expresa tus opiniones.
// podras dar me gusta a nuestros itinerarios.
// crea y personaliza tu perfil, conoce a otros viajeros y comparte tus experiencias y pasion por los viajes.
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

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePass: true,
      name: "",
      last_name: "",
      email: "",
      password: "",
      image: "",
      country: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.placeholder.toLowerCase().trim()]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    let formParams = {
      name: this.state.name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      image: this.state.image,
      country: this.state.country,
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

  render(){
      return(
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
                <p className="text-white display-6">Why register with us?</p>
                <img
                  className="sign-mytinerary"
                  src={Mytinerary}
                  alt="mytinerary concept"
                />
                <p className="text-white">Already have an account? Sign In</p>
              </Col>
              <Col
                sm={12}
                md={12}
                lg={8}
                xl={8}
                xxl={8}
                className="form-sign d-flex flex-column justify-content-center align-items-center p-2 p-md-5 p-lg-5 p-xxl-5"
              >
                <img className="sign-logo" src={Logo} alt="user" />
                <h2 className="text-white fw-bold text-center">Sign Up to MyTinerary</h2>
                <Form onSubmit={this.handleSubmit} className="w-100">
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
                  </FloatingLabel>
                  <input type="submit" value="Submit"></input>
                </Form>
                <p>or sign in with Google</p>
                <button>Google</button>
              </Col>
              <Col className="mock-container"></Col>
            </Row>
          </Container>
        </Container>
        <Footer />
          </>
      )
  }


}

export default SignUp
