import React from 'react'
import{ useEffect }from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Aos from "aos";
import "aos/dist/aos.css";

import "./contact-form.style.css";

const Contact = () => {
   useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
    return (
        <div data-aos= "flip-up" id="contact">
      <h1 data-aos= "fade-left" className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col data-aos="flip-left" className="d-flex justify-content-center flex-wrap">
            <div data-aos="fade-down" className="m-2">
              <a href="mailto: aj13f01@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="aj13f01@gmail.com">
                  <i data-aos="fade-down" className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div data-aos="fade-up" className="m-2">
              <a href="https://api.whatsapp.com/send?phone=918870585619" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Whatsapp me">
                  <i data-aos = "fade-up" className="fab fa-whatsapp"></i> Whatsapp Me
                </Button>
              </a>
            </div>

            <div data-aos="fade-left" className="m-2">
              <a href="https://www.linkedin.com/in/ajf013-francis-cruz/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Connect with me in LinkenIn">
                  <i data-aos="fade-left" className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>

            <div data-aos="fade-right" className="m-2">
              <a href="https://github.com/ajf013" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i data-aos="fade-right" className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            {/* <div className="m-2">
              <a href="https://www.youtube.com/user/MrAkjha96/" target="_blank" rel="noopener noreferrer">
                <Button id="youtube-btn" variant="outline-info" title="Lets code together!">
                <i class="fab fa-youtube"></i> Youtube
                </Button>
              </a>
            </div> */}
            <div data-aos="fade-up-left" className="m-2">
              <a href="twitter.com/Freakcruzmma" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <i data-aos="fade-up-left" className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
            <div data-aos="fade-down-left" className="m-2">
              <a href="https://www.instagram.com/its_me_ajf013/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on insta">
                  <i data-aos="fade-down-left" className="fab fa-instagram-square"></i> Instagram
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
    );
};

export default Contact;
