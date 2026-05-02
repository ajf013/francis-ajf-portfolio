import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "react-bootstrap/Image";

import "./skills.style.css";
import { skills } from "./skills-data";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  // Helper to add category to skills
  const addCategory = (skillList, category) => 
    skillList.map(skill => ({ ...skill, category }));

  // Group skills into two rows
  const upperRowSkills = [
    ...addCategory(skills.frontend, "Frontend"),
    ...addCategory(skills.backend, "Backend"),
    ...addCategory(skills.programmingLanguages, "Language")
  ];

  const lowerRowSkills = [
    ...addCategory(skills.cloud, "Cloud"),
    ...addCategory(skills.devops, "DevOps"),
    ...addCategory(skills.databases, "Database"),
    ...addCategory(skills.versionControl, "Tools"),
    ...addCategory(skills.hostingPlatforms, "Hosting"),
    ...addCategory(skills.codeEditors, "Editor")
  ];

  // Duplicate for seamless marquee
  const fullUpperRow = [...upperRowSkills, ...upperRowSkills];
  const fullLowerRow = [...lowerRowSkills, ...lowerRowSkills];

  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 data-aos="zoom-in" className="text-center font-details-b pb-5">
        TECH SKILLS
      </h1>

      {/* Upper Row - Scrolls Left */}
      <div data-aos="zoom-in" className="skill-marquee-container mb-4">
        <div className="skill-marquee-content scroll-left">
          {fullUpperRow.map((skill, index) => (
            <div className="skill-pill" key={index}>
              <span className="category-tag">{skill.category}</span>
              <a className="text-white text-decoration-none d-flex align-items-center" href={skill.link} target="_blank" rel="noopener noreferrer">
                <Image src={skill.imgSrc} alt={skill.imgAltText} className="skill-icon" />
                <span className="skill-name">{skill.skillName}</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Lower Row - Scrolls Right */}
      <div data-aos="zoom-in" className="skill-marquee-container">
        <div className="skill-marquee-content scroll-right">
          {fullLowerRow.map((skill, index) => (
            <div className="skill-pill" key={index}>
              <span className="category-tag">{skill.category}</span>
              <a className="text-white text-decoration-none d-flex align-items-center" href={skill.link} target="_blank" rel="noopener noreferrer">
                <Image src={skill.imgSrc} alt={skill.imgAltText} className="skill-icon" />
                <span className="skill-name">{skill.skillName}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
