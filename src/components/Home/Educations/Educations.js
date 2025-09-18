import React from "react";
import Skill from "./Education/Education";
const Skills = () => {
  return (
    <>
      <Skill
        description="Studied software architecture, front end development, back end development and agile methods."
        startDate="07/2016"
        endDate="08/2020"
        title="Bachelor Of Engineering"
        company="ESPRIT"
        link="http://esprit.tn"
      />
      <Skill
        description="Studied math, physics, mechanics, electronics, information technology."
        startDate="2014"
        endDate="2016"
        title="Preparatory Cycle For Engineering Studies"
        company="IPEIEM"
        link="http://www.ipeiem.rnu.tn/"
      />
    </>
  );
};

export default Skills;
