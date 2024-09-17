import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import "./Card.css";
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';



function Card() {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])
  return (
    <div className="second">
      <Container>
        <Row>
          <Col xs={12} md={4} data-aos="fade-up" >
            <Image
              src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-02.jpg"
              thumbnail
            />
            <h1>The Sheen of Shringaar</h1>
            <p>
              The ideal embellishment to the bridal glow, we bring to you a
              collection of striking pieces in gold, handpicked for her special
              day. Carved meticulously, choose from an alluring assortment of
              statement sets, royal kadas and ravishing Rani Haars.
            </p>
          </Col>
          <Col xs={12} md={4} className="mt-5">
            <Image
              src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-03.jpg"
              thumbnail
            />
            <h1>Paint the town Gold</h1>
            <p>
              Tradition meets modernity in this stunning selection of sets,
              crafted with an assurance to stand out among the crowd. Bring home
              one of these spectacular statement pieces as an essential addition
              to your jewellery box.
            </p>
          </Col>
          <Col xs={12} md={4} data-aos="fade-up">
            <Image
              src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-04.jpg"
              thumbnail
            />
            <h1>The Auspicious and Awe-inspiring</h1>
            <p>
              As she adorns her attire on her wedding day, we feel honoured to
              provide the essentials to complete her auspicious ensemble. View
              our magnificent picks for the most special day of a woman's life.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Card;
