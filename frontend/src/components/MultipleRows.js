import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Slider from "react-slick";




export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 1
    };
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    return (
      <Container fluid className="slideShow">
          <Container>

          
        <h2 className="text-light">Multiple Rows</h2>
        <Slider {...settings}>
            {/* generar div de forma dinamica, segun la cantidad de elementos de un array */}
            {
                numbers.map(e=>{
                    return(
                    <div>
                        <h3>{e}</h3>
                      </div>
                      )
                        
                    
                })

            }
        
        </Slider>
        </Container>
      </Container>
    );
  }
}