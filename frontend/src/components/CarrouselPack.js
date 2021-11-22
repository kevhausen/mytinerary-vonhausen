import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useEffect, useState} from 'react'

function CarrouselPack(props){
    // como chucha se usan los props
    

    return(
        <>
        {props.list.slice(props.index,props.index+props.imagesPerSlide).map((city) => (
      
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
          </>
    )
}

export default CarrouselPack