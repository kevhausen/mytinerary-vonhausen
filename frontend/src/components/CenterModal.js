import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import interactionActions from "../redux/actions/interactionActions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

function CenterModal(props) {
  function handleClick() {
    props.onHide();
    props.deletecomment(props.comment._id);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Message
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure you want to delete this message?</h4>
        <Container className="mb-2">
          <Row>
            <Col className="p-2 d-flex align-items-center justify-content-center col-2 col-xxl-2 col-xl-3 col-lg-4 modal-image-container">
              <div
                className="comment-image"
                style={{
                  backgroundImage: `url(${props.comment.user[0].image})`,
                }}
              ></div>
            </Col>

            <Col className="p-2 col-10 col-xxl-10 col-xl-9 col-lg-8 modal-body-container">
              <div className="d-flex justify-content-between">
                <div className="comment-holder">
                  <p className="comment-username m-0">
                    {props.comment.user[0].name}
                  </p>
                  <p className="comment-email">
                    {props.comment.user[0].email}
                  </p>
                </div>
              </div>
              <div className="modal-comment">
                <p className="comment-message-text m-0">
                  {props.comment.message}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="modal-button" onClick={() => handleClick()}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const mapDispatchToProps = {
  deletecomment: interactionActions.deleteComment,
};

export default connect(null, mapDispatchToProps)(CenterModal);
