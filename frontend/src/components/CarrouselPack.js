import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

function CarrouselPack(props){
    return(
        <>
        {props.list.slice(props.index,props.index+props.imgPerSlide).map((city) => (
                <Col>
              <Card>
                <Card.Img variant="top" src={city.image} />
                <Card.Body>
                  <Card.Title>{city.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
          </>
    )
}

export default CarrouselPack