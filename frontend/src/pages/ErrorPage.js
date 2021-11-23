import React from "react";
import MainNav from "../components/MainNav";
import Container from "react-bootstrap/esm/Container";
import Footer from "../components/Footer";

export default class ErrorPage extends React.Component {
  render() {
    return (
      <>
        <div className="errorPage">
          <MainNav />
          <Container className="d-flex justify-content-center flex-column align-items-center">
            <p className="display-1 text-alert">404</p>
            <p className="text-warning">Page not found.</p>
            <p>Please make sure that you typed the endpoint correctly</p>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}
