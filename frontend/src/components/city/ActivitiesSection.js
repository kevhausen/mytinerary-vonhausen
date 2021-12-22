import Container from "react-bootstrap/esm/Container";
import { useEffect, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Gear from "../../assets/gear.png";
import { connect } from "react-redux";
import itinerariesActions from "../../redux/actions/itinerariesActions";
import MessageType from "../MessageType";
import interactionActions from "../../redux/actions/interactionActions";
import Card from "react-bootstrap/Card";
import Hourglass from "../../assets/hourglass.png";
import Popover from 'react-bootstrap/Popover'
import Overlay from 'react-bootstrap/Overlay'
import { useRef } from 'react'

function ActivitiesSection(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    props.getActivities(props.id, props.activities);
    props.getCommentsByItineraryId(props.id, props.comments);
  };

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleModal = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

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
            <Col sm={8} className="text-center bg-info p-3">
              <p className="display-6">Activities</p>
              <Row>
                {activityList.length === 0 ? (
                  <MessageType type="load" message="Loading" />
                ) : (
                  activityList.map((activity) => (
                    <Col
                      className="activity-image d-flex justify-content-center align-items-center flex-column"
                      style={{ backgroundImage: `url(${activity.image})` }}
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
              <Row>
                {activityList.map((activity) => (
                  <Col sm={4} className="d-flex justify-content-center align-items-center" >
                    <div className="d-flex p-2 justify-content-center align-items-center">
                      <img src={Hourglass} className="hourglass" alt={activity.name}></img>
                      <p className="m-0">{activity.duration} Minutes</p>
                    </div>

                    {/* <div ref={ref}>
      <button className="activity-button" onClick={handleModal}>Details</button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Description</Popover.Header>
          <Popover.Body>
            <p>{activity.description}</p>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div> */}
                  </Col>
                ))}
              </Row>
            </Col>
            <Col sm={4} className="text-center bg-warning p-3">
              <p className="display-6">Comments</p>
              {commentForThis.map((comment) => (
                <Container className="mb-2 bg-main">
                  <Row>
                    <Col sm={2} className="p-2 d-flex align-items-center">
                      <div
                        className="comment-image"
                        style={{
                          backgroundImage: `url(${comment.user[0].image})`,
                        }}
                      ></div>
                    </Col>
                    <Col sm={10} className="p-2">
                      <div className="comment-holder">
                        <p className="comment-username m-0 text-white">
                          {comment.user[0].name}
                        </p>
                        <p className="comment-email text-white">
                          {comment.user[0].email}
                        </p>
                      </div>
                      <div className="comment-message">
                        <p className="comment-message-text m-0 text-white">
                          {comment.message}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              ))}
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
  };
};

const mapDispatchToProps = {
  getActivities: itinerariesActions.getActivities,
  getCommentsByItineraryId: interactionActions.getCommentsByItineraryId,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesSection);
