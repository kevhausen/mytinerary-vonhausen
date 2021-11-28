import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import CarrouselPack from "./CarrouselPack.js";

function Carrousel() {
  const [array, setArray] = useState([{ name: "", country: "", image: "" }]);
  const imagesPerSlide = 4;
  let currentIndex = 0;

  useEffect(() => {
    fetch("http://localhost:4000/api/carrousel-cities")
      .then(res=> res.json())
      .then(data=> 
        setArray(data.response.carrouselCities))
      .catch()
  }, []);


  const handleSelect = (_, e) => {
    if (e !== undefined) {
      e.target.className.includes("next")
        ? currentIndex >= array.length
          ? (currentIndex = 0)
          : (currentIndex = currentIndex + imagesPerSlide)
        : currentIndex <= 0
        ? (currentIndex = array.length - imagesPerSlide)
        : (currentIndex = currentIndex - imagesPerSlide);
    }
  };

  return (
      
    <Carousel interval={3000} onSelect={handleSelect}>
      {Array.from({ length: array.length / imagesPerSlide }).map(
        (e, mapIndex) => (
          <Carousel.Item key={mapIndex} className="p-2">
            <Row xs={1} sm={2} md={2} lg={4} className="g-4">
              <CarrouselPack
                list={array}
                index={currentIndex}
                imgPerSlide={imagesPerSlide}
              />
              <span className="invisible">
                {(currentIndex += imagesPerSlide)}
              </span>
            </Row>
          </Carousel.Item>
        )
      )}
    </Carousel>
  );
}

export default Carrousel;
