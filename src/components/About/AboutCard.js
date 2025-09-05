import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohit Sharma</span>{" "}
            from <span className="purple">Patiala, Punjab, India.</span>
            <br />
            I am currently pursuing{" "}
            <span className="purple">B.Tech in Information Technology</span>{" "}
            at <span className="purple">NIT Jalandhar</span>.
            <br />
            <br />
            I am a <span className="purple">Software Developer Enthusiast</span>{" "}
            with experience as a Full-Stack Developer Intern at{" "}
            <span className="purple">The Dev Angel (Byteoski)</span>.
            <br />
            <br />
            Apart from coding, here are a few activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing & Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Podcasts (Self-growth & Tech)
            </li>
            <li className="about-activity">
              <ImPointRight /> Volunteering at Animal & Bird Welfare Centers
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Consistency and discipline create the foundation for success."
          </p>
          <footer className="blockquote-footer">Rohit Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;