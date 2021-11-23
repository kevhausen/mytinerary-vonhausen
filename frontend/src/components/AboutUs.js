import Container from "react-bootstrap/esm/Container";

function AboutUs() {
  return (
    <Container fluid className="aboutUs d-flex p-5 justify-content-start">
      <Container className="d-flex flex-column justify-content-center col-12 m-0 col-sm-10 col-md-9 col-lg-7 col-xl-6 col-xxl-4">
        <h2 className="text-light fw-bold text-shadow">
          EXPLORE A DIFFERENT WAY TO TRAVEL
        </h2>
        <p className="text-light text-shadow">
          Discover new cultures and have a wonderful rest with Mytinerary!
          Select the city you’d like to visit and provide our agents with
          estimated time – they’ll find and offer the most suitable tours and
          hotels.
        </p>
        <p className="text-light text-shadow">
          During our work we organized countless journeys for our clients. We
          started as a small tour bureau, and soon we expanded our offers list.
          Today we have valuable experience travelling and we can advise the
          most stunning resorts, cities and countries to visit!
        </p>
      </Container>
    </Container>
  );
}

export default AboutUs;
