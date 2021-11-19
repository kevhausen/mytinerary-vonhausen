import Container from "react-bootstrap/Container";

const ActionCall = () => {
  return (
    <Container>
      <h2>MyTinerary</h2>
      <p>
        Find your perfect trip, designed by insiders who know and love their
        cities!
      </p>
      <div>
          {/* el boton debe enviar a una pagina vacia */}
        <button>View Destinations</button>
        {/* este envia a una seccion de mas abajo, dentro de la misma pagina */}
        <button>More Info</button>
      </div>
    </Container>
  );
};

export default ActionCall;
