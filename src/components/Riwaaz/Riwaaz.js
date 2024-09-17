import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import "./Riwaaz.css"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function Riwaaz() {
  return (
    <>
    <div className="riwaaz">RIWAAZ
    </div>
    <div className="container-fluid">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-12 col-md-10 mb-3 mb-md-0 action ">
           
          </div>
          <div className="col-12 col-md-2 text-md-right text-center">
            Showing all 12 results
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid thum">
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/2-2-500x500.jpg"  thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/3-5-500x500.jpg"  thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2017/06/3-500x500.jpg" thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/1-1-500x500.jpg" thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
      </Row>
    </Container>
          </div>
          <div className="container-fluid thum">
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2017/06/4-500x500.jpg"  thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/3-500x500.jpg"  thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/2-3-500x500.jpg" thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/4-1-500x500.jpg" thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
      </Row>
    </Container>
          </div>
          <div className="container-fluid thum">
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/4-500x500.jpg"  thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/1-2-500x500.jpg"  thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/2-3-500x500.jpg" thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2017/06/1-500x500.jpg" thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
      </Row>
    </Container>
          </div>
          
      
    </>
  );
}

export default Riwaaz;