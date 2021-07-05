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
              <Row data-aos= "fade-up" className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Francis Cruz</strong>
                <br />A passionate programmer and an AI Bot Developer, born and brought up in India,Tamilnadu,Coimbatore. I am a Web Developer with React.js as my tech stack.
                <br />
                In 2018, I started my U.G degree with specialization in <strong>'Computer Applications'.</strong>Now I'm undergoing my final semester.
                <br />
                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                <br />
                Along with that, I also help people to learn new things on their journey of becoming a professional programmer. 
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                <Col data-aos= "fade-down" className="d-flex justify-content-center flex-wrap">
                  <div data-aos= "fade-left">
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div data-aos= "fade-right">
                    <a href="https://www.goodcv.com/cv/b412100c4b4cf25d2e3a3c35c4430289" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div data-aos= "fade-left"> 
                    <a href="https://github.com/ajf013" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div data-aos= "fade-right">
                    <a href="https://www.linkedin.com/in/ajf013-francis-cruz/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                  <div data-aos= "fade-left">
                    <a href="https://linktr.ee/AJF013" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        Connect with me 
                      </Button>
                    </a>
                  </div>
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