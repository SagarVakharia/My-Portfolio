import React from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import her from "../../Assets/Projects/her.jpg"

const Ankitaaa = () => {
  return (
    <Container fluid className="project-section">
    <Particle />
    <Container>
    <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color:"white"}}>
              Dear Ankitaaa, <strong className="purple"><br/> Thank you so much for your gift</strong>
              <img  style ={{height: "450px", width: "450px"}} src={her} alt="about" className="img-fluid" />
            </h1>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
          </Col>
        </Row>
    </Container>
    </Container>
  )
}

export default Ankitaaa
