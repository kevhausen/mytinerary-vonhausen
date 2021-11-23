import Container from "react-bootstrap/esm/Container";
import Carrousel from "./Carrousel";

function CarrouselSection() {
  return (
    <Container fluid className="carrouselSection p-5">
      <Container>
        <h2 className="text-light text-end display-6 fw-bold">
          Popular MYtineraries
        </h2>
        <Carrousel />
      </Container>
    </Container>
  );
}

export default CarrouselSection;
