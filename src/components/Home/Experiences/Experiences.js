import React from "react";
import Skill from "./Experience/Experience";
const Skills = () => {
  return (
    <>
      <Skill
        description="Took part in a SCRUM team responsible for
        providing financial services to a famous car
        manufacturer. The project handles the
        electronic signature of contracts between car
        dealers and clients. The existing microservice
        solutions had critical technical debt, slow,
        unstable behavior and unsatisfied clients. Led
        the analysis, refactoring and fixing of complex
        logical and performance issues while we kept
        responding to new requirements quickly.
        Which result in improving the scalability and
        performance of our system. As well as gaining
        the trust and satisfaction of our clients"
        startDate="01/01/2022"
        endDate="Today"
        title="Software engineer"
        company="Capgemini"
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
      />
      <Skill
        description="Took part in an international team from
        Europe and Africa to migrate an application
        for luxury car owners. Which enables them to
        access fancy world offers and connect with
        each other. We migrated from a legacy Drupal
        system to a new microservice solution with
        enhancements and usage of event driven
        design. Led the creation of a reverse proxy
        microservice responsible for synchronizing
        our system with salesforce vendor using
        CometD message broker. Then took part in a
        second project. Which is a legacy microservice
        solutions for automotive supply chain
        management. We maintained, refactored and
        added new features to it. Led junior colleagues
        during the project. Also was on call to provide
        support and resolved client incidents urgently.
        Aside from that I actively participated in
        recruiting by presenting the company to
        potential candidates. And helped in
        successfully recruiting four new colleagues.
        "
        startDate="01/08/2020"
        endDate="16/12/2021"
        title="Software engineer"
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
        description="Migrating a part of a monolithic JEE/JSF
        application to a microservice based solution
        with continuous deployment to Azure
        Kubernetes Service. And documentation of
        migration steps as a proof of concept.
        "
        startDate="01/02/2020"
        endDate="31/07/2020"
        title="Software Engineer Trainee"
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
        description="Collaborate with a doctor to define the
        business requirements for a forum web
        application about Alzheimer disease. Design
        and develop it from scratch."
        startDate="01/06/2019"
        endDate="16/10/2019"
        title="Software Engineer Trainee"
        company="ESPRIT MINOS GROUP"
        tags={["React", "GraphQL", "Javascript", "Next.js", "Node.js"]}
        link="http://esprit.tn/les-equipes/"
      />
      <Skill
        description="Teaching a group of 8 students from
        different ages (14-37 years) web
        development. Realization of more than 15
        workshops and 6 new training web projects.
        I had a very positive feed back from my
        students so I proposed these projects to
        GOMYCODE as new training projects.
        "
        startDate="03/02/2019"
        endDate="28/07/2019"
        title="Software Engineer Trainee"
        company="GOMYCODE"
        tags={["React", "Javascript", "HTML", "CSS", "Node.js"]}
        link="https://gomycode.com/"
      />
      <Skill
        description="Collaborate with the CEO of Vertel start-up to
        define the business requirements for a
        marketplace web application and develop it.
        "
        startDate="19/05/2017"
        endDate="16/08/2017"
        title="Software Engineer Trainee"
        tags={["Laravel 5", "php", "Javascript", "SQL", "HTML", "CSS"]}
        company="Vertel"
        link="https://gust.com/companies/Kadolista-Vertel"
      />
    </>
  );
};

export default Skills;
