import React from "react";
import Container from "react-bootstrap/esm/Container";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";
import AccountDetails from "../components/AccountDetails"

export default class Account extends React.Component {
  render() {
    return (
      <>
        <Container fluid className="min-vh-100 bg-info">
          <MainNav />
        <AccountDetails />
        </Container>
        <Footer />
      </>
    );
  }
}
