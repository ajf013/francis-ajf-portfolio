import React from "react";
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

import "./App.css";

const App = () => {
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
          <Skills />
        </Container>
      </div>

      {/* Experience Section */}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded slide-up">
            <hr />
            <Experience />
          </Container>
        </Parallax>
      </div>

      {/* Projects Section */}
      <div>
        <Container className="container-box rounded fade-up">
          <ProjectTimeLine />
          {/* <ProjectTimeLine2 /> */}
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
    </div>
  );
};

export default App;