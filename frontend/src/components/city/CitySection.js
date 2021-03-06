import Container from "react-bootstrap/esm/Container";
import MainNav from "../MainNav";

function CitySection(props) {
  return (
    <Container fluid className="m-0 p-0 citySection">
      <MainNav />
      <Container className="mock-container"></Container>
      <Container
        fluid
        className="m-0 p-0 city-bg d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${props.isLoading ? "" : props.city.image})`,
        }}
      >
        <h2 className="text-light city-title">
          {props.isLoading
            ? "Loading..."
            : `${props.city.name}, ${props.city.country}`}
        </h2>
      </Container>
      <Container className="vh-20 d-flex justify-content-center align-items-center text-light">
        <h2 className="display-4">Itineraries</h2>
      </Container>
    </Container>
  );
}

export default CitySection;
