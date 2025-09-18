import React from "react";
const Image = ({ id, src, isOwner = false }) => {
  return (
    <div
      style={{
        height: "100%",
        maxHeight: "400px",
        width: "100%",
        position: "relative"
      }}
    >
      <img style={{ width: "100%", height: "100%" }} src={src} />
    </div>
  );
};
export default Image;
