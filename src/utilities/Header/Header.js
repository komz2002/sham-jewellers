import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleMouseOver = () => setShowDropdown(true);
  const handleMouseOut = () => setShowDropdown(false);
  const location = useLocation();

  return (
    <>
      <Navbar className="head" data-bs-theme="dark"></Navbar>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="sham" as={Link} to="/">
            <img
              alt="logo"
              src="https://shamjewellers.com/wp-content/uploads/2018/06/Untitled-1.png"
              width="100%"
              height="50%"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto space">
              <Nav.Link
                as={Link}
                to="/"
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={
                  location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Nav.Link>
              
              <NavDropdown
                title={<Link to="/Products" className="nav-dropdown-link">Products</Link>}
                id="basic-nav-dropdown"
                className="dropdown-hover"
                show={showDropdown}
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
              >
                <NavDropdown.Item as={Link} to="/riwaaz" className="nav-dropdown-link">
                  Riwaaz
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dazling" className="nav-dropdown-link">
                  Dazling
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Vivhaa" className="nav-dropdown-link">
                  Vivhaa
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/contact"
                className={
                  location.pathname === "/contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
