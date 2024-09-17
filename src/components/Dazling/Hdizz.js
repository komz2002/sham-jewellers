import React from 'react'
import Col from 'react-bootstrap/Col';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';


function Hdizz() {
  return (
    <>
    <div>
      <div className="riwaaz">Dazling
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
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/b-500x500.jpg"  thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-08-500x500.jpg"  thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/c-500x500.jpg" thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/e-500x500.jpg" thumbnail />
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
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-05-500x500.jpg"  thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/d-500x500.jpg"  thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/a-500x500.jpg" thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
        <Col xs={12} md={3}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-07-500x500.jpg" thumbnail />
          <div><Link to="/Riwaaz"className="ink">Riwaaz</Link></div>
          <Link to="/"className="royal">Royal </Link>
        </Col>
      </Row>
    </Container>
          </div>
          </div>
  </>
  )
}

export default Hdizz