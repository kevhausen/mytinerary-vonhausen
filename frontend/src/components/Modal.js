import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function CenterModal(props) {
  function handleMessage() {
    if (props.error) {
      return props.error;
    } else if (props.response) {
      return (
        "Welcome back, " +
        props.response.user.name +
        " " +
        props.response.user.lastName +
        "!😎"
      );
    }
  }
  function handleTitle() {
    if (props.error) {
      return "Error";
    } else if (props.response) {
      return "Sign in successful🎉";
    }
  }
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {handleTitle()}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{handleMessage()}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CenterModal;
