import React from 'react'
import "./Heroabout.css"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';




function Haboutsection() {
  return (
   <>
    <div className="responsive-background">
    </div>
    <div className="abouts">
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-3 contact">
          About Us
          </div>
          <div className="col-md-7 data">
          With an intent to bring in fair dealings at the best price in the world of jewellery, Sham Jewellers was born in 1990. The biggest and most distinguished jewellery store in the region , Sham Jewellers proudly presents to its customers a grand variety of the most glorious and chic picks from the jewellery industry, leaving them truly spoilt for choice. Be it basic gold bangles or stellar wedding masterpieces, Sham Jewellers offers a ravishing range of gold, kundan, jadau, meenakari, solitaire, polki and diamond jewellery with the  promise of transparent policies and warm service. Today, after over three decades of its inception, Sham stands synonymous with 100% hallmarked jewellery, 100% transparency in making charges, 100% commitment proved by same buying and selling rate with no overcharge in the name of wastage and 100% return guarantee, cash or exchange. Step into this world of opulence, magnificence and excellence and bedeck yourself with a scintillating sparkle.
          </div>
        </div>
    </div>
    </div>
    <div className='abouts2'>
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-3 contact">
          Contact
          </div>
          <div className="col-md-7 data">
          Telephone: +91 172 5089013<br/>
shamjewellers34@yahoo.com<br/>

SCO 168-171, Sector 34 A, (Near Labour Chowk), Chandigarh<br/>
Monday to Sunday: 10 am to 8 pm
          </div>
        </div>
    </div>
    </div>
    </div>
    <div className='abouts3'>
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-3 contact">
          Team
          </div>
          <div className="col-md-7 data">
    <Container>
      <Row>
      <Col xs={12} md={4}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/3-4.jpg" thumbnail />
          <h6 >Partner</h6>
          <p>Harinder Singh Khurana</p>
        </Col>
        <Col xs={12} md={4}>
          <Image src="https://shamjewellers.com/wp-content/uploads/2018/06/2-1.jpg" thumbnail />
          <h6>Partner</h6>
          <p>Gagan Khurana
          gagan@shamjewellers.com</p>
        </Col>
      </Row>
    </Container>
          </div>
        </div>
    </div>
    </div>
    </div>





  
    </div>

   </>
    
  )
}

export default Haboutsection;