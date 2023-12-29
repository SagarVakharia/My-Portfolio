import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import expense from "../../Assets/Projects/expense.jpg";
import portfolio from "../../Assets/Projects/codeEditor.png";
import crud from "../../Assets/Projects/crud.jpg";
import TicTacToe from "../../Assets/Projects/TicTacToe.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="To track your expenses and keep them in check."
              ghLink="https://github.com/SagarVakharia/ExpenseTracker"
              demoLink="https://expense-tracker-sable-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio - Current Site"
              description="One can know about me from here."
              ghLink="https://github.com/SagarVakharia/My-Portfolio"
              demoLink="https://my-portfolio-theta-six-34.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TicTacToe}
              isBlog={false}
              title="Tic=Tac-Toe"
              description="Whenever you get bored just click here for a fun game."
              ghLink="https://github.com/SagarVakharia/Tic-Tac-Toe"
              demoLink="https://tic-tac-toe-vert-kappa.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              isBlog={false}
              title="CRUD operations."
              description="People can playaround here doing CRUD operations"
              ghLink="https://github.com/SagarVakharia/CRUD"
              demoLink="https://crud-wheat-tau.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
