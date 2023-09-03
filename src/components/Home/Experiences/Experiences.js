import React from "react";
import Skill from "./Experience/Experience";
import Skillv2 from "./Experience/Experiencev2";
const Skills = () => {
  return (
    <>
          <Skillv2
        descriptions={[
          {
            description: `Partacipating in the development of microservice applications in the medical field using Java, Quarkus, Docker, Kubernetes, Hibernate, MongoDB, ElasticSearch, Scrum, ActiveMQ and Event Driven Design.`,
          achievements: []
          }
        ]}
        title="Mid-Level Software Engineer"
        startDate="09/2022"
        endDate="Present"
        jobTitle2="Software Engineer"
        startDate2="08/2023"
        endDate2="04/2023"
        company="CompuGroup Medical SE & Co. KGaA"
        location="Berlin, Germany"
        link="https://www.cgm.com/deu_de"
        tags={[
          "SCRUM",
          "Agile",
          "Quarkus",
          "Java",
          "Microservice",
          "Hibernate",
          "MongoDB",
          "Docker",
          "ActiveMQ",
          "Event Driven Design",
          "Kubernetes",
          "Docker compose",
          "ElasticSearch"
        ]}
      />
      <Skillv2
        descriptions={[
          {
            description: `Worked on two consulting projects. At the first project I participated in the development of microservice applications that handles the electronic signature of contracts between car dealers and customers using NestJs, Node.js, TypeScript, JavaScript, Java, Spring boot, Docker, Kubernetes and AWS.`,
            achievements: [
              "Integrated multiple third-party vendors into the project such as Scrive, Salesforce and Onfido.",
              "Proposed and implemented code refactoring optimizations that enhanced the system.",
              "Collaborated with the product owner proxy on urgent bug investigation and resolution.",
              "Conducted KT Sessions to share knowledge."
            ],
          },
          {
            description: `At the second project I participated in the development of a car assembly line management application using Java.`,
            achievements: [
              "Assisting with the agile transformation of our international Scrum team from Germany and India.",
              "Participating in the migration of legacy CORBA APIs to RESTful APIs using Java."
            ],
          },
        ]}
        title="Mid-Level Software Engineer"
        startDate="01/2022"
        endDate="08/2023"
        jobTitle2="Software Engineer"
        startDate2="08/2023"
        endDate2="04/2023"
        company="Capgemini"
        location="Berlin, Germany"
        link="https://www.capgemini.com/"
        tags={[
          "SCRUM",
          "Agile",
          "Spring",
          "Spring boot",
          "Java",
          "Javascript",
          "TypeScript",
          "Node.js",
          "Express",
          "Microservice",
          "Docker",
          "Kubernetes",
          "Docker compose",
          "DataDog",
          "AWS",
        ]}
      />
      <Skillv2
        location="Tunis, Tunisia"
        descriptions={[
          {
            description: `Worked on three consulting projects. At the first project I participated in the migration of a social media for luxurious car owners
            application from PHP Drupal system to microservice solutions using Java, Spring Boot, Mqtt message
            broker, PostgreSql, Docker, Kubernetes, Gitlab CI and React.js.`,
            achievements: [
              "Created a CI/CD pipeline optimization solution and presented it to our team's architect.",
              "Coached new trainees on software development and SCRUM.",
              "Presented the company to candidates and assisted in the successful recruitment of 3 colleagues."
            ],
          },
          {
            description: `At the second project I participated in the Development and maintenance of
            legacy microservice applications for automotive supply chain management using Quarkus, Java,
            Docker, Jenkins, Kubernetes and PostgreSql.
            `,
            achievements: [
              "Remained on call to urgently support clients, resolve incidents and fix code bugs.",
              "Actively participated in the project's onboarding of new colleagues."
            ],
          },
          {
            description: `At the third project I participated in the migration of a part of a monolithic application that calculates the usage of car
            manufacturer equipment's to a microservice solution with deployment to the cloud using Java, Spring
            Boot, Docker, Kubernetes, JavaScript, TypeScript, MySql, React.js, Gitlab CI and AWS.`,
            achievements: [
              "Documented the migration steps as a proof of concept for my graduation internship."
            ],
          }
        ]}
        achievement={[
          "Created a CI/CD pipeline optimization solution and proposed it to our team's architect.",
          "Coached new project trainees on software development and SCRUM.",
          "Remained on-call to urgently support clients, fix bugs and resolve incidents.",
        ]}
        description="Participated in the development of a social media microservice applications for luxurious car owners
        which provides access to prestigious activities and offers using Spring Boot, Java, Docker, Kubernetes,
        AWS, EKS, Kafka Message Broker, Terraform, Gitlab CI, Angular, REST API, Open API, PostgreSQL.        
        "
        startDate="02/2020"
        endDate="12/2021"
        title="Software Engineer"
        startDate2="02/2020"
        endDate2="08/2020"
        jobTitle2="Trainee Software Engineer"
        company="MaibornWolff"
        link="https://www.maibornwolff.de/en/tunisia"
        tags={[
          "Spring",
          "Spring boot",
          "Spring security",
          "Microservice",
          "Docker",
          "Docker compose",
          "Kubernetes",
          "Gitlab CI/CD",
          "Prometheus",
          "Kibana",
          "Java",
          "Postgres",
          "SQL",
        ]}
      />
      <Skillv2
        location="Tunis, Tunisia"
        description="While studying at university. Taught during the week-ends a group of 8 students from various ages 14 to 40 web
        development technologies. Such as HTML, CSS, Node.js, Javascript, Typescript, Angular."
        achievement={[
          "Conducted more than 15 workshops about web development.",
          "Created 6 new learning projects and proposed them to Gomycode as new official training projects.",
        ]}

        descriptions={[
          {
            description: `While studying at university. Taught a group of 8 students from various ages 14 to 40 web development technologies during the
            week-ends. Such as HTML, CSS, Node.js, Javascript, Typescript, React.js.
            `,
            achievements: [
              "Conducted more than 15 workshops about web development.",
              "Created 6 new learning projects and proposed them to Gomycode as new official training projects.",
            ],
          }
        ]}
        startDate="07/2019"
        endDate="01/2020"
        title="Part-Time Web Lecturer"
        company="GOMYCODE"
        tags={["React", "Javascript", "HTML", "CSS", "Node.js"]}
        link="https://gomycode.com/"
      />
    </>
  );
};

export default Skills;
