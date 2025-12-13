import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Tilt from "react-parallax-tilt";

import L_WIPRO from "../../assets/img/experience/wipro logo.gif";
// import L_WIPROTHOUGHTS from "../../assets/img/experience/five thoughts.png";

import "./experience.style.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">
        EXPERIENCE
      </h1>

      <div className="jumbo-style">
        <Container>
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.03}
            transitionSpeed={400}
          >
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_WIPRO}
                  alt="Wipro logo"
                />
                {/* Optional second logo */}
                {/* 
                <Card.Img
                  variant="bottom"
                  className="img-resize"
                  src={L_WIPROTHOUGHTS}
                  alt="Five Thoughts logo"
                /> 
                */}
              </Card.Header>

              <Card.Body className="d-flex justify-content-center flex-column">
                <Card.Title className="text-center">
                  Woolworths Group
                </Card.Title>

                <Card.Text className="text-center style">
  <strong>Role:</strong> Senior Project Engineer | Azure Administrator
  <br />
  <br />

  <strong>Description:</strong>
  <br />
  <strong>• Advanced Azure Administration:</strong> Led and supported Level-2
  Azure operations, handling complex provisioning, configuration, and
  maintenance of Virtual Machines, Resource Groups, Virtual Networks, Load
  Balancers, Network Security Groups (NSGs), and related Azure infrastructure
  services.
  <br />
  <strong>• Identity, Governance & Access Control:</strong> Managed Azure Active
  Directory, Role-Based Access Control (RBAC), and access governance to ensure
  secure, compliant, and least-privilege access across enterprise cloud
  environments.
  <br />
  <strong>• Monitoring, Optimization & Security:</strong> Proactively monitored
  cloud resources, security alerts, and service health; analyzed recommendations
  from <strong>Azure Advisor</strong> and implemented performance, reliability,
  and cost-optimization improvements.
  <br />
  <strong>• Incident Management & Root Cause Analysis:</strong> Handled escalated
  incidents and critical service requests, performed root cause analysis (RCA),
  and coordinated with cross-functional teams to ensure timely resolution and
  service continuity.
  <br />
  <strong>• Automation & Operational Excellence:</strong> Supported automation
  initiatives and standard operating procedures to improve operational
  efficiency, reduce manual effort, and enhance overall cloud reliability.
  <br />
  <strong>• Stakeholder & Team Collaboration:</strong> Acted as a technical point
  of contact for application teams and junior engineers, providing guidance,
  troubleshooting support, and knowledge sharing.
  <br />
  <br />

  <strong>Technology:</strong> Microsoft Azure
  <br />
  <strong>Duration:</strong> Nov 2025 – Present
</Card.Text>

              </Card.Body>
            </Card>

            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_WIPRO}
                  alt="Wipro logo"
                />
                {/* Optional second logo */}
                {/* 
                <Card.Img
                  variant="bottom"
                  className="img-resize"
                  src={L_WIPROTHOUGHTS}
                  alt="Five Thoughts logo"
                /> 
                */}
              </Card.Header>

              <Card.Body className="d-flex justify-content-center flex-column">
                <Card.Title className="text-center">
                  Woolworths Group
                </Card.Title>

                <Card.Text className="text-center style">
  <strong>Role:</strong> Scholar Trainee – WILP | Azure Administrator
  <br />
  <br />

  <strong>Description:</strong>
  <br />
  <strong>• Cloud Operations & Administration:</strong> Responsible for day-to-day
  Azure cloud operations, including provisioning, managing, and maintaining
  Virtual Machines, Resource Groups, Virtual Networks, and related infrastructure
  components through the Azure Portal.
  <br />
  <strong>• Identity & Access Management:</strong> Managed Azure Active Directory
  users, groups, and role-based access control (RBAC), ensuring secure and
  compliant access to cloud resources.
  <br />
  <strong>• Monitoring & Security:</strong> Monitored security alerts and service
  health, analyzed recommendations, and generated periodic reports using
  <strong> Azure Advisor</strong> to improve performance, reliability, and cost
  efficiency.
  <br />
  <strong>• Incident & Service Request Support:</strong> Provided timely support
  for user service requests and incident resolution, collaborating with internal
  teams to ensure minimal downtime and smooth cloud operations.
  <br />
  <strong>• Academic & Professional Development:</strong> Pursued M.Tech in
  Computing Systems and Infrastructure through Wipro’s Work Integrated Learning
  Program (WILP), combining academic learning with real-world enterprise cloud
  responsibilities.
  <br />
  <br />

  <strong>Technology:</strong> Microsoft Azure
  <br />
  <strong>Duration:</strong> Nov 2021 – Nov 2025
</Card.Text>

              </Card.Body>
            </Card>

          </Tilt>
        </Container>
      </div>
    </div>
  );
};

export default Experience;