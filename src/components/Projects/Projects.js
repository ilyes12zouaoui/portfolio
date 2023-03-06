import React from "react";
import Project from "./Project/Project";
import ProjectManyImages from "./Project/ProjectManyImages";

const Projects = () => {
  return (
    <>
      {/* <div className="pt-4 pb-5"> */}
      <ProjectManyImages
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
      <Project
        image="images/projects/woodstock-min.PNG"
        githubLink=""
        onlineLink="https://ilyes12zouaoui.github.io/wood-stock-coffee-shop/"
        description="in order to help a coffee shop buisness in my town to attract new clients, 
        i offred them my service which is building a web landing page and they accepted ."
        title="Wood stock coffee shop"
        tags={["React", "CSS", "Javascript", "Html", "Node"]}
      />
      <ProjectManyImages
        githubLink="https://github.com/ilyes12zouaoui/spring-security-jwt-authentication-with-docker"
        description="In order to learn more about spring security. How to set up jwt
   authentication and basic authentication. I passionatly created spring-security-jwt-authentication-with-docker project 
   where you can register and login with users using jwt authentication, using docker-compose, postgres db,
    flyway for database migration, testcontainer to automaticly create database for integration tests"
        title="Spring security jwt authentication with docker"
        tags={[
          "Spring",
          "Spring boot",
          "Spring security",
          "Postgres",
          "Docker",
          "Docker compose",
          "Postman"
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

      <Project
        githubLink="https://gitlab.com/ilyes12zouaoui/monorepo-gitlab-ci-pipeline"
        description="In order to improve my skills in gitlab CI pipeline, i passionatly created this project which is a playground example for handling
        a monorepos microservice project, where all microservice exist in the same repository.   
       And we don't want to trigger all the pipeline jobs for all microservices when a change happens in only one microservice. We want to trigger the jobs related to that microservice only, for efficiency reasons."
        title="Monorepo gitlab CI pipeline example"
        tags={[
          "Gitlab CI",
        ]}
        image="images/projects/monorepo-gitlab-ci-min.PNG"

      />
      <Project
        githubLink="https://github.com/ilyes12zouaoui/MQTT-microservice-pub-sub-example"
        description="In order to learn more about microservice asynchronous communication using events with event-broker,
         I passionatly created this project where I use MQTT event broker to enable asynchronous communication between two simple 
         microservices product and category, business case is when a category is deleted an event is published to the broker,
         and the product is subscribing to that event to delete all products that has belong to that category."
        title="MQTT microservice publish subscribe example"
        tags={[
          "Spring",
          "Spring boot",
          "Mqtt",
          "Docker",
          "Docker compose"
        ]}
        image="images/projects/mqtt-min.png"

      />

      <Project
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
      />
      <ProjectManyImages
        githubLink="https://github.com/ilyes12zouaoui/product-crud-spring-boot-angular-8"
        onlineLink=""
        description="in order to learn angular 8 and spring boot, i passionatly decided to build 
        a products management CRUD project using them"
        title="Spring boot angular 8 products CRUD"
        tags={[
          "javascript",
          "angular 8",
          "material UI",
          "java",
          "JEE",
          "spring boot",
          "spring data",
          "REST API"
        ]}
        images={[
          "images/projects/spring-boot-products-crud/1-min.PNG",
          "images/projects/spring-boot-products-crud/2-min.PNG"
        ]}
      />
      <Project
        image="images/projects/microservice-min.jpg"
        githubLink="https://github.com/ilyes12zouaoui/spring-microservices-eureka-zuul"
        onlineLink=""
        title="spring microsevices architecture eureka zuul"
        description="Designed and built a travel agency micro-service solution
        in a group of 4 students."
        tags={[
          "java",
          "JEE",
          "spring boot",
          "spring data",
          "spring cloud",
          "eureka (naming server)",
          "zuul (api gateway)",
          "git",
          "h2"
        ]}
      />
      <ProjectManyImages
        description="summer internship from 01/06/2019 till 20/09/2019 at ESPRIT MINOUS GROUP, i learned GraphQl API,
          Next.js, Apollo and PRISMA technologies mostly by myself, by watching many tutorials
          and reading articles and documentations, and i was able to realize
          a professional web application about Alzheimer disease using them, also most of
          the components design was my custom css ."
        title="Alzhelps"
        tags={[
          "Scrum",
          "Next.js",
          "Apollo",
          "React",
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
        onlineLink="https://ehr-esprit.herokuapp.com/"
        title="Electronic Health Record ESPRIT Project"
        description="As a software engineering student at ESPRIT, we are asked to build a project using
          MERN stack, BlockChain, IOT, Machine Learning technologies, in a group of 4 people, i focused 
          on the MERN stack project, and the chat fonctionality using Socket.io library parts, this project
          is a solution for the medical healthcare system, actually the
          traditional medical healthcare system is based on physical records and archives that is 
          very hard to share with providers since the process can take a long time, effort and cost, 
          as well as preventing fraud and bad use of patients information, the urge need to digitize 
          and secure national healthcare data had led us to develop a solution for collecting, storing,
           clustering data to ease access and use of medical records with respect to the privacy of the
            patient's personal details. The solution consist on a platform, where a patient can access 
            his medical records, share it with healthcare providers, and grant them permission to add 
            new set of data according to their status (pharmacist/ physiciens....). This data should 
            be encrypted stored and secured in a decentralized database with permissioned access and 
            guarantee the privacy of the personal information"
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
          "BlockChain",
          "Hyperledger Fabrick",
          "Machine Learning",
          "Html",
          "Javascript",
          "CSS"
        ]}
      />
      <Project
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
      />

      <Project
        githubLink="https://github.com/ilyes12zouaoui/credit-card-react-typescript-scss"
        onlineLink="https://ilyes12zouaoui.github.io/credit-card-react-typescript-scss"
        description="in order to improve my typescript and scss skills i decided to build a small react credit card simulator using 
        those technologies ."
        title="credit card simulator"
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
      />
<ProjectManyImages
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
      />
      <Project
        image="images/projects/jest-min.PNG"
        githubLink="https://github.com/ilyes12zouaoui/unit-testing-jest"
        onlineLink=""
        title="jest unit tasting"
        description="in order to learn unit testing using Jest, i decided to build a small project
        that uses different unit tests ."
        tags={["jest", "Javascript", "Node"]}
      />

      <Project
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
      />

      <ProjectManyImages
        description="summer internship project, at vertel start-up, using Laravel 5 framework, and SCRUM agile method."
        title="Kadolista"
        tags={["Scrum", "PHP", "Laravel 5", "CSS", "Javascript", "Html"]}
        images={[
          "images/projects/kadolista/Capture10-min.PNG",
          "images/projects/kadolista/Capture1-min.PNG",
          "images/projects/kadolista/Capture2-min.PNG",
          "images/projects/kadolista/Capture4-min.PNG",
          "images/projects/kadolista/Capture5-min.PNG",
          "images/projects/kadolista/Capture6-min.PNG",
          "images/projects/kadolista/Capture7-min.PNG",
          "images/projects/kadolista/Capture8-min.PNG",
          "images/projects/kadolista/Capture9-min.PNG",
          "images/projects/kadolista/Capture11-min.PNG",
          "images/projects/kadolista/Capture12-min.PNG"
        ]}
      />
      {/* </div> */}
    </>
  );
};

export default Projects;
