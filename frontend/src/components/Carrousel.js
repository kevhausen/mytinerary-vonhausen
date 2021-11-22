import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import CarrouselPack from "./CarrouselPack.js";

function Carrousel() {
  const [array, setArray] = useState([{ name: "", country: "", image: "" }]);
  const [index, setIndex] = useState(0);
  const [interval, setInterval] = useState(2000);
  // set the amount of desired images per slide
  const imagesPerSlide = 4;

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
    console.log("se simula fetch");
  }, []);

  const simulateFetch = (list) => {
    setArray(list);
  };
//   el handleSelect tendria que modificar el state del componente CarrouselPack, para que este se actualice con cada click. Hay que sacar
// el modificamiento al state del componente Carrousel. 
  const handleSelect = (selectedIndex, e) => {
    if (e.target.className.includes("next")) {
      if (index >= array.length - imagesPerSlide) {
        setIndex(0);
      } else {
        setIndex(index + imagesPerSlide);
      }
    } else {
      if (index <= 0) {
        setIndex(array.length - imagesPerSlide);
      } else {
        setIndex(index - imagesPerSlide);
      }
    }
  };
  const araytest = [1, 2, 3];

  const handleInterval = (number, direction) => {
    if (number === 0) {
      setInterval(2000);
    } else {
      setInterval(0);
      setIndex(index + 4);
    }
    console.log(number);
    console.log(direction);
  };

  // tengo que hacerle un override a la flechita y al intervalo, para que cuando uno de los dos ocurra, se haga un setState de index +4
  return (
    <Carousel interval={null} onSelect={handleSelect}>
      {console.log(
        "se ejecuta return con indice " + index + " y array " + array.length
      )}
      {araytest.map((e) => (
        <Carousel.Item>
          <Row xs={1} md={2} className="g-4">
            {/* <CarrouselPack
              list={array}
              index={index}
              imgPerSlide={imagesPerSlide}
            /> */}
            {array.slice(index, index + imagesPerSlide).map((city) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={city.image} />
                  {console.log("se renderiza" + city.name)}
                  <Card.Body>
                    <Card.Title>{city.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
      {/* <Carousel.Item>
  <Row xs={1} md={2} className="g-4">
  {array.slice(index,index+imagesPerSlide).map((city) => (
      
    <Col>
      <Card>
        <Card.Img variant="top" src={city.image} />
        {
            console.log('se renderiza' + city.name)
        }
        <Card.Body>
          <Card.Title>{city.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
  </Carousel.Item>
   */}
    </Carousel>
  );
}

export default Carrousel;
