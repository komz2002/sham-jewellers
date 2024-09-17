import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import "./Saga.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Saga() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="third">
        <Container>
          <Row>
            <Col xs={12} md={6} data-aos="fade-right">
              <Image
                src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-09.jpg"
                thumbnail
              />
            </Col>
            <Col xs={12} md={6} sm={12} className="d-flex align-items-center" data-aos="fade-left">
              <div>
                <div className="sensa">A sensational saga</div>
                <p>
                  Breathtaking bangles and karas are carved with care in gold
                  and jewels. Crafted with care, embellished with precious gems,
                  they are refined to perfection for the beautiful wrists that
                  wear them with pride on those special days.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12} md={6} className="d-flex align-items-center" data-aos="fade-right">
              <div>
                <div className="sensa">A sensational saga</div>
                <p>
                  Breathtaking bangles and karas are carved with care in gold
                  and jewels. Crafted with care, embellished with precious gems,
                  they are refined to perfection for the beautiful wrists that
                  wear them with pride on those special days.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} data-aos="fade-left">
              <Image
                src="https://shamjewellers.com/wp-content/uploads/2018/06/2.jpg"
                thumbnail
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Saga;
