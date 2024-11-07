import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Foooter.css"; // Create a custom CSS file for the footer styling

function Foooter() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <h5>SportFusion</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              iaculis lorem vitae semper accumsan. Aenean justo purus, placerat
              eu mi.
            </p>
          </Col>
          <Col lg={4} md={6}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>
              &copy; {new Date().getFullYear()} SportFusion. All rights
              reserved.
            </p>
          </Col>
          <Col lg={4} md={12}>
            <h5>Contact Us</h5>
            <address>
              Address: Väg 12, Gävle, Sverige
              <br />
              Phone: +46 7611211212
              <br />
              Email: support@sportfusion.se
            </address>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Foooter;
