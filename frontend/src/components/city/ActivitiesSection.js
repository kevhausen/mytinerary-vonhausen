import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Gear from "../../assets/gear.png";
import { connect } from "react-redux";
import itinerariesActions from "../../redux/actions/itinerariesActions";
import MessageType from "../MessageType";

function ActivitiesSection(props) {
  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setOpen(!open);
    props.getActivities(props.id, props.activities);
  };

  let activityList = props.activities.filter(
    (activity) => activity.itinerary[0]._id === props.id
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
              {console.log('esta es la lista que hay')}
              {console.log(activityList)}
              {activityList.length===0?<MessageType type="load" message="Loading" /> :(activityList.map((activity) => 
                  <div key={activity.name}>
                <Container className="activity-image" fluid style={{backgroundImage: `url(${activity.image})`}}>
                <p>{activity.name}</p>
                </Container>         
                <p>{activity.description}</p>
                <p>{activity.duration}</p>
                  </div>
              ))}
            </Col>
            <Col sm={4} className="text-center bg-warning p-3">
              <p className="display-6">Comments</p>
              <img src={Gear} alt="gear" id="gear" />
              <p className="text-light fw-bold">Under Construction</p>
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
  };
};

const mapDispatchToProps = {
  getActivities: itinerariesActions.getActivities,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesSection);
