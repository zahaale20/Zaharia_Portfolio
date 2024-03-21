import React from 'react';
import styled, { keyframes } from 'styled-components';
import java from "../../assets/java.png";
import python from "../../assets/python.png";
import c from "../../assets/c.png";
import git from "../../assets/git.png";
import linux from "../../assets/linux.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import swift from "../../assets/swift.png";
import openai from "../../assets/openai.png";
import firebase from "../../assets/firebase.png";
import apachespark from "../../assets/apachespark.png"
import apachehadoop from "../../assets/apachehadoop.png"
import mysql from "../../assets/mysql.png";
import sqllite3 from "../../assets/sqllite3.png";
import mongodb from "../../assets/mongodb.png";
import pandas from "../../assets/pandas.png";
import rstudio from "../../assets/rstudio.png";
import adobeillustrator from "../../assets/adobeillustrator.png";
import adobephotoshop from "../../assets/adobephotoshop.png";
import riscv from "../../assets/riscv.png";
import arm from "../../assets/arm.png";
import office from "../../assets/office.png";

const scrollAnimation = keyframes`
  0% { transform: translateX(100%); }
  -100% { transform: translateX(100%); }
`;

const ScrollingTechStack = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  animation: ${scrollAnimation} 30s linear infinite;
`;

const TechStackSection = styled.div`
  width: 100%;
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 3;
`;

const techLogos = [
    { src: python, alt: "Python" },
    { src: java, alt: "Java" },
    { src: c, alt: "C" },
    { src: git, alt: "Git" },
    { src: linux, alt: "Linux" },
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: javascript, alt: "JavaScript" },
    { src: react, alt: "React" },
    { src: swift, alt: "Swift" },
    { src: openai, alt: "OpenAI" },
    { src: firebase, alt: "Firebase" },
    { src: apachespark, alt: "Apache Spark" },
    { src: apachehadoop, alt: "Apache Hadoop" },
    { src: mysql, alt: "MySQL" },
    { src: sqllite3, alt: "SQLite" },
    { src: mongodb, alt: "MongoDB" },
    { src: pandas, alt: "Pandas" },
    { src: rstudio, alt: "RStudio" },
    { src: adobeillustrator, alt: "Adobe Illustrator" },
    { src: adobephotoshop, alt: "Adobe Photoshop" },
    { src: riscv, alt: "RISC-V" },
    { src: arm, alt: "ARM" },
    { src: office, alt: "Microsoft Office" }
];

export const TechStack = () => {
  const logosForScrolling = [...techLogos, ...techLogos];

  return (
    <TechStackSection>
      <ScrollingTechStack>
        {logosForScrolling.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} style={{ width: '50px', height: 'auto' }} />
        ))}
      </ScrollingTechStack>
    </TechStackSection>
  );
};