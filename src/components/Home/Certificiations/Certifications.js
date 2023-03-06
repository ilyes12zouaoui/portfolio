import React from "react";
import Skill from "./Certification/Certification";
import PSDIcon from "../icons/psd1.png";
import PSPO2Icon from "../icons/pspo2.png";
import PSPO1Icon from "../icons/pspo1.png";
import PSM2Icon from "../icons/psm2.png";
import PSM1Icon from "../icons/psm1.png";
import SpringIcon from "../icons/spring.png";
import CKADIcon from "../icons/ckad.png";
import AWSIcon from "../icons/aws.png";

const Certification = ({link, icon}) => {
  return (
    <li className="list-inline-item" style={{margin:"13px"}}>
      <a href={link} target="_blank">
        <img src={icon} style={{ width: "110px", height: "110px" }} />
      </a>
    </li>
  );
};

const IconsArray = [
  {icon: PSPO2Icon, link: "https://www.credly.com/badges/db953274-5788-4433-ab60-b9e57fc21f02"},
  {icon: PSM2Icon, link: "https://www.credly.com/badges/8b0cebb4-82b8-468c-b53e-2279f270076e"},
  {icon: SpringIcon, link: "https://www.credly.com/badges/208212c4-dc35-4c5b-b71d-c0bacb92a2dd"},
  {icon: CKADIcon, link: "https://www.credly.com/badges/403ca006-36bf-4490-92a4-02d0cf7cae17"},
  {icon: AWSIcon, link: "https://www.credly.com/badges/33485b11-4c76-4cd1-a600-ce272e34a319"},
  {icon: PSPO1Icon, link: "https://www.credly.com/badges/34a02e52-bb4a-4855-9f92-0e4e7dda9874"},
  {icon: PSM1Icon, link: "https://www.credly.com/badges/7224b9a2-1b44-4fe9-8f0d-dcf1f8306d9e"},
  {icon: PSDIcon, link: "https://www.credly.com/badges/8c3247bb-a50d-49da-adae-b3dd3cafc7cd"},
];

const Certifications = () => {

  return (
      <div className="text-center">
        <ul className="list-unstyled list-inline" style={{ margin: 0 }}>
          {IconsArray.map(({icon,link})=><Certification link={link} icon={icon} />)}
        </ul>
      </div>

  );
};

export default Certifications;
