import React from 'react'
import "./Latest.css"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';


function Latest() {
  return (
    <>
    <div className="latest">
      <center><p className="arriv">Latest arrivals</p></center>
    <Container>
      <Row>
        <Col xs={6} md={3}>

<div className="container box">
  <img src="https://shamjewellers.com/wp-content/uploads/2018/06/e.jpg" alt="Avatar" class="image"/>
  <div className="overlay lay">
    <div className="text">Dazling diamonds
    <div className="ear">Pasiley Earrings</div>
    </div>
   
  </div>
</div>
        </Col>
        <Col xs={6} md={3}>
        <div className="container box">
  <img src="https://shamjewellers.com/wp-content/uploads/2018/06/d.jpg" alt="Avatar" class="image"/>
  <div className="overlay lay">
  <div className="text">Dazling diamonds
    <div className="ear">Pasiley Earrings</div>
    </div>
   
  </div>
</div>
        </Col>
        <Col xs={6} md={3}>
        <div className="container box">
  <img src="https://shamjewellers.com/wp-content/uploads/2018/06/9-1.jpg" alt="Avatar" class="image"/>
  <div className="overlay lay">
  <div className="text">Dazling diamonds
    <div className="ear">Pasiley Earrings</div>
    </div>
   
  </div>
</div>
        </Col>
        <Col xs={6} md={3}>
        <div className="container box">
  <img src="https://shamjewellers.com/wp-content/uploads/2018/06/a.jpg" alt="Avatar" class="image"/>
  <div className="overlay lay">
  <div className="text">Dazling diamonds
    <div className="ear">Pasiley Earrings</div>
    </div>
   
  </div>
</div>
        </Col>
      </Row>
    </Container>
    </div>
       </>
  )
}

export default Latest;
