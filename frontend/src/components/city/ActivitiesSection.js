import Container from "react-bootstrap/esm/Container";
import { useEffect, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import itinerariesActions from "../../redux/actions/itinerariesActions";
import MessageType from "../MessageType";
import interactionActions from "../../redux/actions/interactionActions";
import Hourglass from "../../assets/hourglass.png";
import Pencil from "../../assets/pencil.png";
import CloseButton from "react-bootstrap/CloseButton";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";
import CenterModal from "../CenterModal";

function ActivitiesSection(props) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedComment, setSelectedComment] = useState("");
  const [editComment, setEditComment] = useState("");
  const [modalShow, setModalShow] = useState(false);



  const popover = (
    <Popover id="popover-basic">
      <Popover.Header className="popover-header" as="h3">
        Logged-in Users Only
      </Popover.Header>
      <Popover.Body>
        Please{" "}
        <Link className="body-link" to="/signin">
          SIGN IN{" "}
        </Link>
        or{" "}
        <Link className="body-link" to="/signup">
          SIGN UP{" "}
        </Link>
        to <strong>MyTinerary</strong> to be able to comment on itineraries!
      </Popover.Body>
    </Popover>
  );



  const handleClick = () => {
    setOpen(!open);
    props.getActivities(props.id, props.activities);
    props.getCommentsByItineraryId(props.id, props.comments);
  };

  const renderEdit = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Edit
    </Tooltip>
  );
  const renderDelete = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete
    </Tooltip>
  );

  function handleUploadMessage() {
    if (props.user) {
      let data = {
        user: props.user._id,
        itinerary: props.id,
        message,
      };
      if (data.message) {
        props.uploadComment(data);
        setMessage("");
      }
    } else {
      console.log("necesitas estar logeado");
    }
  }

  function handleEditMessage(editedMessage, message, event, commentId) {
    if (event.charCode === 13) {
      if (message !== editedMessage) {
        let data = {
          id: commentId,
          message: editedMessage,
        };
        props.editComment(data);
        setSelectedComment("");
      } else if (message === editedMessage) {
        setSelectedComment("");
      }
    }
  }
  function handleDelete() {
    setModalShow(true)
  }

  function handleEdit(id, message) {
    if (selectedComment === id) {
      setSelectedComment("");
    } else if (selectedComment === "") {
      setSelectedComment(id);
      setEditComment(message);
    } else if (selectedComment !== "" && selectedComment !== id) {
      setSelectedComment(id);
      setEditComment(message);
    }
  }

  let activityList = props.activities.filter(
    (activity) => activity.itinerary[0]._id === props.id
  );
  let commentForThis = props.comments.filter(
    (comment) => comment.itinerary[0] === props.id
  );

  return (
    <Container
      fluid
      className="d-flex justify-content-center flex-column align-items-center p-1 activitiesSection"
    >
      <Button
        onClick={handleClick}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="itinerary-button"
        variant="light"
      >
        {!open ? "View More" : "View Less"}
      </Button>
      <Collapse in={open}>
        <Container id="example-collapse-text" className="pt-1">
          <Row className="d-flex flex-column flex-lg-row">
            <Col className="text-center activity-main-container p-3 col-lg-8 col-md-12 col-sm-12 col-12">
              <p className="display-6 text-white fw-bold">Activities</p>
              <div className="activity-container d-flex justify-content-center flex-column">
              <Row className="activity-image-container">
                {activityList.length === 0 ? (
                  <MessageType type="load" message="Loading" />
                ) : (
                  activityList.map((activity) => (
                    <Col
                      className="activity-image d-flex justify-content-center align-items-center flex-column"
                      style={{ backgroundImage: `url(${activity.image})` }}
                      key={activity._id}
                    >
                      <p className="text-light activity-title">
                        {activity.name}
                      </p>
                      <p className="activity-description d-none">
                        {activity.description}
                      </p>
                    </Col>
                  ))
                )}
              </Row>
              <Row className="activity-duration-container">
                {activityList.map((activity) => (
                  <Col
                    className="d-flex justify-content-center align-items-center"
                    key={activity._id}
                  >
                    <div className="d-flex p-2 justify-content-center align-items-center">
                      <img
                        src={Hourglass}
                        className="hourglass"
                        alt={activity.name}
                      ></img>
                      <p className="m-0 text-light">{activity.duration} Minutes</p>
                    </div>
                  </Col>
                ))}
              </Row>
              </div>
            </Col>
            <Col className="text-center comment-main-container p-3 col-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <p className="display-6 text-white fw-bold">Comments</p>
              <div className="comment-container">
              
                {commentForThis.length ? (commentForThis.map((comment) => (
                    
                  <Container key={comment._id} className="mb-2 bg-main">
                      <CenterModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    comment={comment}
                    
                    
                  />
                    <Row>
                      <Col  className="p-2 d-flex align-items-center col-2 col-xxl-2 col-xl-3 col-lg-4">
                        <div
                          className="comment-image"
                          style={{
                            backgroundImage: `url(${comment.user[0].image})`,
                          }}
                        ></div>
                      </Col>
                      
                      <Col className="p-2 col-10 col-xxl-10 col-xl-9 col-lg-8">
                        <div className="d-flex justify-content-between">
                          <div className="comment-holder">
                            <p className="comment-username m-0 text-white">
                              {comment.user[0].name}
                            </p>
                            <p className="comment-email text-white">
                              {comment.user[0].email}
                            </p>
                          </div>
                          <div
                            className={
                              props.user &&
                              props.user._id === comment.user[0]._id
                                ? "d-flex align-items-center"
                                : "d-none"
                            }
                          >
                            <OverlayTrigger
                              placement="top"
                              delay={{ show: 25, hide: 25 }}
                              overlay={renderEdit}
                            >
                              <img
                                onClick={() =>
                                  handleEdit(comment._id, comment.message)
                                }
                                className="comment-pencil"
                                width={"20px"}
                                src={Pencil}
                                alt="edit"
                              />
                            </OverlayTrigger>
                            ,
                            <OverlayTrigger
                              placement="top"
                              delay={{ show: 25, hide: 25 }}
                              overlay={renderDelete}
                            >
                              <CloseButton
                                onClick={() => handleDelete(comment._id)}
                                variant="white"
                              />
                            </OverlayTrigger>
                            
                          </div>
                        </div>
                        <div className="comment-message">
                          {selectedComment === comment._id ? (
                            <OverlayTrigger
                              key="1"
                              placement="top"
                              overlay={
                                <Tooltip id="key">Hit enter to edit</Tooltip>
                              }
                            >
                              <input
                                onKeyPress={(e) =>
                                  handleEditMessage(
                                    e.target.value,
                                    comment.message,
                                    e,
                                    comment._id
                                  )
                                }
                                value={editComment}
                                onChange={(e) => setEditComment(e.target.value)}
                              />
                            </OverlayTrigger>
                          ) : (
                            <p className="comment-message-text m-0 text-white">
                              {comment.message}
                            </p>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                ))): <MessageType type='error' message="no comments yet..." /> }
              </div>
              <div className="d-flex">
                <input
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  type="text"
                  placeholder="Write your comment here..."
                  className="w-100"
                ></input>

                {!props.user ? (
                  <OverlayTrigger
                    trigger="click"
                    placement="auto"
                    overlay={popover}
                  >
                    <button
                      disabled={message ? false : true}
                      onClick={() => handleUploadMessage()}
                      className="send-message-button"
                    >
                      Send
                    </button>
                  </OverlayTrigger>
                ) : (
                  <button
                    disabled={message ? false : true}
                    onClick={() => handleUploadMessage()}
                    className="send-message-button"
                  >
                    Send
                  </button>
                )}
              </div>
            </Col>
            
          </Row>
        </Container>
      </Collapse>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    activities: state.itinerariesReducer.activities,
    comments: state.itinerariesReducer.comments,
    user: state.authReducer.response,
    isLoading: state.itinerariesReducer.isLoading
  };
};

const mapDispatchToProps = {
  getActivities: itinerariesActions.getActivities,
  getCommentsByItineraryId: interactionActions.getCommentsByItineraryId,
  uploadComment: interactionActions.uploadComment,
  deleteComment: interactionActions.deleteComment,
  editComment: interactionActions.editComment,
  setLoad: itinerariesActions.setLoad
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesSection);
