import Container from "react-bootstrap/esm/Container"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import Pinterest from '../assets/pinterest.png'
import Youtube from '../assets/youtube.png'
import Image from "react-bootstrap/Image";

function Footer(){
    return (

        <Container fluid className="bg-dark text-white" >
 <Row>
    <Col className="d-flex justify-content-center align-items-center">logo</Col>
    <Col className="d-flex justify-content-center flex-column">
        <p className='text-center'>menu navegacion</p>
        <p className='text-center'>sdfsdf</p>
        <p className='text-center'>sfsdf</p>
        </Col>
    <Col className="d-flex justify-content-center align-items-center">
        
        
        
        <Row>
        <Col><Image className='social-icon' src={Facebook} ></Image></Col>
            
        <Col><Image className='social-icon' src={Instagram} ></Image></Col>
        <Col> <Image className='social-icon' src={Youtube} ></Image></Col>
        <Col> <Image className='social-icon' src={Twitter} ></Image></Col>
        <Col> <Image className='social-icon' src={Pinterest} ></Image></Col>

        </Row>
        
        </Col>
  </Row>
        </Container>
    )
}

export default Footer