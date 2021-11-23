import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import CarrouselPack from "./CarrouselPack.js";
import Container from "react-bootstrap/esm/Container";

function Carrousel() {
  const [array, setArray] = useState([{ name: "", country: "", image: "" }]);
  const imagesPerSlide = 4;
  let currentIndex = 0

  useEffect(() => {
    const citiesArray = [
      {
        name: "Bangkok",
        country: "Thailand",
        image:
          "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-bangkok-thailand.jpg",
      },
      {
        name: "Delhi",
        country: "India",
        image:
          "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-delhi-india.jpg",
      },
      {
        name: "Dubai",
        country: "United Arab Emirates",
        image:
          "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-dubai-united-arab-emirates.jpg",
      },
      {
        name: "Hong Kong",
        country: "China",
        image:
          "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-hong-kong.jpg",
      },
      {
        name: "Istanbul",
        country: "Turkey",
        image:
          "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-istanbul-turkey.jpg",
      },
      {
        name: "Kuala Lumpur",
        country: "Malaysia",
        image:
          "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-kuala-lumpur-malaysia.jpg",
      },
      {
        name: "London",
        country: "England",
        image:
          "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-london-england.jpg",
      },
      {
        name: "Macau",
        country: "China",
        image:
          "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-macau-china.jpg",
      },
      {
        name: "New York",
        country: "United States",
        image:
          "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-new-york-city.jpg",
      },
      {
        name: "Paris",
        country: "France",
        image:
          "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-paris-france.jpg",
      },
      {
        name: "Tokyo",
        country: "Japan",
        image:
          "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-tokyo-japan.jpg",
      },
      {
        name: "Rome",
        country: "Italy",
        image:
          "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-rome-italy.jpg",
      },
    ];
    simulateFetch(citiesArray);
  }, []);

  const simulateFetch = (list) => {
    setArray(list);
  };
  const handleSelect = (_, e) => {
      if(e !== undefined){
        e.target.className.includes("next") ? (currentIndex >= array.length ? currentIndex=0 : currentIndex = currentIndex + imagesPerSlide) : 
         (currentIndex <= 0 ? currentIndex = array.length - imagesPerSlide : currentIndex = currentIndex - imagesPerSlide )
      }
  };

  return (
      
    <Carousel interval={3000} onSelect={handleSelect} >
      
      {Array.from({length : array.length/imagesPerSlide }).map((e,mapIndex) => (
        <Carousel.Item key={mapIndex}>
          <Row xs={1} sm={2} md={2} lg={4} className="g-4">
            <CarrouselPack
              list={array}
              index={currentIndex}
              imgPerSlide={imagesPerSlide}
              
            />
            <span className="invisible">
            {currentIndex += imagesPerSlide}
            </span>
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
    
  );
}

export default Carrousel;
