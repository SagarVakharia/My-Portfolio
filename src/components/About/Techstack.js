import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  // DiNodejs,
} from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
// import {  SiRedis, SiFirebase, SiNextdotjs, SiSolidity, SiPostgresql,} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaHtml5 />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col> */}
    </Row>
  );
}

export default Techstack;
