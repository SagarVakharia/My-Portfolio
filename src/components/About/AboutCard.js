import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone,
            <br /> I am <span className="purple">Sagar Vakharia </span>
            from <span className="purple"> Nagpur, India.</span>
            <br />
            Front-end developer with a focus on React development, currently
            contributing my expertise from{" "}
            <span className="purple">April 2021 onwards</span>. With{" "}
            <span className="purple">3years </span> of experience in React JS.
            My passion lies in crafting seamless and visually appealing UI ,
            translating design concepts into interactive and responsive web
            applications I have successfully analyzed, designed, developed, and
            implemented various UI, webparts and adaptive cards.
            <br />
            I am passionate about leveraging technology to drive efficiency and
            innovation in the ever-evolving world of React development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building websites that React to anything!"{" "}
          </p>
          <footer className="blockquote-footer">Sagar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
