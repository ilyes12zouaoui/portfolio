import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Projects from "../Projects/Projects";
import ContactUs from "../ContactUs/ContactUs";

import githubIcon from "./icons/github.png";
import linkedInIcon from "./icons/linkedin.png";
import googlePlusIcon from "./icons/google-plus.png";
import Skills from "./Skills/Skills";
import Experiences from "./Experiences/Experiences";
import Certifications from "./Certificiations/Certifications";
import Educations from "./Educations/Educations";
var Scroll = require("react-scroll");

var Element = Scroll.Element;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      className="text-center"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="p-2" style={{ fontSize: "20px" }}>
          email address: ilyes.zouaoui.work@gmail.com
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="m-auto" variant={"danger"} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
const FormLayout = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Element name="topScrollTo"></Element>
      <Container
        className="pt-4 pb-2"
        style={{ maxWidth: "800px", fontWeight: "500" }}
      >
        {" "}
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        {/* <div style={{ width: "70%", minWidth: "300px" }} className="fly-box"> */}
        <Row
          className="fly-box"
          style={{ marginTop: "130px", position: "relative", borderRadius: "15px" }}

        >
          <Col
            // lg={{ offset: 3, span: 6 }}
            // md={{ offset: 3, span: 6 }}
            // sm={{ offset: 2, span: 8 }}
            // xs={{ offset: 1, span: 10 }}
            className=" pr-5 pt-5 pl-5 pb-4"
          >
            <div>
              <div
                // className="mb-4 mt-4"
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                <img
                  src="images/users/ilyes4.jpg"
                  style={{
                    width: "180px",
                    height: "180px",
                    border: "2px solid white",

                    boxShadow: "rgba(0, 0, 0, 0.3) 0px -4px 23px -5px",
                    display: "block",
                    borderRadius: "50%",
                    // border: "2px solid #ccc"

                    // "box-shadow": "rgba(0, 0, 0, 0.2) 0px 0px 23px -5px"
                  }}
                />
              </div>
              <h1
                className="color-blue text-center"
                style={{
                  fontSize: "22px",
                  marginTop: "75px",
                }}
              >
                Ilyes Zouaoui
              </h1>
              <h1
                className="color-blue text-center mb-3 mt-2"
                style={{ fontSize: "22px" }}
              >
                Software Engineer
              </h1>
              <p
                style={{
                  color: "#666",
                  fontSize: "14px",

                  lineHeight: "22px",
                }}
              >
                Welcome! I'm an experienced Software Engineer based in Berlin with a Master's Degree in Software Engineering and over five years of experience in backend microservice development within agile teams.

