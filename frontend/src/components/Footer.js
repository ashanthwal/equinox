import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <Navbar bg="dark" className="mt-5">
      <Col className="text-center py-3 ftxt">Copyright &copy; Equinox</Col>
      <Col className="text-center py-3 ftxt">
        Follow us on
        <a href="https://www.facebook.com/">
          <i
            href="www.facebook.com"
            className="fab fa-facebook-square fa-2x ficon	"
          ></i>
        </a>
        <a href="https://www.instagram.com/">
          <i className="fab fa-instagram fa-2x ficon"></i>
        </a>
      </Col>
    </Navbar>
  );
};

export default Footer;
