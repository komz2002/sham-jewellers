import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './Last.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Last() {  
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div className="last">
        <Container>
          <Row>
            <Col xs={12} md={4} data-aos="fade-up">
              <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-16.jpg" thumbnail />
              <h1>Neckline Nuances</h1>
              <p>Stand out subtly with these fine neck pieces in gold, curated with utmost detailing and perfections. With patterns woven to impress and stones engraved to wow, take home these neckline necessities today!</p>
            </Col>
            <Col xs={12} md={4} className="mt-5">
              <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-17.jpg" thumbnail />
              <h1>The Golden Armour</h1>
              <p>Dressed in his best, he arrives to claim his bride. Select from several bold strings of gold for the groom, chosen for his special day.</p>
            </Col>
            <Col xs={12} md={4} data-aos="fade-up">
              <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-18.jpg" thumbnail />
              <h1>A Glistening Glee</h1>
              <p>As the beauty of the bride's smile is unmatched, we can only try to add glitter to her special day, with exemplary tikkas for her forehead, stunning sets for her neckline and beautiful bangles and karas for her delicate wrists.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Last; 
