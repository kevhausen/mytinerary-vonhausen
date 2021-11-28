import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function CarrouselPack(props) {
  let index = props.index;
  let imagesPerSlide = props.imgPerSlide;
  let citiesList = props.list;

  return (
    <>
        
      {citiesList.slice(index, index + imagesPerSlide).map((city) => (
        <Col key={city.name}>
          <Card>
            <Card.Img variant="top" src={city.image} alt={city.name} />
            <Card.ImgOverlay>
              <Card.Title className="text-white col-6 text-center image-title">
                {city.name}
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      ))}
      
    </>
  );
}

export default CarrouselPack;
