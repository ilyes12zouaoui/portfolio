import React from "react";
import Project from "./Project/Project";
import ProjectManyImages from "./Project/ProjectManyImages";

const Projects = () => {
  return (
    <>
      {/* <div className="pt-4 pb-5"> */}
{/*       <ProjectManyImages
        description="Forum application to help people with Alzheimer disease get in touch with doctors and professional aiders. 
        With possibility of creating blogs, asking questions, commenting and rating doctors. Created within a team of 4 students using SCRUM. I was the SCRUM master of our team."
        title="Java Spring Angular AWS Docker Project"
        tags={[
          "AWS",
          "ECS",
           "Java",
          "Spring boot",
          "REST API",
          "Sql",
          "Git",
          "Github Actions (CI/CD)",
          "PostgreSQL",
          "BootStrap 4",
          "Angular",
          "Node",
          "Docker",
          "SCRUM",
          "CSS",
          "Javascript",
          "Html",
          "SCRUM Master"
        ]}
        images={[
          "images/projects/alzhelps/after11-min.PNG",
          "images/projects/alzhelps/after15-min.PNG",
          "images/projects/alzhelps/after1-min.PNG",
          "images/projects/alzhelps/after2-min.PNG",
          "images/projects/alzhelps/after4-min.PNG",
          "images/projects/alzhelps/after5-min.PNG",
          "images/projects/alzhelps/after6-min.PNG",
          "images/projects/alzhelps/after7-min.PNG",
          "images/projects/alzhelps/after8-min.PNG",
          "images/projects/alzhelps/after9-min.PNG",
          "images/projects/alzhelps/after10-min.PNG",
          "images/projects/alzhelps/after-min.PNG",
          "images/projects/alzhelps/after12-min.PNG",
          "images/projects/alzhelps/after13-min.PNG",
          "images/projects/alzhelps/after14-min.PNG"
        ]}
      /> */}
           <ProjectManyImages
        githubLink="https://github.com/ilyes12zouaoui/spring-security-jwt-authentication-with-docker"
        description="To coach junior colleagues about Java Spring Security, JWT authentication, Basic Authentication, Docker and Docker-Compose. 
        I passionately created this public learning project."
        title="Java Spring Security Docker JWT Authentication Project"
        tags={[
          "Java",
          "Spring",
          "Spring boot",
          "Spring security",
          "Postgres",
          "JWT",
          "REST API",
          "Basic Authentication",
          "Docker",
          "Docker compose",
          "Postman",
          "Git"
        ]}
        images={[
          "images/projects/spring-security/1-min-1.PNG",
          "images/projects/spring-security/2-min-1.PNG",
          "images/projects/spring-security/3-min.PNG",
          "images/projects/spring-security/4-min.PNG",
          "images/projects/spring-security/5-min.PNG",
          "images/projects/spring-security/6-min.PNG",
        ]}
      />
            <ProjectManyImages
        githubLink="https://github.com/ilyes12zouaoui/employees-CRUD-docker-angular-spring-boot"
        secondGithubLink="https://github.com/ilyes12zouaoui/product-crud-spring-boot-angular-8"
        description="To coach junior colleagues about full stack development using Java Spring Boot, Javascript, Typescript, HTML, CSS, Angular, SQL, Docker and Docker-Compose. I passionately created two different public learning projects."
        title="Java Spring Angular Docker Project"
        tags={[
          "Javascript",
          "Angular 8",
          "Material UI",
          "Java",
          "Spring boot",
          "REST API",
          "Docker",
          "Docker-compose",
          "SQL"
        ]}
        images={[
          "images/projects/spring-boot-products-crud/1-min.PNG",
          "images/projects/spring-boot-products-crud/2-min.PNG"
        ]}
      />
            <Project
        githubLink="https://github.com/ilyes12zouaoui/MQTT-microservice-pub-sub-example"
        description="To coach junior colleagues about microservice asynchronous communication using event driven design.
         I passionately created this public learning project where I use  an MQTT message broker to enable asynchronous communication between two 
         microservices."
        title="Java Spring MQTT Message Broker Event Driven Project"
        tags={[
          "Java",
          "Spring",
          "Spring boot",
          "Mqtt",
          "Docker",
          "Docker compose"
        ]}
        image="images/projects/mqtt-min.png"
      />
      <Project
        image="images/projects/microservice-min.jpg"
        githubLink="https://github.com/ilyes12zouaoui/spring-microservices-eureka-zuul"
        onlineLink=""
        title="Java Spring Project"
        description="Designed and built a travel agency micro-service solution
        in a group of 4 students."
        tags={[
          "Java",
          "Spring boot",
          "Spring data",
          "Spring cloud",
          "Eureka (naming server)",
          "Zuul (api gateway)",
          "Git",
          "H2"
        ]}
      />
            <Project
        image="images/projects/woodstock-min.PNG"
        githubLink=""
        onlineLink="https://ilyes12zouaoui.github.io/wood-stock-coffee-shop/"
        description="Landing web page to to attract more clients for a coffee shop in my town."
        title="Javascript React Project"
        tags={["React", "CSS", "Javascript", "HTML", "Node"]}
      />

            <ProjectManyImages
        images={[
          "images/projects/ehr/Capture5-min.PNG",
          "images/projects/ehr/Capture6-min.PNG",
          "images/projects/ehr/Capture7-min.PNG",
          "images/projects/ehr/Capture-min.PNG",
          "images/projects/ehr/Capture2-min.PNG",
          "images/projects/ehr/Capture3-min.PNG",
          "images/projects/ehr/Capture4-min.PNG"
        ]}
        githubLink="https://github.com/ilyes12zouaoui/EHR-mern-stack"
        title="Javasacript Node Express React Project"
        description="Designed and built a solution for managing patients medical records in the healthcare field. In a group of 4 students."
        tags={[
          "Socket.io",
          "Rect",
          "Redux",
          "Node",
          "Express",
          "Bootstrap 4",
          "MongoDB",
          "Mongoose",
          "Rest API",
          "HTML",
          "Javascript",
          "CSS",
          "Git"
        ]}
      />

     {/*  <ProjectManyImages
        githubLink="https://github.com/ilyes12zouaoui/lass-app-graphql-pern"
        onlineLink="https://lass-graphql-app.herokuapp.com"
        description="when we start developing a javascript project using React, Redux, Node, Express, Prisma and GraphQL
        , there is no ready to use starter project, so we must do the configuration and authentication by our 
        selfs each time, that's why i decided to create a modular ready to use strater project, that contains 
        all the configuration needed, even websocket configuration to use GraphQL subscription, and a full 
        athentication with account activation and reset password e-mails and Three role users ADMIN,STAFF,USER,
         using JWT Passport strategy, client and admin spaces, upload image using graphQL, and for the styling i used bootstrap and my own
          custom css, so that you can easily modify it. Also this project was used as the starter project to build IEEE ESPRIT 
          Website and my Portfolio Website ."
        title="Lass GraphQL PERN"
        tags={[
          "React",
          "Apollo",
          "Redux",
          "GraphQL",
          "PostgreSQL",
          "BootStrap 4",
          "Prisma",
          "Node",
          "Express",
          "CSS",
          "Javascript",
          "Html"
        ]}
        images={[
          "images/projects/lass-graphql-app/Capture2-min.PNG",
          "images/projects/lass-graphql-app/Capture5-min.PNG",
          "images/projects/lass-graphql-app/Capture-min.PNG",
          "images/projects/lass-graphql-app/Capture3-min.PNG",
          "images/projects/lass-graphql-app/Capture4-min.PNG"
        ]}
      />
  */}
      <Project
        githubLink="https://gitlab.com/ilyes12zouaoui/monorepo-gitlab-ci-pipeline"
        description="To improve the pipeline for Monorepo projects where all microservices projects exists in one big Git Repository.
         So that new git commit does not trigger all microservice jobs even when no change happened to all microservices.
          The following project only trigger jobs where a microservice change did happen and skip the others. Which makes the pipeline more efficient."
           title="Gitlab CI/CD Pipeline Monorepo Optimization project"
        tags={[
          "Gitlab CI",
        ]}
        image="images/projects/monorepo-gitlab-ci-min.PNG"

      />
   {/*    <Project
        image="images/projects/IEEE-min.PNG"
        githubLink=""
        onlineLink="https://ieee-esprit-back.herokuapp.com"
        title="IEEE Esprit Website"
        description="As the webmaster of IEEE Esprit PES chapter (power and energy society), 
        i was responsable for the designing and development of the IEEE Esprit Website using 
        React, Redux, Prisma, GraphQL, Apollo, Express, Node technologies, we have reached a 
        first deployable version and we are still working on adding
        new functionalities to our website."
        tags={[
          "Rect",
          "Redux",
          "Node",
          "Express",
          "Bootstrap 4",
          "PostgreSQL",
          "Prisma",
          "GraphQL",
          "Apollo",
          "Html",
          "Javascript",
          "CSS"
        ]}
      /> */}

{/*       <Project
        image="images/projects/MERN-min.jpg"
        githubLink="https://github.com/ilyes12zouaoui/ilyes-zouaoui-mern-rest-solution"
        onlineLink=""
        title="Lass MERN REST"
        description="when we want to develope a mern stack project, using React,node,express,mongodb 
        and a restful API, there is no officiel starter project, so we have to always redo the configuration 
        and authentication and all the basic functionalities of a professional web application, 
        that's why i decided to try create a starter project, configured with 
        jwt authentication using passport, upload image using multer, and much more."
        tags={[
          "React",
          "Node",
          "Express",
          "Bootstrap 4",
          "MongoDB",
          "Mongoose",
          "Rest API",
          "CSS",
          "Html",
          "Javascript"
        ]}
      /> */}

{/*       <Project
        githubLink="https://github.com/ilyes12zouaoui/credit-card-react-typescript-scss"
        onlineLink="https://ilyes12zouaoui.github.io/credit-card-react-typescript-scss"
        description="To coach junior colleagues about front end developing, using typescript, scss and react. I passionately created this public learning project"
        title="Javascript React Project"
        image="images/projects/credit-card-min.PNG"
        tags={[
          "React",
          "SCSS",
          "TypeScript",
          "CSS",
          "Javascript",
          "Html",
          "Node"
        ]}
      /> */}
{/* <ProjectManyImages
        images={[
          "images/projects/reat-redux-1.PNG",
          "images/projects/react-redux-min.PNG",
        ]}
     
        githubLink="https://github.com/ilyes12zouaoui/ilyes-zouaoui-redux-CRUD-using-React-bootsrap"
        onlineLink="https://ilyes12zouaoui.github.io/ilyes-zouaoui-redux-CRUD-using-React-bootsrap/"
        description="in order to teach react, redux and react-bootstrap library to students at GOMYCODE as a web instructor,
        i decided to create a small project that uses these technologies and proposed it to GOMYCODE so that they add it to there training projects ."
        title="React Redux Bootstrap CRUD"
        tags={[
          "React",
          "Redux",
          "react-bootstrap",
          "CSS",
          "Javascript",
          "Html",
          "Node"
        ]}
      /> */}
{/*       <Project
        image="images/projects/jest-min.PNG"
        githubLink="https://github.com/ilyes12zouaoui/unit-testing-jest"
        onlineLink=""
        title="jest unit tasting"
        description="in order to learn unit testing using Jest, i decided to build a small project
        that uses different unit tests ."
        tags={["jest", "Javascript", "Node"]}
      /> */}

{/*       <Project
        image="images/projects/express-min.png"
        githubLink="https://github.com/ilyes12zouaoui/express-crud-mongoose-session-cookie"
        onlineLink=""
        title="Express mongoose session cookie CRUD"
        description="in order to teach as a web instructor at GOMYCODE how to create a websites using node, express, mongoDB 
        and twig (template engine), i decided to create a project that uses 
        these technologies with session cookie authentication."
        tags={[
          "TWIG",
          "Node",
          "Express",
          "MongoDB",
          "Mongoose",
          "CSS",
          "Html",
          "Javascript"
        ]}
      /> */}

      {/* </div> */}
    </>
  );
};

export default Projects;
