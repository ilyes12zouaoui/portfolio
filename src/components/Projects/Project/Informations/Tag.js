import React from "react";

export default ({ title }) => {
  return (
    <span
      className="color-blue"
      style={{
        textAlign: "center",
        display: "inline-block",
        padding: "5px 7px",
        border: "1px solid #22aeffc9",
        backgroundColor: "white",
        borderRadius: "32px",
        minWidth: "60px",
        fontSize: "10px",
        fontWeight: "500",
        marginRight: "8px",
        marginTop: "8px"
        // margin: "12px 5px 8px 0"
      }}
    >
      {title}
    </span>
  );
};
