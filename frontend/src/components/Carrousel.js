import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import CarrouselPack from "./CarrouselPack.js";
import {connect} from "react-redux"
import citiesActions from "../redux/actions/citiesActions.js"

function Carrousel(props) {
  const imagesPerSlide = 4;
  let currentIndex = 0;
  let array = props.store.cities
  console.log('COMPONENT: abajo estaria el array de Carrousel')
  console.log(array)

  useEffect(() => {
      console.log('COMPONENTE: se ejecuta la action getCities() desde useEffect')
      props.getCities()
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
        (_, mapIndex) => (
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

const mapStateToProps = (state)=>{
    console.log('COMPONENTE: en mapStateToProps con store:')
    console.log(state.citiesReducer)
    return{
        store : state.citiesReducer
    }
}

const mapDispatchToProps = {
    getCities : citiesActions.getCities,
}
export default connect(mapStateToProps, mapDispatchToProps)(Carrousel);
