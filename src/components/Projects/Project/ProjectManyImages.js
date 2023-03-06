import React from "react";
import Images from "./Images/Images";
import Informations from "./Informations/Informations";
import { Container, Row, Col } from "react-bootstrap";
const Item = ({
  images = [`/images/users/defaultImage.jpg`],
  title,
  githubLink,
  onlineLink,
  description,
  tags
}) => {
  return (
    <Container
      className="pt-3 pb-3"
      style={{ maxWidth: "800px", fontWeight: "500" }}
    >
      {/* <div style={{ width: "70%", minWidth: "300px" }} className="fly-box"> */}
      <Row className="fly-box">
        <Col
          // lg={{ span: 5 }}
          // md={{ span: 5 }}
          sm={{ span: 12 }}
          xs={{ span: 12 }}
          className="p-0 "
        >
          <Images images={images} />
        </Col>
        <Col
          // lg={{ span: 7 }}
          // md={{ span: 7 }}
          sm={{ span: 12 }}
          xs={{ span: 12 }}
          className="p-sm-4 p-3"
        >
          <Informations
            tags={tags}
            title={title}
            githubLink={githubLink}
            onlineLink={onlineLink}
            description={description}
          />
        </Col>
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default Item;
