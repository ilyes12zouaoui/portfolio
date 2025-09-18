import React from "react";
import Skill from "./Education/Education";
const Skills = () => {
  return (
    <>
      <Skill
        description="Studied software architecture, front end development, back end development and agile methods."
        startDate="07/2016"
        endDate="08/2020"
        title="National Degree of Engineering ( Bachelor )"
        company="ESPRIT"
        link="https://en.wikipedia.org/wiki/ESPRIT_(School)"
      />
      <Skill
        description="Studied math, physics, mechanics, electronics, information technology."
        startDate="07/2014"
        endDate="04/2016"
        title="Preparatory Cycle for Engineering Studies"
        company="IPEIEM"
        link="https://en.wikipedia.org/wiki/El_Manar_Preparatory_Engineering_Institute"
      />
    </>
  );
};

export default Skills;