My core expertise is in Java, Spring Boot, and Quarkus. I have extensive experience with database technologies like SQL, Hibernate, and NoSQL, as well as with modern DevOps practices, including Docker, Kubernetes, and CI/CD pipelines. While my primary focus is backend development, I also have firsthand experience with frontend technologies like JavaScript, TypeScript, Angular, and React.
</p>
              <p
                style={{
                  color: "#666",
                  fontSize: "14px",

                  lineHeight: "22px",
                }}
              >
                To enhance my expertise, I have acquired
                <a
                  href="https://www.credly.com/users/ilyes-zouaoui/badges"
                  className="color-blue"
                  style={{ fontSize: "14px" }}
                  target="_blank"
                >
                  {" "} six professional certificates{" "}
                </a> including "Professional Scrum Master II" and "VMware Spring Professional 2021". 
                In addition, I read many books on software architecture and development best practices, such as "Building Microservices", "Head First Design Patterns", and "Effective Java".
              </p>
              <p
                style={{
                  color: "#666",
                  fontSize: "14px",

                  lineHeight: "22px",
                }}
              >
                Passionate about mentorship and contributing to the growth of others. I have a track record of creating learning projects and leading knowledge transfer sessions to help junior colleagues. You can explore some of my work and personal projects
               on my{" "}
                <a
                  href="https://github.com/ilyes12zouaoui"
                  className="color-blue"
                  style={{ fontSize: "14px" }}
                  target="_blank"
                >
                  github repository
                </a>{" "}
                which is mentioned on my{" "}
                <a
                  href="cv/Ilyes_Zouaoui_Resume.pdf"
                  className="color-blue"
                  style={{ fontSize: "14px" }}
                  target="_blank"
                >
                  resume.
                </a>
              </p>

              {   /*     <p
                style={{
                  color: "#666",
                  fontSize: "14px",

                  lineHeight: "22px",
                }}
              >
                I can't wait to bring my skills to a great company. Contribute
                to it's growth and success and be one of its expert. Please
                don't hesitate to contact me by email ilyes.zouaoui.work@gmail.com
              </p>
              <p
                style={{
                  color: "#666",
                  fontSize: "14px",
                  // fontWeight: "500",
                  lineHeight: "22px",
                }}
              >
              */
              }
              <p>
                <a
                  href="cv/Ilyes_Zouaoui_Resume.pdf"
                  className="color-blue"
                  style={{ fontSize: "14px" }}
                  target="_blank"
                >
                  Click hire to download my resume.
                </a>
              </p>
              {/*  or{" "}
                <a
                  href="/cv/cv-francais.pdf"
                  className="color-blue"
                  style={{ fontSize: "14px" }}
                  target="_blank"
                >
                  french
                </a>
                .
                <br />
                My github repository{" "}
                <a
                  href="https://github.com/ilyes12zouaoui"
                  className="color-blue"
                  style={{ fontSize: "14px" }}
                  target="_blank"
                >
                  github.com/ilyes12zouaoui
                </a>
                .
              </p>
    */}
              <hr style={{ marginTop: "22px", marginBottom: "22px" }} />
              <div className="text-center">
                <ul className="list-unstyled list-inline" style={{ margin: 0 }}>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/ilyes-zouaoui"
                      target="_blank"
                    >
                      <img
                        src={linkedInIcon}
                        style={{ width: "32px", height: "32px" }}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                  <a href = "mailto: ilyes.zouaoui.work@gmail.com">
                    <img
                   
                      src={googlePlusIcon}
                      style={{
                        width: "32px",
                        height: "32px",
                        cursor: "pointer",
                      }}
                    />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/ilyes12zouaoui?tab=repositories"
                      target="_blank"
                    >
                      <img
                        src={githubIcon}
                        style={{ width: "32px", height: "32px" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Element name="certificationsScrollTo"></Element>
        <Row className="fly-box mt-4" style={{ borderRadius: "15px" }}>
          <Col
            // lg={{ offset: 3, span: 6 }}
            // md={{ offset: 3, span: 6 }}
            // sm={{ offset: 2, span: 8 }}
            // xs={{ offset: 1, span: 10 }}
            className="p-sm-5 p-4 pb-2"
          >
            <div>
              <h1
                className="color-blue text-center"
                style={{ fontSize: "24px", "margin-bottom": "15px" }}
              >
                Certificates (
                <a
                  className="color-blue"
                  href="https://www.credly.com/users/ilyes-zouaoui/badges"
                  target="_blank"
                >
                  Verify Badges
                </a>
                )
              </h1>
              <Certifications />
            </div>
          </Col>
        </Row>
        {/* <Link
          to="/projects"
          style={{
            textDecoration: "none"
          }}
        > */}
        {/* </Link> */}
        <Row className="fly-box mt-4" style={{ borderRadius: "15px" }}>
          <Col
            // lg={{ offset: 3, span: 6 }}
            // md={{ offset: 3, span: 6 }}
            // sm={{ offset: 2, span: 8 }}
            // xs={{ offset: 1, span: 10 }}
            className="p-sm-5 p-4"
          >
            <div>
              <h1
                className="color-blue text-center mb-4"
                style={{ fontSize: "24px" }}
              >
                Skills
              </h1>
              <Skills />
            </div>
          </Col>
        </Row>
        <Row className="fly-box mt-4" style={{ borderRadius: "15px" }}>
          <Col
            // lg={{ offset: 3, span: 6 }}
            // md={{ offset: 3, span: 6 }}
            // sm={{ offset: 2, span: 8 }}
            // xs={{ offset: 1, span: 10 }}
            className="p-sm-5 p-4 pb-2"
          >
            <div>
              <h1
                className="color-blue text-center mb-2"
                style={{ fontSize: "24px" }}
              >
                Work Experience
              </h1>
              <Element name="WorkExperienceScrollTo"></Element>
              <Experiences />
            </div>
          </Col>
        </Row>
        <Row
          className="fly-box mt-4"
          style={{
            borderRadius: "15px"
          }}
        >
          <Col
            // lg={{ offset: 3, span: 6 }}
            // md={{ offset: 3, span: 6 }}
            // sm={{ offset: 2, span: 8 }}
            // xs={{ offset: 1, span: 10 }}
            className="p-sm-5 p-4 pb-2"
          >
            <div>
              <h1
                className="text-center color-blue mb-4"
                style={{ fontSize: "24px" }}
              >
                Education
              </h1>
              <Educations />
            </div>
          </Col>
        </Row>
        <Row className="fly-box mt-4" style={{ borderRadius: "15px" }}>
          <Col
            // lg={{ offset: 3, span: 6 }}
            // md={{ offset: 3, span: 6 }}
            // sm={{ offset: 2, span: 8 }}
            // xs={{ offset: 1, span: 10 }}
            className="p-sm-5 p-4"
          >
            <div>
              <h1
                className="text-center color-blue mb-3"
                style={{ fontSize: "24px" }}
              >
                Languages
              </h1>
              <div
                className="p-4 mt-5 mb-3 "
                style={{
                  borderRadius: "10px",
                  border: "2px solid #22aeffbb",
                }}
              >
                <h1
                  className=" text-center mb-2 mt-2 "
                  style={{ fontSize: "16px", color: "#666" }}
                >
                  Arabic (Native)
                </h1>
                <h1
                  className=" text-center mb-2 mt-2 "
                  style={{ fontSize: "16px", color: "#666" }}
                >
                  English (Proficient)
                </h1>
                <h1
                  className=" text-center mb-2 mt-2 "
                  style={{ fontSize: "16px", color: "#666" }}
                >
                  French (Intermediate)
                </h1>
                <h1
                  className=" text-center mb-2 mt-2 "
                  style={{ fontSize: "16px", color: "#666" }}
                >
                  German (Beginner)
                </h1>
              </div>
            </div>
          </Col>
        </Row>
        {/* <Row className="fly-box mt-4">
        <Col
          // lg={{ offset: 3, span: 6 }}
          // md={{ offset: 3, span: 6 }}
          // sm={{ offset: 2, span: 8 }}
          // xs={{ offset: 1, span: 10 }}
          className="p-sm-5 p-4"
        >
          <div>
            <h1 className="color-blue text-center" style={{ fontSize: "24px" }}>
              Resume
            </h1>
            <hr />
            <p
              style={{
                color: "#666",
                fontSize: "14px",
                // fontWeight: "500",
                lineHeight: "22px"
              }}
            >
              Currenlty i'm a software engeeniring student at{" "}
              <a
                className={style.aboutLink}
                target="_blank"
                href="http://esprit.tn/"
              >
                ESPRIT
              </a>{" "}
              (TWIN: Technology Web And Internet specialty ), this is my final
              year (2019/2020) and i'm in active search for a final year
              internship at germany ( berlin )
            </p>
            <p
              style={{
                color: "#666",
                fontSize: "14px",
                // fontWeight: "500",
                lineHeight: "22px"
              }}
            >
              I worked as a part-time web instructor at the week-ends at{" "}
              <a
                className={style.aboutLink}
                href="https://www.gomycode.tn/"
                target="_blank"
              >
                GOMYCODE
              </a>{" "}
              from 03/02/2019 till 28/07/2019 (6 months), where i teached a
              group of 6-8 peoples different web technologies (html, css,
              javascript, bootstrap, node , react, redux, express, mongoose) and
              realised many workshops about them, also i proposed a{" "}
              <a
                className={style.aboutLink}
                href="https://ilyes12zouaoui.github.io/ilyes-zouaoui-redux-CRUD-using-React-bootsrap/"
                target="_blank"
              >
                react redux project
              </a>{" "}
              to GOMYCODE to add to their training.
            </p>
            <p
              style={{
                color: "#666",
                fontSize: "14px",
                // fontWeight: "500",
                lineHeight: "22px"
              }}
            >
              At my last summer internship from 01/06/2019 till 20/09/2019 (3
              months and 20 days) at ESPRIT MINOUS GROUP, i learned GraphQl API,
              Next js and PRISMA mostly by myself, by watching many tutorials
              and reading articles and documentations, and i was able to realise
              a professional web application using them, and i decided to create
              a complete starter GraphQl project with jwt authentication and
              client and admin spaces because there was no ready to use starter
              project, you can find the code for the project{" "}
              <a
                className={style.aboutLink}
                href="https://github.com/ilyes12zouaoui/lass-app-graphql-pern"
                target="_blank"
              >
                hire
              </a>
              , and the deployed version on heroku{" "}
              <a
                className={style.aboutLink}
                href="https://lass-graphql-app.herokuapp.com/"
                target="_blank"
              >
                hire
              </a>
              <p
                style={{
                  color: "#666",
                  fontSize: "14px",
                  // fontWeight: "500",
                  lineHeight: "22px"
                }}
              ></p>{" "}
              Also i'm the webmaster of IEEE ESPRIT club and i have used my
              GraphQl starter project to realised the first version of the{" "}
              <a
                className={style.aboutLink}
                target="_blank"
                href="https://ieee-esprit-back.herokuapp.com/articles"
              >
                IEEE ESPRIT website
              </a>
            </p>
            <p
              style={{
                color: "#666",
                fontSize: "14px",
                // fontWeight: "500",
                lineHeight: "22px"
              }}
            >
              Further more in my community i wanted to help a coffe shop
              business to attract new clients, so i speaked with them and they
              told me to build this{" "}
              <a
                className={style.aboutLink}
                href="https://ilyes12zouaoui.github.io/wood-stock-coffee-shop/"
                target="_blank"
              >
                landing page
              </a>{" "}
              for them.
            </p>
            <p
              style={{
                color: "#666",
                fontSize: "14px",
                // fontWeight: "500",
                lineHeight: "22px"
              }}
            >
              {" "}
              for more informations please don't hesitate to{" "}
              <Link className={style.aboutLink} to="/contact-us">
                contact me
              </Link>{" "}
              i would love to speak with you, and for more details about my
              projects you can check my projects{" "}
              <Link className={style.aboutLink} to="/projects">
                page
              </Link>{" "}
              and my{" "}
              <a
                className={style.aboutLink}
                href="https://github.com/ilyes12zouaoui"
                target="_blank"
              >
                github
              </a>
              .
            </p>
          </div>
        </Col>
      </Row>
       */}
        {/* </div> */}
        <Element name="projectsScrollTo"></Element>
        <Row
          className="fly-box mt-5 "
          style={{ backgroundColor: "rgb(42 177 255 / 73%)", borderRadius: "15px" }}
        >
          <Col
            // lg={{ offset: 3, span: 6 }}
            // md={{ offset: 3, span: 6 }}
            // sm={{ offset: 2, span: 8 }}
            // xs={{ offset: 1, span: 10 }}
            className="p-sm-4 p-4 pb-2"
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "17px",
                color: "white",
                textDecoration: "none",
              }}
            >
              Personal Projects
            </div>
          </Col>
        </Row>-
      </Container>
      <Projects />
      <ContactUs />
    </>
  );
};

export default FormLayout;
