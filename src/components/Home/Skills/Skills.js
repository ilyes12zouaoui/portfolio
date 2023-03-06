import React from "react";
import Skill from "./Skill/Skill";
import Tag from "./Tag";
const Skills = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <Tag title="SCRUM" />
      <Tag title="Agile" />
      <Tag title="Event Driven" />
      <Tag title="Microservice" />
      <Tag title="Message Broker" />
      <Tag title="REST API" />
      <Tag title="OpenAPI" />
      <Tag title="Java" />
      <Tag title="Spring Boot" />
      <Tag title="Spring Security" />
      <Tag title="Javascript" />
      <Tag title="TypeScript" />
      <Tag title="Node.js" />
      <Tag title="Express" />
      <Tag title="React" /> 
      <Tag title="Angular" /> 
      <Tag title="Gitlab CI/CD" />
      <Tag title="Docker" />
      <Tag title="Kubernetes" />
      <Tag title="AWS" /> 
      
      
         {/* <Skill barLabel="REACT" progress={92} />

      <Skill barLabel="REDUX" progress={90} />
      <Skill barLabel="GRAPHQL API" progress={91} />
      <Skill barLabel="APOLLO" progress={85} />

      <Skill barLabel="NEXT.JS" progress={82} />
      <Skill barLabel="NODE.JS" progress={80} />
      <Skill barLabel="EXPRESS.JS" progress={79} />
      <Skill barLabel="PRISMA" progress={80} />
      <Skill barLabel="SCSS" progress={80} />
      <Skill barLabel="BOOTSTRAP 4" progress={82} />

      <Skill barLabel="TYPESCRIPT" progress={72} />
      <Skill barLabel="GIT, GITHUB" progress={87} />
      <Skill barLabel="JAVASCRIPT" progress={85} />
      <Skill barLabel="HTML" progress={91} />
      <Skill barLabel="CSS" progress={90} />
      <Skill barLabel="MONGOOSE" progress={80} />
      <Skill barLabel="REST API" progress={76} />
      <Skill barLabel="SQL" progress={60} />
      <Skill barLabel="MONGODB" progress={60} />
      <Skill barLabel="JEST" progress={30} />
      <Skill barLabel="JAVA, C, C++, C#, PYTHON, PHP" progress={10} />
      <Skill barLabel="JEE, .NET, DJANGO, SYMFONY 3" progress={8} /> */}
    </div>
  );
};

export default Skills;
