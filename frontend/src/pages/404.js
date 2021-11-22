import React from "react";
import MainNav from "../components/MainNav";
import Container from "react-bootstrap/esm/Container"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default class ErrorPage extends React.Component {
    render(){
        return(
            <>
            <div className="firstSection">
            <MainNav />
            <Container fluid className="vh-25">
            <p className="nav-link">There is nothing here</p>
            </Container>
        </div>
            </>
        )
    }
}