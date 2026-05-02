import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

// Projects images
import L_WeatherApp from "../../assets/img/projects/weather_app.png";
import L_Expenseemitracker from "../../assets/img/projects/expense-emi-tracker.png";
import L_ImageSearch from "../../assets/img/projects/image-search-download.png";
import L_JobsSearch from "../../assets/img/projects/Job-Search-Apply.png";
import L_Githubuserrepo from "../../assets/img/projects/githubuserrepo.webp";
import L_RandomQuoteGenerators from "../../assets/img/projects/quote_generator_app.png";

// Tech stack icons
import L_REACT from "../../assets/img/skills/react.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";

import "./project-timeline.style.css";

const projectsData = [
  {
    title: "Weather App",
    description: "Real-time weather data for over 200,000 cities worldwide. Features dynamic backgrounds that change based on conditions.",
    image: L_WeatherApp,
    tech: [L_HTML5, L_CSS3, L_JAVASCRIPT, L_REACT],
    live: "https://weather.fcruz.org",
    source: "https://github.com/ajf013/Weather-app-react"
  },
  {
    title: "GitHub User Repo",
    description: "Search and explore public GitHub repositories. Integrates GitHub API for real-time profile and repo information.",
    image: L_Githubuserrepo,
    tech: [L_HTML5, L_CSS3, L_REACT, L_GIT],
    live: "https://githubuserrepo.netlify.app/",
    source: "https://github.com/ajf013/Github_user_repo"
  },
  {
    title: "Random Quote Generator",
    description: "Modern inspiration app with category filtering, language support, and dark mode. Fully installable PWA.",
    image: L_RandomQuoteGenerators,
    tech: [L_HTML5, L_CSS3, L_REACT],
    live: "https://randomquotegeneratorapp.netlify.app",
    source: "https://github.com/ajf013/random-quote-generator-react.git"
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
    title: "Image Search & Download",
    description: "Search for high-quality images via Pexels API and download them directly. Intuitive grid layout for easy browsing.",
    image: L_ImageSearch,
    tech: [L_HTML5, L_CSS3, L_JAVASCRIPT, L_REACT],
    live: "https://imagedownloader.fcruz.org",
    source: "https://github.com/ajf013/image-search-download.git"
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