import Container from "react-bootstrap/esm/Container";
import Gear from "../assets/gear.png"

function Itineraries (){
    return(
        <Container fluid className="itinerarySection d-flex align-items-center justify-content-center flex-column">
            <h2 className="text-light">  Under Construction</h2>
            <img id="gear" src={Gear} alt="under construction icon" />
        </Container>
    )
}

export default Itineraries