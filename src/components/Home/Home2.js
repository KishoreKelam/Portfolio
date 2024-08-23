import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowThroughHeart } from "react-icons/bs";
import { CiCoffeeCup } from "react-icons/ci";
import {
  GiMusicalNotes,
  GiPowerLightning,
  GiSwordsPower,
  GiSoccerKick,
} from "react-icons/gi";
import { SiSuperuser } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <div style={{ textAlign: "left" }}>
          <span
            className="badge badge-warning"
            style={{
              fontSize: "1.8em",
              display: "inline-block",
              textAlign: "left",
              backgroundColor: "rgba(255, 193, 7, 0.2)",
              border: "2px solid rgba(255, 193, 7, 0.2)",
              borderRadius: "10px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
          >
            Warning:
          </span>
          {"   "}
          <b style={{ fontSize: "1.8em", color: "white" }}>Code Ninja Ahead!</b>
        </div>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", paddingTop: "10px" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              {/* <br /> */}
              {/* <br />*/}A senior software engineer by day and a coding ninja
              by night. With over{" "}
              <i>
                <b className="purple"> 7 years of experience</b>
              </i>
              {"  "}
              in building scalable and efficient applications, I'm on a mission
              to make technology more human-friendly{" "}
              <span>(and maybe even save the world from boring code).</span>
              <br />
              <br />
              <b>
                When I'm not geeking out over{" "}
                <i className="purple">
                  Java, JavaScript, Python, AWS, Azure, GCP, &nbsp;
                </i>
                you can find me:
              </b>
              <br />
              <br />
              <CiCoffeeCup style={{ color: "#FFC107" }} />
              &nbsp; Sipping coffee and contemplating the meaning of life (or at
              least, the meaning of code)
              <br />
              <GiMusicalNotes style={{ color: "#FFC107" }} />
              &nbsp; Rocking out to heavy metal music (don't worry, I won't code
              to it)
              <br />
              <GiSoccerKick style={{ color: "#FFC107" }} />
              &nbsp; Passionate about catching Chelsea FC in action on the
              pitch!
              <br />
              <br />
              <i>
                <b className="purple">My superpowers include: </b>
              </i>
              <br />
              <br />
              <GiSwordsPower style={{ color: "#FFC107" }} />
              &nbsp; Turning complex problems into simple solutions
              <br />
              <GiPowerLightning style={{ color: "#FFC107" }} />
              &nbsp; Making code look like art (okay, maybe not, but I try)
              <br />
              <SiSuperuser style={{ color: "#FFC107" }} />
              &nbsp; Drinking an excessive amount of coffee <br /> <br />
              <i>
                If you're ready for a coding adventure that's out of this world,
                let's collaborate and make some magic happen!
              </i>
            </p>
            {/* original */}
            {/* <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to <b className="purple">Blockchain.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p> */}
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kishorekelam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kishorekelam/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Element_626"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/___.kishorekumar.___/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
