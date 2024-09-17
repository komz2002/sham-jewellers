import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './All.css';


function All() {
  return (
    <div className="fv">
    <center><p className="time">All time favorites</p></center>
  <Container>
    <Row>
      <Col xs={6} md={3}>
      <div className="container box">
  <img src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-13.jpg" alt="Avatar" class="image"/>
  <div className="overlay lay">
  <div className="text">Dazling diamonds
    <div className="ear">Pasiley Earrings</div>
    </div>
   
  </div>
</div>
      </Col>
      <Col xs={6} md={3}>
      <div className="container box">
  <img src="https://shamjewellers.com/wp-content/uploads/2017/06/2-1.jpg" alt="Avatar" class="image"/>
  <div className="overlay lay">
  <div className="text">Dazling diamonds
    <div className="ear">Pasiley Earrings</div>
    </div>
   
  </div>
</div>
      </Col>
      <Col xs={6} md={3}>
      <div className="container box">
  <img src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-11.jpg" alt="Avatar" class="image"/>
  <div className="overlay lay">
  <div className="text">Dazling diamonds
    <div className="ear">Pasiley Earrings</div>
    </div>
   
  </div>
</div>
      </Col>
      <Col xs={6} md={3}>
      <div className="container box">
  <img src="https://shamjewellers.com/wp-content/uploads/2017/06/1-2.jpg" alt="Avatar" class="image"/>
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
  )
}
export default All