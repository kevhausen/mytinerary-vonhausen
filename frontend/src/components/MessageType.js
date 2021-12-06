import Container from "react-bootstrap/esm/Container";
import Gear from "../assets/gear.png";
import ErrorIcon from '../assets/error.png'

function MessageType(props){
    return(
        <Container fluid className="d-flex justify-content-center align-items-center flex-column flex-md-row messageType">
          <img
            className="me-2 error-icon pos-2"
            id={props.type.includes("load") && "gear"}
            width="50"
            src={props.type.includes("load")? Gear : ErrorIcon}
            alt="error icon"
          />
          <h3 className="text-light text-center">{props.message}</h3>
        </Container>
    )
}

export default MessageType