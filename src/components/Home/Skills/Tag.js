import React from "react";
import Style from "./Tag.module.css";
export default ({ title }) => {
  return <span className={`${Style.tag}`}>{title}</span>;
};
