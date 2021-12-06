import React from "react";
import Container from "react-bootstrap/esm/Container";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";
import MessageType from "../components/MessageType";

export default class Contact extends React.Component {
  render() {
    return (
      <>
        <Container fluid className="min-vh-100 bg-info">
          <MainNav />
          <MessageType type="load" message="Coming Soon..."/>
        </Container>
        <Footer />
      </>
    );
  }
}
