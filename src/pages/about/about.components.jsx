import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Profile from "../../assets/img/profile/profile.webp";
import Resume from "../../assets/resume/Francis_Resume.pdf";
import "./about.style.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div id="about" className="py-5">
      <h1 data-aos="zoom-in" className="text-center font-details pb-5">ABOUT ME</h1>
      <Container>
        <Row className="align-items-center">
          {/* Profile Image Column */}
          <Col xs={12} lg={5} className="mb-5 mb-lg-0" data-aos="zoom-in">
            <div className="profile-wrapper">
              <Image className="profile" alt="profile" src={Profile} fluid />
            </div>
          </Col>

          {/* Bio Details Column */}
          <Col xs={12} lg={7}>
            <div className="info-card" data-aos="zoom-in" data-aos-delay="100">
              <h4>Core Identity</h4>
              <p>
                Hi there! I’m <strong>Francis Cruz (MCT)</strong>. I am a <strong>Senior Project Engineer | Azure Administrator | DevOps Engineer</strong> at 
                <strong> Wipro</strong>, specializing in designing, automating, and securing robust enterprise-scale 
                cloud infrastructures on Microsoft Azure.
              </p>
            </div>

            <div className="info-card" data-aos="zoom-in" data-aos-delay="200">
              <h4>Academic Excellence</h4>
              <p>
                I hold an <strong>M.Tech in Computing Systems and Infrastructure</strong> from 
                <strong> BITS Pilani</strong> (completed through Wipro’s WILP). This advanced foundation, combined 
                with hands-on production experience, enables me to architect resilient cloud topologies and 
                solve complex landing zone challenges.
              </p>
            </div>

            <div className="info-card" data-aos="zoom-in" data-aos-delay="300">
              <h4>Technical Focus</h4>
              <p>
                I specialize in <strong>Infrastructure as Code (IaC)</strong>, CI/CD automation, and zero-trust cloud 
                governance. As a <strong>9x Azure Certified</strong> engineer and <strong>Microsoft Certified Trainer (MCT)</strong>, 
                I am passionate about eliminating manual operational toil, optimizing cloud costs, and mentoring technical teams.
              </p>
            </div>
          </Col>
        </Row>

        {/* Expertise Highlights Marquee */}
        <div className="role-marquee-container" data-aos="zoom-in" data-aos-delay="400">
          <div className="role-marquee-content">
            <span className="role-badge">Senior Project Engineer</span>
            <span className="role-badge">Azure Administrator</span>
            <span className="role-badge">DevOps Engineer</span>
            <span className="role-badge">Microsoft Certified Trainer</span>
            <span className="role-badge">M.Tech BITS Pilani</span>
            <span className="role-badge">Solutions Architect</span>
            {/* Duplicated for seamless loop */}
            <span className="role-badge">Senior Project Engineer</span>
            <span className="role-badge">Azure Administrator</span>
            <span className="role-badge">DevOps Engineer</span>
            <span className="role-badge">Microsoft Certified Trainer</span>
            <span className="role-badge">M.Tech BITS Pilani</span>
            <span className="role-badge">Solutions Architect</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="about-buttons-box" data-aos="zoom-in" data-aos-delay="500">
          <div className="d-flex justify-content-center flex-wrap">
            <a href="#contact">
              <Button className="m-2" variant="outline-primary">
                <i className="fas fa-comments mr-1"></i> Let’s talk
              </Button>
            </a>

            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <Button className="m-2" variant="outline-success">
                <i className="fas fa-file-download mr-1"></i> My Resume
              </Button>
            </a>

            <a href="https://github.com/ajf013" target="_blank" rel="noopener noreferrer">
              <Button className="m-2" variant="outline-light">
                <i className="fab fa-github mr-1"></i> GitHub
              </Button>
            </a>

            <a href="https://www.linkedin.com/in/ajf013-francis-cruz/" target="_blank" rel="noopener noreferrer">
              <Button className="m-2" variant="outline-info">
                <i className="fab fa-linkedin mr-1"></i> LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;