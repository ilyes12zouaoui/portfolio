import React from "react";
import { Carousel } from "react-bootstrap";
const Image = ({ images }) => {
  return (
    <div
      style={{
        height: "100%",
        maxHeight: "400px",
        width: "100%",
        position: "relative"
      }}
    >
      <Carousel>
        {images.map(src => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "400px" }}
              src={src}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default Image;
