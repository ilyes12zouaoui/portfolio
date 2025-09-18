import React from "react";
import Skillv2 from "./Experience/Experiencev2";
const Skills = () => {
  return (
    <>
          <Skillv2
        descriptions={[
          {
            description: `Participating in the development of microservice applications in the medical field using Java, Spring
            Boot, Quarkus, Docker, Kubernetes, Hibernate, MongoDB, PostgreSQL, Event Broker and Scrum.`,
          achievements: [
            `Designed the technical architecture for integrating a third-party vendor into the system and
            collaborated extensively with the product owner to define its implementation steps.`,
            `Coached junior colleagues by conducting KT sessions and reviewing code implementations.`,
            `Lead the code migration from a legacy internal framework to the Spring Boot framework.`
          ]
          }
        ]}
        title="Software Engineer"
        startDate="09/2023"
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
            description: `Worked on two consulting projects. In the first project, participated in the development of
            microservice applications that handle the electronic signature of contracts between car dealers and
            customers using Java, Spring Boot, NestJs, Node.js, TypeScript, JavaScript, Docker, Terraform,
            Git, Kubernetes, and AWS.`,
            achievements: [
              "Integrated multiple third-party vendors into the project such as Scrive, Salesforce, and Onfido.",
              "Enhanced the system’s response time significantly by proposing code refactoring optimizations.",
              "Collaborated with the product owner proxy on urgent bug investigation and resolution."
            ],
          },
          {
            description: `In the second project, participated in the development of a car assembly line management
            application using Java.
            `,
            achievements: [
              "Assisted with the agile transformation of our international Scrum team from Germany and India.",
              "Participated in the migration of legacy CORBA APIs to RESTful APIs using Java."
            ],
          },
        ]}
        title="Software Engineer"
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
          "NestJs",
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
            description: `Worked on three consulting projects. In the first project, participated in the migration of a social media application for luxurious car owners from PHP Drupal system to microservice solutions using Java, Spring Boot, Event broker, PostgreSql, Docker, Kubernetes, Gitlab CI and Angular.`,
            achievements: [
              "Created a CI/CD pipeline optimization solution and presented it to our team's architect.",
              "Presented the company to candidates and assisted in the recruitment of 3 new colleagues.",
            ],
          },
          {
            description: `In the second project, participated in the Development and maintenance of legacy microservice applications for automotive supply chain management using Quarkus, Java, Docker, Angular, Javascript, Typescript, Jenkins, Kubernetes and PostgreSql.
            `,
            achievements: [
              "Remained on call to urgently support client incidents and fix code bugs.",
              "Was responsible for the onboarding of two new colleagues to the project."
            ],
          },
          {
            description: `In the third project, participated in the migration of a part of a monolithic application that calculates
            the usage of car manufacturer equipment to a microservice solution with deployment to the cloud
            using Java, Spring Boot, Docker, Kubernetes, TypeScript, MySql, React.js, Gitlab CI and AWS.
            `,
            achievements: [
              "Documented the migration steps as a proof of concept."
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
        jobTitle2="Software Engineer"
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
        description="While studying at university. Taught a group of 8 students during the weekend web development
        technologies such as HTML, CSS, Node.js, Javascript, Typescript and React.js"
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
              "Conducted more than 15 workshops and proposed 6 new learning projects to Gomycode.",
            ],
          }
        ]}
        startDate="07/2019"
        endDate="01/2020"
        title="Part-Time Web Lecturer Trainee"
        company="GOMYCODE"
        tags={["React", "Javascript", "HTML", "CSS", "Node.js"]}
        link="https://gomycode.com/"
      />
    </>
  );
};

export default Skills;
