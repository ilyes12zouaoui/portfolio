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

import style from "./Education.module.css";
const Skill = ({
  title,
  startDate,
  endDate,
  description,
  company,
  link = ""
}) => {
  return (
    <div
      className="mb-4 mt-5 p-4"
      style={{ border: "2px solid #22aeffbb", borderRadius: "15px" }}
    >
      <h1
        className=" mb-3"
        style={{ marginBottom: "10px", fontSize: "20px", color: "#777" }}
      >
        {`${title}`}{" "}
      </h1>
      <div
        style={{ marginBottom: "1px" }}
        className={style["profile-information-lane"]}
      >
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className="color-blue"
          size="sm"
        />
        <span
         
          className={style["profile-information-lane-span"]}
        >
          {startDate} - {endDate}
        </span>
      </div>
      <div className={style["profile-information-lane"]}>
        <FontAwesomeIcon
          icon={faFortAwesome}
          className="color-blue"
          size="sm"
        />
        <span
         
          className={style["profile-information-lane-span"]}
        >
          {!!link ?(
             <>
            <a className="color-blue" target="_blank" href={link}>
              {company}
            </a>
            {" "}| Tunis, Tunisia 
            </>
          ) : (
            company
          )}{" "}
        </span>
      </div>
      <div style={{ color: "#666", fontSize: "14px" }} className="mt-3 mb-1">
        {description}
      </div>
    </div>
  );
};

export default Skill;
