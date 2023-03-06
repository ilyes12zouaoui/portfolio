import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "./Map/Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import style from "./Informations.module.css";
const FormLayout = ({ user, isOwner = false }) => {
  return (
    <>
      <Container className="pt-3 pb-3" style={{ maxWidth: "800px" }}>
        {/* <div style={{ width: "70%", minWidth: "300px" }} className="fly-box"> */}
        <Row className="fly-box">
          <Col
            // lg={{ offset: 3, span: 6 }}
            // md={{ offset: 3, span: 6 }}
            // sm={{ offset: 2, span: 8 }}
            // xs={{ offset: 1, span: 10 }}
            className="p-sm-5 p-4"
          >
            <div>
              <h1 className="color-blue" style={{ fontSize: "24px" }}>
                My location:
              </h1>
              <hr />
              <Map />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="pt-3 pb-5" style={{ maxWidth: "800px" }}>
        {/* <div style={{ width: "70%", minWidth: "300px" }} className="fly-box"> */}
        <Row className="fly-box">
          <Col
            // lg={{ offset: 3, span: 6 }}
            // md={{ offset: 3, span: 6 }}
            // sm={{ offset: 2, span: 8 }}
            // xs={{ offset: 1, span: 10 }}
            className="p-sm-5 p-4"
          >
            <div>
              <h1 className="color-blue" style={{ fontSize: "24px" }}>
                Contact Informations:
              </h1>
              <hr />
              <div className={style["profile-information-lane"]}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="color-blue"
                  size="1x"
                />
                <span className={style["profile-information-lane-span"]}>
                  ilyes95zouaoui@gmail.com
                </span>
              </div>

              <div className={style["profile-information-lane"]}>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="color-blue"
                  size="1x"
                />
                <span className={style["profile-information-lane-span"]}>
                +49 (0)174 2564 878
                </span>
              </div>
              <div className={style["profile-information-lane"]}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="color-blue"
                  size="1x"
                />
                <span className={style["profile-information-lane-span"]}>
                  Mitte, Berlin, Germany
                </span>
              </div>
            </div>
          </Col>
        </Row>
        {/* </div> */}
      </Container>
    </>
  );
};

export default FormLayout;
