import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Tilt from "react-tilt";
import Card from "react-bootstrap/Card";
import L_WIPRO from "../../assets/img/experience/wipro logo.gif";
// import L_WIPROTHOUGHTS from "../../assets/img/experience/five thoughts.png";

import "./experience.style.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_WIPRO} alt="Wipro logo" />
                {/* <Card.Img variant="bottom" className="img-resize" src={L_WIPROTHOUGHTS} alt="Five Thoughts logo" /> */}
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Woolworths Group</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">Full Stack Developer</strong> */}
                    <br />
                    <strong>Role: Cloud Administrator</strong> 
                    <br />
                    <strong>Description:</strong> 
                    <br />
                    <strong>- Performing Cloud operations </strong> like Managing & Deploying VM, Removing and Adding Azure AD groups user on Azure Portal.
                    <br />
                    <strong>- Managing </strong> Security alerts, Generating monthly report using <strong>Azure Advisor.</strong>
                    < br />
                    <strong>- Providing clarifications </strong> on users for their service requests and Incidents. 
                    <br />                  
                    <strong>Technology:</strong> Microsoft Azure
                    <br />
                    <strong>Duration:</strong>Nov 2021 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;