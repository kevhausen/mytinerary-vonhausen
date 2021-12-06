import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Gear from "../../assets/gear.png";

function ActivitiesSection(){
    const [open, setOpen] = useState(false);
    return(
        <Container fluid className="d-flex justify-content-center flex-column align-items-center p-1 activitiesSection">
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="itinerary-button" variant="light"
          >
            {!open ? "View More" : "View Less"}
          </Button>
          <Collapse in={open}>
            <Container id="example-collapse-text" className="pt-1">
              <Row className="d-flex flex-column flex-lg-row">
                <Col className="text-center bg-info p-3 m-1">
                  <p className="display-6">Activities</p>
                  <img src={Gear} alt="gear" id="gear" />
                  <p className="text-light fw-bold">Under Construction</p>
                </Col>
                <Col className="text-center bg-warning p-3 m-1">
                  <p className="display-6">Comments</p>
                  <img src={Gear} alt="gear" id="gear" />
                  <p className="text-light fw-bold">Under Construction</p>
                </Col>
              </Row>
            </Container>
          </Collapse>
        </Container>
    )
}

export default ActivitiesSection