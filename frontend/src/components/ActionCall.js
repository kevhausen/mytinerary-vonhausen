import Container from "react-bootstrap/Container";
import Ballon from "../assets/hot-air-balloon.png";

const ActionCall = () => {
  return (
    <Container className="d-flex container align-items-center w-100 vh-100 justify-content-center">
        <Container className="action-call d-flex p-4 col-6">
        <div className="d-flex flex-column align-items-center me-4 hero-mytinerary">
      <img src={Ballon} alt="Ballon Logo" className="ballon"/>
      <h2 className="text-light">MyTinerary</h2>
      </div>

      <p className="align-self-center me-4">
        Find your perfect trip, designed by insiders who know and love their
        cities!
      </p>

      <div className="d-flex w-100 justify-content-around flex-column">
        {/* el boton debe enviar a una pagina vacia */}
        <button className="white-button">View Destinations</button>
        {/* este envia a una seccion de mas abajo, dentro de la misma pagina */}
        <button className="transparent-button">More Info</button>
      </div>
      </Container>
    </Container>
  );
};

export default ActionCall;
