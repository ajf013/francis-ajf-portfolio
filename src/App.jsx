import React, { useState } from "react";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

import Skills from "./pages/skills/skills.component";

// components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.components";
import ProjectTimeLine from "./components/projects-timeline/project-timeline.component";
// import ProjectTimeLine2 from "./components/projects-timeline 2/project-timeline.component";
import Contact from "./pages/contact-form/contact-form.component";
import FooterPanel from "./components/footer/footer.component";
import Experience from "./pages/experience/experience.component";
import Certifications from "./pages/certifications/certifications.component";
import CopilotWidget from "./components/copilot/CopilotWidget";
import FinOpsSimulator from "./components/finops-simulator/FinOpsSimulator";

import backgroundImage from "./assets/img/parallex/background.webp";

import "./App.css";

const App = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />

      {/* About Section */}
      <div>
        <Container className="container-box rounded fade-up">
          <About />
        </Container>
      </div>

      {/* Skills Section */}
      <div>
        <Container className="container-box rounded fade-up">
          <Skills activeSkill={activeSkill} setActiveSkill={setActiveSkill} />
        </Container>
      </div>

      {/* Experience Section */}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={backgroundImage}
          bgImageAlt=""
          strength={-200}
        >
          <div style={{ background: "rgba(10, 15, 30, 0.7)", padding: "40px 0" }}>
            <Container className="container-box rounded slide-up">
              <hr />
              <Experience />
            </Container>
          </div>
        </Parallax>
      </div>

      {/* Projects Section */}
      <div>
        <Container className="container-box rounded fade-up">
          <ProjectTimeLine activeSkill={activeSkill} />
          {/* <ProjectTimeLine2 /> */}
        </Container>
      </div>

      {/* FinOps Simulator Section */}
      <div>
        <Container className="container-box rounded fade-up">
          <FinOpsSimulator />
        </Container>
      </div>

      {/* Certifications Section */}
      <div id="certifications">
        <Container className="container-box rounded fade-up">
          <Certifications />
        </Container>
      </div>

      {/* Contact Section */}
      <div>
        <Container className="container-box rounded fade-up">
          <hr />
          <Contact />
        </Container>
      </div>

      <hr />
      <FooterPanel />
      <CopilotWidget />
    </div>
  );
};

export default App;