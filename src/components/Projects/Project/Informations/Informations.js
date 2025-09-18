import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button/ButtonBlue";
import Tag from "./Tag";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faWindowMaximize,
  faGitSquare
} from "@fortawesome/free-regular-svg-icons";

import style from "./Informations.module.css";
const Informations = ({
  tags = [],
  title = "",
  githubLink = "",
  secondGithubLink = "",
  onlineLink = "",
  description = ""
}) => {
  return (
    <div>
      <a href="https://www.linkedin.com/in/ilyes-zouaoui/" target="_blank">
      <span style={{ display: "inline-block" }} className={style.userSection}>
        <span style={{ display: "flex" }}>
          <img
            src={`images/users/profile3.jpg`}
            style={{
              height: "35px",
              width: "35px",
              borderRadius: "50%",
              // border: "1px solid rgba(17, 150, 204, 0.75)",
              marginRight: "8px"
            }}
          />
          <div
            style={{
              "font-size": "11px",
              color: "#A9A9A9",
              lineHeight: "16px"
            }}
          >
            <span
              style={{
                color: "rgba(17, 150, 204, 0.75)",
                fontSize: "12px",
                fontWeight: "500"
              }}
            >
              Ilyes Zouaoui
            </span>
            <br />
            <span>Software Engineer</span>
          </div>
        </span>
      </span>
      </a>
      {/* <hr /> */}
      <h1
        className="color-blue mt-2"
        style={{ marginBottom: "10px", fontSize: "24px" }}
      >
        {`${title}`}{" "}
      </h1>

      <div style={{ color: "#777", fontSize: "14px" }} className=" mb-2">
        {description}
      </div>

      {!githubLink ? null : (
        <div className={style["profile-information-lane"]}>
          <FontAwesomeIcon icon={faGithub} className="color-blue" size="lg" />
          <span className={style["profile-information-lane-span"]}>
            <a href={githubLink} target="_blank" className="color-blue">
              {githubLink}
            </a>
          </span>
        </div>
      )}
            {!secondGithubLink ? null : (
        <div className={style["profile-information-lane"]}>
          <FontAwesomeIcon icon={faGithub} className="color-blue" size="lg" />
          <span className={style["profile-information-lane-span"]}>
            <a href={secondGithubLink} target="_blank" className="color-blue">
              {secondGithubLink}
            </a>
          </span>
        </div>
      )}
      {!onlineLink ? null : (
        <div className={style["profile-information-lane"]}>
          <FontAwesomeIcon
            icon={faWindowMaximize}
            className="color-blue"
            size="lg"
          />
          <span className={style["profile-information-lane-span"]}>
            <a href={onlineLink} target="_blank" className="color-blue">
              {onlineLink}
            </a>
          </span>
        </div>
      )}
      <hr style={{ marginBottom: "10px" }} />
      <div>
        {tags.map(tag => {
          return <Tag title={tag} />;
        })}
      </div>
    </div>
  );
};
export default Informations;
