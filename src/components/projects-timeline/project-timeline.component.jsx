import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

// Projects images
import L_CloudSentry from "../../assets/img/projects/cloudsentry.png";
import L_CruzOpsAI from "../../assets/img/projects/cruzops-ai.png";
import L_AzureFinancialInsights from "../../assets/img/projects/azure-financial-insights.png";
import L_Expenseemitracker from "../../assets/img/projects/expense-emi-tracker.png";
import L_WeatherApp from "../../assets/img/projects/weather_app.png";
import L_JobsSearch from "../../assets/img/projects/Job-Search-Apply.png";

// Tech stack icons
import L_REACT from "../../assets/img/skills/react.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_TYPESCRIPT from "../../assets/img/skills/typescript.svg";
import L_AZURE from "../../assets/img/skills/azure.svg";
import L_AZURE_DEVOPS from "../../assets/img/skills/azure-devops.svg";
import L_TERRAFORM from "../../assets/img/skills/terraform.svg";

import "./project-timeline.style.css";

const projectsData = [
  {
    title: "CloudSentry",
    description: "A cloud security platform evaluating posture, compliance alerts, and risk assessments using dual AI engines (Azure OpenAI and Gemini).",
    image: L_CloudSentry,
    tech: [L_REACT, L_TYPESCRIPT, L_AZURE, L_AZURE_DEVOPS],
    live: "https://cloudsentry.fcruz.org",
    source: "https://github.com/ajf013/CloudSentry"
  },
  {
    title: "CruzOps-AI",
    description: "An AIOps chat assistant querying Azure infrastructure resources and generating optimized Terraform modules & scripts in real-time.",
    image: L_CruzOpsAI,
    tech: [L_REACT, L_JAVASCRIPT, L_AZURE, L_TERRAFORM],
    live: "https://github.com/ajf013/CruzOps-AI",
    source: "https://github.com/ajf013/CruzOps-AI"
  },
  {
    title: "Azure Financial Insights",
    description: "A FinOps governance dashboard tracking resource spend, budgeting, forecasts, and generating cost-saving right-sizing suggestions.",
    image: L_AzureFinancialInsights,
    tech: [L_REACT, L_JAVASCRIPT, L_AZURE, L_AZURE_DEVOPS],
    live: "https://insights.fcruz.org",
    source: "https://github.com/ajf013/Azure-Financial-Insights"
  },
  {
    title: "Expense EMI Tracker",
    description: "A comprehensive financial tool to track daily expenses and calculate EMIs for home, car, and personal loans.",
    image: L_Expenseemitracker,
    tech: [L_HTML5, L_CSS3, L_JAVASCRIPT, L_REACT],
    live: "https://expense.fcruz.org",
    source: "https://github.com/ajf013/Expense-EMI-Tracker-React.git"
  },
  {
    title: "Weather App",
    description: "Real-time weather data for over 200,000 cities worldwide. Features dynamic backgrounds that change based on conditions.",
    image: L_WeatherApp,
    tech: [L_HTML5, L_CSS3, L_JAVASCRIPT, L_REACT],
    live: "https://weather.fcruz.org",
    source: "https://github.com/ajf013/Weather-app-react"
  },
  {
    title: "Jobs Search & Apply",
    description: "Find and apply for jobs in India using real-time data from Adzuna API. Features role filtering and dark mode support.",
    image: L_JobsSearch,
    tech: [L_REACT, L_CSS3],
    live: "https://jobs.fcruz.org",
    source: "https://github.com/ajf013/Jobs-Search-and-Apply-React.git"
  }
];

const ProjectTimeLine = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const isMobile = window.innerWidth < 768;

  return (
    <div id="projects" className="py-5">
      <h1 data-aos="zoom-in" className="text-center font-details-b pb-5">PROJECTS</h1>
      <Container>
        <div className="project-grid">
          {projectsData.map((project, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="project-item-wrapper">
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.02}
                disableTilt={isMobile}
                className="project-card-container"
              >
                <div className="project-card">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech-stack">
                      {project.tech.map((icon, i) => (
                        <Image key={i} src={icon} className="tech-icon" title="Tech Icon" />
                      ))}
                    </div>
                    <div className="project-buttons">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-btn btn-live">
                        SEE LIVE
                      </a>
                      <a href={project.source} target="_blank" rel="noopener noreferrer" className="project-btn btn-source">
                        SOURCE CODE
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
              <h3 className="project-card-title-external">{project.title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProjectTimeLine;