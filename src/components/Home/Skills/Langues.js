import React from "react";
import Skill from "./Skill/Skill";
const Skills = () => {
  return (
    <>
      <Skill barLabel="English (B2 Esprit Language Center)" progress={82} />

      <Skill barLabel="French (B2 Esprit Language Center)" progress={68} />
      <Skill barLabel="Arabic (native)" progress={95} />
    </>
  );
};

export default Skills;
