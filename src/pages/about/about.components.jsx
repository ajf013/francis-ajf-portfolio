import React from "react";
import{ useEffect }from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.style.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div id="about">
      <div data-aos= "fade-right" className="about">
        <h1 data-aos= "fade-right" className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row data-aos= "fade-down-right" className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row data-aos= "fade-down-left" className="justify-content-center mb-2 mr-2 ">
                <Image data-aos= "fade-left" className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>

            {/* about me */}
            <Col xs={12} md={6}>
  <Row data-aos="fade-up" className="align-items-start p-2 my-details rounded">
    
    <p>
      Hi there! I’m <strong>Francis Cruz (MCT)</strong>.
    </p>

    <p>
      I’m a Cloud Engineer and Microsoft Certified Trainer, currently working as an
      <strong> Azure Administrator at Wipro</strong>. I specialize in designing,
      deploying, and managing secure, scalable cloud infrastructures on Microsoft Azure.
    </p>

    <p>
      I was born and brought up in Coimbatore, Tamil Nadu, India. I completed my
      undergraduate degree in <strong>Computer Applications</strong> in 2021 and later
      pursued my <strong>M.Tech in Computing Systems and Infrastructure</strong> from
      BITS Pilani through Wipro’s Work Integrated Learning Program (WILP).
    </p>

    <p>
      I have hands-on experience with
      <strong> Microsoft Azure, AWS, and Alibaba Cloud</strong>. My technical expertise
      includes Azure Virtual Machines, Resource Groups, Virtual Networks, Load Balancers,
      Network Security Groups, Identity & Access Management, governance, security, and
      cloud operations.
    </p>

    <p>
      In addition to cloud engineering, I have foundational experience in
      <strong> JavaScript, React.js, and MongoDB</strong>, enabling effective collaboration
      with development teams and better understanding of application-level requirements.
    </p>

    <p>
      I’m passionate about cloud computing, DevOps practices, infrastructure optimization,
      and continuous learning. I also enjoy mentoring and helping others grow in their
      journey toward becoming professional developers and cloud engineers.
    </p>

    <p>
      I love exploring new technologies—understanding the problems they solve and how they
      can be used to build reliable, scalable, and impactful solutions.
    </p>

    <Col data-aos="fade-down" className="d-flex justify-content-center flex-wrap mt-2">
      <a href="#contact">
        <Button className="m-2" variant="outline-primary">
          Let’s talk
        </Button>
      </a>

      <a
        href="https://www.goodcv.com/cv/b412100c4b4cf25d2e3a3c35c4430289"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="m-2" variant="outline-success">
          My Resume
        </Button>
      </a>

      <a
        href="https://github.com/ajf013"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="m-2" variant="outline-dark">
          GitHub
        </Button>
      </a>

      <a
        href="https://www.linkedin.com/in/ajf013-francis-cruz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="m-2" variant="outline-info">
          LinkedIn
        </Button>
      </a>

      <a
        href="https://linktr.ee/AJF013"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="m-2" variant="outline-dark">
          Connect with me
        </Button>
      </a>
    </Col>
  </Row>
</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default About;