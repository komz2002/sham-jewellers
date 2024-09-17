import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="container">
        <Carousel>
          <Carousel.Item className="hero-container">
            <img
              src="http://4.bp.blogspot.com/-AB7ufRswkRw/TlVK-w6RP-I/AAAAAAAABOg/WcPlqO7yFS8/s1600/studded-gold-jewellery-collection.jpg"
              alt="description"
            />
          </Carousel.Item>
          <Carousel.Item className="hero-container">
            <img
              src="https://shamjewellers.com/wp-content/uploads/2018/06/Top-Banners-02.jpg"
              alt="description"
            />
          </Carousel.Item>
          <Carousel.Item className="hero-container">
            <img
              src="http://1.bp.blogspot.com/-eA_p4L_nZkc/TlVJNpej2NI/AAAAAAAABOA/KdUUUpyUZmk/s1600/necklace-zoom-DSC_9797.jpg"
              alt="description"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Hero;
