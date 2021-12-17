import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Gear from "../../assets/gear.png";
import { connect } from "react-redux";
import itinerariesActions from "../../redux/actions/itinerariesActions";
import { useEffect } from "react";

function ActivitiesSection(props) {
  const [open, setOpen] = useState(false);

  console.log("COMPONENT: esta es la lista de activities: ");
  console.log(props.activities);

  //   console.log('estos son los id de itinerarios que ya estan cargados en el store principal')
  //   props.activities.map(activity=> console.log(activity.itinerary[0]._id))
  //   console.log('y este es la nueva peticion de id '+ props.id)
  //   sacar de aqui los valores unicos, para luego compararlo con el props.id. Si son distintos, entonces que haga un pedido a la database

  //   useEffect(()=>{
  //       props.getActivities(props.id)
  //   },[])

  const handleClick = () => {
    setOpen(!open);
    props.getActivities(props.id, props.activities);
    //   aqui se le pasa la lista actual, para que en el action se verifique si es que el props.id (el id del itinerario) esta en
    // props.activities. props.activities.map(e=>e.itinerary===id)
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
              {activityList.map((activity) => 
                  <>
                {/* <div className="activity-image" style={{backgroundImage: `url(${activity.image})`}}></div> */}
                <Container className="activity-image" fluid style={{backgroundImage: `url(${activity.image})`}}></Container>
                {/* <img className="activity-image" src={activity.image} alt={activity.name} /> */}
                <p>{activity.name}</p>
                <p>{activity.description}</p>
                <p>{activity.duration}</p>
                  </>
              )}
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
