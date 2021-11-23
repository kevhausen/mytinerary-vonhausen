import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";

function AboutUs() {
  return (
    <Container fluid className="aboutUs d-flex p-5">
        <Container className="d-flex">

        
      <Container className="d-flex align-items-center flex-column justify-content-center">
        <h2 className="text-light fw-bold">EXPLORE A DIFFERENT WAY TO TRAVEL</h2>
        <p className="text-light">
          Discover new cultures and have a wonderful rest with Mytinerary!
          Select the city you’d like to visit and provide our agents with
          estimated time – they’ll find and offer the most suitable tours and
          hotels.
        </p>
        <p className="text-light">
          During our work we organized countless journeys for our clients. We
          started as a small tour bureau, and soon we expanded our offers list.
          Today we have valuable experience travelling and we can advise the
          most stunning resorts, cities and countries to visit!
        </p>
      </Container>

      <Container className="d-flex image-about">
        {/* <Image
          className="img"
          src="https://livedemo00-joomla.template-help.com/joomla_prod-25646/images/page1-img1.jpg"
        /> */}

        {/* <Image
              className="img"
              src="https://livedemo00-joomla.template-help.com/joomla_prod-25646/images/page1-img2.jpg"
            /> */}
      </Container>
      </Container>
    </Container>
  );
}

export default AboutUs;
