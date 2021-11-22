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
      slidesPerRow: 1,
    };
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    /* generar div de forma dinamica, segun la cantidad de elementos de un array */
    /* en la tercera seccion, debe haber un carrousel, y el item de 4 cartas, debe ser escrito en un componente aparte, 
            para que se renderice solo lo necesario. este componente lo llamamos slideItem. el slideItem le va a hacer un map a una lista de imagenes, 
            que va a entregar de 4 en 4 con cada click o intervalo de tiempo. para sacar de 4 en 4, es necesario definir un state inicial con idex 0, 
            que ira seteandose con cada intervalo o click, en 4+ (es decir, inicialmente el index seria 0, lo que cargaria las primeras 4 imagenes del array, 
            luego del click a una flechita, o intervalo; se setea el state, sumandole 4 al index, generando un re render ahora con index 4, 
            lo que mostraria end efinitiva las siguientes 4 imagenes del array. esto se logra con el metodo splice al array de imagenes. 
            seria array.splice(this.state.index,4). en el caso que el index supere las imagenes totales habria de 
            condiconar con if(currentIndex+{4}>=array.length : entonces, setIndex a 0) esto lo que hace es que si se llega al final de la lista, 
            volver al inicio. Hay que hacer lo mismo para atras,es decir, si el currentIndex < 0, entonces se setIndex a array.length-1-{4}; 
            esto quiere decir, que si volvemos desde la primera imagen, se va a las ultimas 4.) */
    return (
      <Container fluid className="slideShow">
        <Container>
          <h2 className="text-light">Multiple Rows</h2>
          <Slider {...settings}>
            {numbers.map((e) => {
              return (
                <div>
                  <h3>{e}</h3>
                </div>
              );
            })}
          </Slider>
        </Container>
      </Container>
    );
  }
}
