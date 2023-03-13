import React from "react";
import Skill from "./Experience/Experience";
const Skills = () => {
  return (
    <>
      <Skill
        description="Led the development of microservice applications that handles the electronic signature of contracts
        between car dealers and customers for a famous car manufacturer using Java, Spring Boot, Terraform,
        Kubernetes, Docker, AWS, EKS, SNS, SQS, Github Actions (CI/CD), Angular, TypeScript, 
        "
        startDate="01/2022"
        endDate="Present"
        title="Lead Software Engineer"
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
          "Docker compose",
          "DataDog",
          "AWS",
        ]}
        achievement={[
"Designed a code optimization solution which resulted in five times faster response time.",
"Collaborated extensively with the product owner in backlog ordering and refinement activities.",
"Participated in technical interviews for new project candidates.",
"Coached team members on NEXUS SCRUM, software development, testing and architecture.",
"Integrated multiple third-party vendors into the project such as Scrive, Salesforce and Onfido.",
"Was the first technical contact person for multiple microservices.",
        ]}
      />
      <Skill
      location="Tunis, Tunisia"
      achievement={[
        "Created a CI/CD pipeline optimization solution and proposed it to our team's architect.",
"Coached new project trainees on software development and SCRUM.",
"Remained on-call to urgently support clients, fix bugs and resolve incidents.",

      ]}
        description="Participated in the development of a social media microservice applications for luxurious car owners
        which provides access to prestigious activities and offers using Spring Boot, Java, Docker, Kubernetes,
        AWS, EKS, Kafka Message Broker, Terraform, Gitlab CI, Angular, REST API, Open API, PostgreSQL.        
        "
        startDate="08/2020"
        endDate="12/2021"
        title="Software Engineer"
        company="MAIBORNWOLFF SARL"
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
      <Skill
      location="Tunis, Tunisia"
      achievement={[
        "Created a CI/CD pipeline with continuous deployment to AWS EKS.",
"Migrated part of a monolithic application to a full stack microservice based solution.",
"Documented the migration steps as a prof of concept.",

      ]}
        description="Migrated a part of a monolithic JEE/JSF application which calculates the usage of car manufacturer
        equipment's per employee. To a microservices-based solution using Java, Spring boot, Docker,
        Kubernetes, Helm, AWS, EKS, Angular, HTML, CSS, Github Actions (CI/CD), SQL, Elasticsearch.        
        "
        startDate="02/2020"
        endDate="07/2020"
        title="Trainee Software Engineer"
        company="MAIBORNWOLFF SARL"
        link="https://www.maibornwolff.de/en/tunisia"
        tags={[
          "Spring",
          "Spring boot",
          "Spring security",
          "Microservice",
          "SQL",
          "Docker",
          "Docker compose",
          "Kubernetes",
          "Gitlab CI/CD",
        ]}
      />
            <Skill
      location="Tunis, Tunisia"
        description="Taught during the week-ends (part-time) a group of 8 students from various ages 14 to 40 web
        development technologies. Such as HTML, CSS, Bootstrap, Node.js, Javascript, Typescript, Angular."
        achievement={[
          "Conducted more than 15 workshops about web development.",
"Created 6 new learning projects and proposed them to Gomycode as new official training projects.",
        ]}
        startDate="08/2019"
        endDate="12/2019"
        title="Angular Web Lecturer"
        company="GOMYCODE"
        tags={["React", "Javascript", "HTML", "CSS", "Node.js"]}
        link="https://gomycode.com/"
      />
      <Skill
      location="Tunis, Tunisia"
        description="Collaborated with a doctor to define the business requirements for a forum web application about
        Alzheimer disease. And developed it from scratch within a team of 4 trainees using Java, Spring boot,
        Docker, AWS, ECS, S3, ALB, RDS, Lambda, Cloudfront, Angular, Github Actions (CI/CD), SQL."
        achievement={[
          "Collaborated extensively with the doctor to define business requirements and user stories.",
"Implemented user authentication and authorization with JWT token and spring security.",
"Deployed and integrated backend and front end parts on AWS ECS, S3 and Cloudfront.",
"Was the Scrum Master of our team.",
        ]}
        startDate="05/2019"
        endDate="07/2019"
        title="Trainee Software Engineer"
        company="ESPRIT MINOS GROUP"
        tags={["React", "GraphQL", "Javascript", "Next.js", "Node.js"]}
        link="http://esprit.tn/"
      />
      <Skill
      location="Tunis, Tunisia"
        description="Collaborate with the CEO of Vertel start-up to define the business requirements for a marketplace web
        application and develop it from scratch within a team of 3 trainees using Javascript, Node.js, NoSql,
        Express.js, MongoDb, React.js.        
        "
        achievement={[
          "Collaborated with the CEO of Vertel to define business requirements and user stories.",
"Created a full stack js application from scratch."

        ]}
        startDate="05/2017"
        endDate="07/2017"
        title="Trainee Software Engineer"
        tags={["Express.js", "Node.js", "Javascript", "MongoDB", "HTML", "CSS", "React"]}
        company="Vertel"
        link="https://gust.com/companies/Kadolista-Vertel"
      />
    </>
  );
};

export default Skills;
