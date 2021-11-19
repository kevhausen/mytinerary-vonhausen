import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function AboutUs() {
  return (
    <Container>
      <h2>EXPLORE A DIFFERENT WAY TO TRAVEL</h2>
      <p>
        Discover new cultures and have a wonderful rest with Mytinerary! Select
        the country you’d like to visit and provide our agents with estimated
        time – they’ll find and offer the most suitable tours and hotels.
      </p>
      <p>
        During our work we organized countless journeys for our clients. We
        started as a small tour bureau, and soon we expanded our offers list.
        Today we have valuable experience travelling and we can advise the most
        stunning resorts, cities and countries to visit!
      </p>

      <Container>
        <Row >
          <Col className="d-flex justify-content-center">
          
            <Image className="img" src="https://livedemo00-joomla.template-help.com/joomla_prod-25646/images/page1-img1.jpg" />
          </Col>

          <Col className="d-flex justify-content-center">
            
            <Image className="img" src="https://livedemo00-joomla.template-help.com/joomla_prod-25646/images/page1-img2.jpg" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutUs;
