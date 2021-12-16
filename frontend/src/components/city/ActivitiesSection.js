import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Gear from "../../assets/gear.png";
import {connect} from "react-redux"
import itinerariesActions from "../../redux/actions/itinerariesActions";
import {useEffect} from 'react'

function ActivitiesSection(props) {
  const [open, setOpen] = useState(false);

  console.log('esta es la lista de activities: ')
  console.log(props.activities)

  console.log('estos son los id de itinerarios que existen')
  props.activities.map(activity=> console.log(activity.itinerary[0]._id))
//   sacar de aqui los valores unicos, para luego compararlo con el props.id. Si son distintos, entonces que haga un pedido a la database

//   useEffect(()=>{
//       props.getActivities(props.id)
//   },[])

  const handleClick=()=>{
      setOpen(!open)
      props.getActivities(props.id, props.activities)
    //   aqui se le pasa la lista actual, para que en el action se verifique si es que el props.id (el id del itinerario) esta en
    // props.activities. props.activities.map(e=>e.itinerary===id)
  }

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
            <Col className="text-center bg-info p-3 m-1">
              <p className="display-6">Activities</p>
              <img src={Gear} alt="gear" id="gear" />
              <p className="text-light fw-bold">Under Construction</p>
            </Col>
            <Col className="text-center bg-warning p-3 m-1">
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
      activities:state.itinerariesReducer.activities
    };
  };
  
  const mapDispatchToProps = {
    getActivities : itinerariesActions.getActivities
  };

export default connect(mapStateToProps,mapDispatchToProps)(ActivitiesSection);
