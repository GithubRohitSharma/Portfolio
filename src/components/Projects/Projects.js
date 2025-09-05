import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ResourceBank from "../../Assets/Projects/ResourceBank.png"; // Add your own image in assets
import insiderJobs from "../../Assets/Projects/insiderJobs.png"; // Add your own image in assets
import Prescripto from "../../Assets/Projects/Prescripto.png"; // Add your own image in assets

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
              imgPath={ResourceBank}
              isBlog={false}
              title="ResouceBank NITJ IT"
              description="A full-stack web application tailored for NIT Jalandhar’s IT department, offering centralized access to academic materials like previous year question papers, subject‐wise course resources, and administrative tools with role-based authentication. It’s built with Node.js, Express, MongoDB, Handlebars, JWT, and Google Drive integration—featuring responsive design, file uploads, search, ratings, and an admin dashboard for content and user management."
              ghLink="https://github.com/GithubRohitSharma/RESOURCE-BANK-NITJ-IT"
              demoLink="https://resource-bank-nitj-it.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insiderJobs}
              isBlog={false}
              title="InsiderJobs"
              description="A recruitment platform where job seekers can search/apply for jobs and companies can post/manage openings. Features include dual authentication (Clerk + JWT), role-based access control, job filters, and Cloudinary for secure file uploads."
              ghLink="https://github.com/GithubRohitSharma/jobPortal"
              demoLink="https://job-portal-client-one-murex.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Prescripto}
              isBlog={false}
              title="Prescripto"
              description="Prescripto is a full-stack MERN doctor appointment platform that lets patients discover doctors, book and manage appointments with payments, while providing doctors and admins with dedicated portals for scheduling, availability, and platform management."
              ghLink="https://github.com/GithubRohitSharma/prescripto"
              demoLink="https://prescripto-frontend-dun-phi.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;