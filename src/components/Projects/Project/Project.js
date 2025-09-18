import React from "react";
import Image from "./Images/Image";
import Informations from "./Informations/Informations";
import { Container, Row, Col } from "react-bootstrap";
const Item = ({
  image = `/images/users/${"defaultImage.jpg"}`,
  title,
  githubLink,
  onlineLink,
  description,
  tags
}) => {
  return (
    <Container
      className="pb-3 pt-3"
      style={{ maxWidth: "800px", fontWeight: "500" }}
    >
      {/* <div style={{ width: "70%", minWidth: "300px" }} className="fly-box"> */}
      <Row className="fly-box" style={{borderRadius:"15px"}}>
        <Col
          // lg={{ span: 5 }}
          // md={{ span: 5 }}
          sm={{ span: 12 }}
          xs={{ span: 12 }}
          className="p-0 "
        >
          <Image src={image} />
        </Col>
        <Col
          // lg={{ span: 7 }}
          // md={{ span: 7 }}
          sm={{ span: 12 }}
          xs={{ span: 12 }}
          className="p-sm-4 p-4"
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
