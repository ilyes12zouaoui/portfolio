import React from "react";
import Informations from "./Informations/Informations";
var Scroll = require("react-scroll");

var Element = Scroll.Element;
const FormLayout = ({ user, isOwner = false }) => {
  return (
    <>
      <Element name="contactScrollTo"></Element>
      <Informations />
    </>
  );
};

export default FormLayout;
