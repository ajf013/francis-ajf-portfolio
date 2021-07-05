import React from 'react';
import Fade from 'react-reveal/Fade'
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Skills from './pages/skills/skills.component'

//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.components';
import ProjectTimeLine from './components/projects-timeline/project-timeline.component'
import ProjectTimeLine2 from './components/projects-timeline 2/project-timeline.component'
import Contact from "./pages/contact-form/contact-form.component";
import FooterPanel from'./components/footer/footer.component';

import './App.css';

const App = () => {
  return (
  <div className="App" style={{ position: "relative" }}>
        <MyNavbar />
        <MyCarousal />
        <TitleMessage />
        {/* <Particles className="particles particles-box" params={particlesOptions}
      /> */}
        {/* about me section */}
        <div>
        <Parallax blur={{ min: -30, max: 30 }} bgImage={require("./assets/img/parallex/background.webp")} bgImageAlt="" strength={-200}>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
        </Parallax>
      </div>
      {/* Skils section */}
      <div>
           <Container className="container-box rounded">
              <Fade duration={500}>
              <Skills />
              </Fade>
            </Container>
        </div>

        {/* Project timeline section  */}
        <div>
           <Container className="container-box rounded">
              <Fade duration={500}>
              <ProjectTimeLine />
              <ProjectTimeLine2 />
              </Fade>
            </Container>
        </div>

        {/* Contact Section  */}
        <div>
           <Container className="container-box rounded">
              <Fade duration={500}>
                <hr />
              <Contact />
              </Fade>
            </Container>
        </div>

        <hr />
        <FooterPanel />
    </div>
    );
};

export default App;
