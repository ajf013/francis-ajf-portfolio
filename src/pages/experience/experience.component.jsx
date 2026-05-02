import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Tilt from "react-parallax-tilt";
import L_WIPRO from "../../assets/img/experience/wipro logo.gif";
import "./experience.style.css";

const Experience = () => {
  return (
    <div id="experience" className="py-5">
      <h1 data-aos="zoom-in" className="text-center font-details-b pb-5">
        EXPERIENCE
      </h1>

      <div className="timeline-section">
        <Container>
          {/* Experience 1: Senior Project Engineer */}
          <div className="experience-item left" data-aos="zoom-in-right">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
              <Card className="experience-card">
                <Card.Header className="d-flex justify-content-center">
                  <Card.Img variant="top" className="img-resize" src={L_WIPRO} alt="Wipro logo" />
                </Card.Header>
                <Card.Body>
                  <div className="text-center mb-2">
                    <span className="duration-badge">Dec 2025 – Present</span>
                    <h4 className="role-title">Senior Project Engineer</h4>
                    <p className="text-white-50">Woolworths Group | Wipro</p>
                  </div>
                  <div className="exp-description">
                    <strong>• Advanced Azure Administration:</strong> Led Level-2 cloud operations, provisioning and managing complex infrastructure including VMs, VNETs, Application Gateways, and NSGs.
                    <br />
                    <strong>• Identity & Access Governance:</strong> Managed Azure AD (Entra ID), RBAC, and Privileged Identity Management (PIM) to ensure zero-trust security.
                    <br />
                    <strong>• Infrastructure as Code (IaC):</strong> Contributed to automation scripts using Terraform and ARM templates for consistent resource deployment.
                    <br />
                    <strong>• Monitoring & Security:</strong> Configured Azure Monitor, Log Analytics, and Microsoft Sentinel to proactively track service health and security threats.
                    <br />
                    <strong>• Performance Optimization:</strong> Analyzed Azure Advisor and Cost Management reports to implement rightsizing and cost-saving strategies.
                    <br />
                    <strong>• Mentoring:</strong> Acted as a technical point of contact, providing guidance and troubleshooting support to junior team members.
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </div>

          {/* Experience 2: Scholar Trainee */}
          <div className="experience-item right" data-aos="zoom-in-left">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
              <Card className="experience-card">
                <Card.Header className="d-flex justify-content-center">
                  <Card.Img variant="top" className="img-resize" src={L_WIPRO} alt="Wipro logo" />
                </Card.Header>
                <Card.Body>
                  <div className="text-center mb-2">
                    <span className="duration-badge">Nov 2021 – Nov 2025</span>
                    <h4 className="role-title">Scholar Trainee – WILP</h4>
                    <p className="text-white-50">Woolworths Group | Wipro</p>
                  </div>
                  <div className="exp-description">
                    <strong>• Cloud Operations & Support:</strong> Performed day-to-day Azure administration, including provisioning VMs and managing storage accounts.
                    <br />
                    <strong>• Backup & Recovery:</strong> Managed Azure Backup and Site Recovery (ASR) to ensure data protection and business continuity.
                    <br />
                    <strong>• M.Tech BITS Pilani:</strong> Pursued and completed <strong>M.Tech in Computing Systems and Infrastructure</strong> from BITS Pilani through Wipro’s Work Integrated Learning Program (WILP).
                    <br />
                    <strong>• Incident Management:</strong> Provided L1/L2 support for cloud incidents, collaborating with senior engineers for root cause analysis (RCA).
                    <br />
                    <strong>• Patch Management:</strong> Assisted in regular OS patching and security updates across the virtual machine fleet.
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Experience;