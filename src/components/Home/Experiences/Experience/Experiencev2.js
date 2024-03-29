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
const Skillv2 = ({
  title,
  startDate,
  endDate,
  jobTitle,
  startDate2,
  endDate2,
  jobTitle2,
  descriptions = [],
  company,
  link = "",
  tags= [],
  location = ""
}) => {
  return (
    <div
      className="mb-4 mt-5 p-4"
      style={{ border: "2px solid #22aeffbb", borderRadius: "15px" }}
    >
      <h1
        className="mb-2"
        style={{color:"#777", marginBottom: "10px", fontSize: "20px" }}
      >
        {`${title}`}{" "}
      </h1>
      <div
        style={{ marginBottom: "5px" }}
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
            <>
            <a target="_blank" className="color-blue" href={link}>
              {company}  
            </a> 
            {!!location && ` | ${location}`}
            </>
          ) : (
            {company} - {location}
          )}{" "}
        </span>
      </div>
      {
        descriptions.map((desc,i)=><>
        <div style={{ color: "#666", fontSize: "14px" }} className={`mt-${i>0?"3":"2"} mb-1`}>
        {desc.description}
      </div>
      {!!desc.achievements.length && 
      <ul style={{ color: "#666", fontSize: "14px", paddingLeft:"16px" }} className={`mt-1 mb-2`}>
        {desc.achievements.map(value=><li className="mt-1">{value}</li>)}
      </ul>}
      </>
        )
        }
  </div>)
};

export default Skillv2;
/*
<div>
{tags.map(tag => {
  return <Tag title={tag} />;
})}
</div>
*/