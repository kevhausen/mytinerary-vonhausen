import React from "react";
import Container from "react-bootstrap/esm/Container";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";
import MessageType from "../components/MessageType";

export default class About extends React.Component {
  render() {
    return (
      <>
        <Container fluid className="min-vh-100 bg-warning d-flex flex-md-column">
          <MainNav />
          <MessageType className="about-container" type="load" message="Coming Soon..."/>
        </Container>
        <Footer />
      </>
    );
  }
}