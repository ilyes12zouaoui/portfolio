import React from "react";
import { ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCalendarAlt,
  faVenusMars,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { faObjectGroup } from "@fortawesome/free-regular-svg-icons";
import { faFortAwesome } from "@fortawesome/free-brands-svg-icons";

import style from "./Experience.module.css";
import Tag from "../../../Projects/Project/Informations/Tag";
const Skill = ({
  title,
  startDate,
  endDate,
  description,
  company,
  link = "",
  tags= []
}) => {
  return (
    <div
      className="mb-4 mt-5 p-4"
      style={{ border: "2px solid #22aeffbb", borderRadius: "15px" }}
    >
      <h1
        className="color-blue mb-2"
        style={{ marginBottom: "10px", fontSize: "20px" }}
      >
        {`${title}`}{" "}
      </h1>
      <div
        style={{ marginBottom: "4px" }}
        className={style["profile-information-lane"]}
      >
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className="color-blue"
          size="sm"
        />
        <span className={style["profile-information-lane-span"]}>
          {startDate} - {endDate}
        </span>
      </div>
      <div className={style["profile-information-lane"]}>
        <FontAwesomeIcon
          icon={faFortAwesome}
          className="color-blue"
          size="sm"
        />
        <span className={style["profile-information-lane-span"]}>
          {!!link ? (
            <a target="_blank" className="color-blue" href={link}>
              {company}
            </a>
          ) : (
            company
          )}{" "}
        </span>
      </div>
      <div style={{ color: "#666", fontSize: "14px" }} className="mt-2 mb-1">
        {description}
      </div>
      <div>
        {tags.map(tag => {
          return <Tag title={tag} />;
        })}
      </div>
      
    </div>
  );
};

export default Skill;
