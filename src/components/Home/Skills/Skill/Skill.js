import React from "react";
import { ProgressBar } from "react-bootstrap";
const Skill = ({
  variant = "",
  progress = 0,
  barLabel = "",
  skillLabel = ""
}) => {
  return (
    <div className="mb-3 mt-3">
      <div
        style={{
          color: "#888",
          fontSize: "14px",
          fontWeight: "500",
          marginBottom: "2px"
          //   textAlign: "center"
        }}
      >
        {barLabel}
      </div>

      <ProgressBar
        animated
        now={progress}
        variant={variant}
        label={skillLabel}
      />
    </div>
  );
};

export default Skill;
