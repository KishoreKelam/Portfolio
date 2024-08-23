import React from "react";
import Card from "react-bootstrap/Card";
import { GiPointySword } from "react-icons/gi";
import { MdMilitaryTech } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Kishore Kumar Kelam </span>a
            seasoned <span className="purple">Senior Software Engineer </span>{" "}
            with a passion for building scalable and efficient applications.
            With over <span className="purple">7 years of experience </span> in
            <span className="purple">&nbsp;leading</span> and{" "}
            <span className="purple">
              delivering large-scale distributed systems
            </span>{" "}
            and
            <span className="purple">
              &nbsp;enterprise CRM/CSM/SaaS solutions,
            </span>{" "}
            I excel in <span className="purple">cloud-native</span> and{" "}
            <span className="purple">
              Java expertise, Microservices architecture,
            </span>{" "}
            and <span className="purple">technical leadership.</span>
          </p>
          <br />
          <h3 style={{ fontSize: "1.5em", paddingBottom: "10px" }}>
            My <strong className="purple">Achievements</strong>
          </h3>

          {/* <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently employed as a software developer at Juspay.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p> */}
          <ul style={{ paddingLeft: "inherit" }}>
            <li className="about-activity" style={{ fontSize: "smaller" }}>
              <GiPointySword style={{ color: "#FFC107" }} /> Successfully
              managed critical server failures, ensuring 99.9% uptime and
              minimizing customer impact
            </li>
            <li
              className="about-activity"
              style={{ fontSize: "smaller", paddingTop: "5px" }}
            >
              <GiPointySword style={{ color: "#FFC107" }} /> Optimized
              cloud-based Oracle SQL relational database performance by 30%
            </li>
            <li
              className="about-activity"
              style={{ fontSize: "smaller", paddingTop: "5px" }}
            >
              <GiPointySword style={{ color: "#FFC107" }} /> Implemented
              web-based Microservices applications, resulting in a 50% increase
              in user engagement
            </li>
            <li
              className="about-activity"
              style={{ fontSize: "smaller", paddingTop: "5px" }}
            >
              <GiPointySword style={{ color: "#FFC107" }} /> Provided training
              and support to junior developers, resulting in a 25% increase in
              team productivity
            </li>
          </ul>
          <br />
          <h3 style={{ fontSize: "1.5em", paddingBottom: "10px" }}>
            My <strong className="purple">Skills</strong>
          </h3>
          <ul style={{ paddingLeft: "inherit" }}>
            <li className="about-activity" style={{ fontSize: "smaller" }}>
              <MdMilitaryTech style={{ color: "#FFC107" }} />{" "}
              <strong className="purple">Programming:</strong> &nbsp;
              <i>
                Java, JavaScript, Angular, React JS, Node JS, Python, C++,
                Spring Boot, MySQL, MongoDB, PostgreSQL
              </i>
            </li>
            <li
              className="about-activity"
              style={{ fontSize: "smaller", paddingTop: "5px" }}
            >
              <MdMilitaryTech style={{ color: "#FFC107" }} />{" "}
              <strong className="purple">Cloud and Servers:</strong> &nbsp;{" "}
              <i>
                AWS EC2, S3, IAM, Dynamo DB, ELB, Jenkins, Azure cloud, Docker,
                Kubernetes, Node, Dynatrace, Elasticsearch, Logstash, Kibana
              </i>
            </li>
            <li
              className="about-activity"
              style={{ fontSize: "smaller", paddingTop: "5px" }}
            >
              <MdMilitaryTech style={{ color: "#FFC107" }} />{" "}
              <strong className="purple">Frameworks and Tools:</strong> &nbsp;
              <i>
                Next JS, Express JS, Gatsby JS, TensorFlow, Keras, PyBullet,
                UiPath, Google Analytics, Google Ads, JUnit, Mockito, Karma,
                Cypress, Jasmine, Jest, SoapUI, Postman, Swagger, Apache JMeter
              </i>
            </li>
            <li
              className="about-activity"
              style={{ fontSize: "smaller", paddingTop: "5px" }}
            >
              <MdMilitaryTech style={{ color: "#FFC107" }} />{" "}
              <strong className="purple">Databases:</strong> &nbsp;
              <i>
                Oracle, MySQL, Microsoft SQL Server, PostgreSQL, MongoDB, NoSQL,
                IBM Db2, MariaDB, Redis
              </i>
            </li>
            <li
              className="about-activity"
              style={{ fontSize: "smaller", paddingTop: "5px" }}
            >
              <MdMilitaryTech style={{ color: "#FFC107" }} />{" "}
              <strong className="purple">Testing:</strong> &nbsp;
              <i>
                JUnit, Cypress, Mockito, Jasmine, Karma, SoapUI, Postman,
                Swagger, Apache JMeter
              </i>
            </li>
            <li
              className="about-activity"
              style={{ fontSize: "smaller", paddingTop: "5px" }}
            >
              <MdMilitaryTech style={{ color: "#FFC107" }} />{" "}
              <strong className="purple">Methodologies:</strong>
              &nbsp; <i>Scrum, Kanban, Agile, SAFe, CI/CD</i>
            </li>
            <li
              className="about-activity"
              style={{ fontSize: "smaller", paddingTop: "5px" }}
            >
              <MdMilitaryTech style={{ color: "#FFC107" }} />{" "}
              <strong className="purple">Operating Systems:</strong> &nbsp;
              <i>Windows, Linux</i>
            </li>
            <li
              className="about-activity"
              style={{ fontSize: "smaller", paddingTop: "5px" }}
            >
              <MdMilitaryTech style={{ color: "#FFC107" }} />{" "}
              <strong className="purple">Soft Skills:</strong> &nbsp;{" "}
              <i>
                Strong communication, team management, project delivery,
                stakeholder communication, cross-functional teams, time
                management, troubleshooting, optimization
              </i>
            </li>
          </ul>
          <br />

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is like a canvas, and algorithms are the brushstrokes that
            paint the future."{" "}
          </p>
          <footer className="blockquote-footer">Kishore Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
