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
                    <strong>• Enterprise Cloud Operations:</strong> Managed high-availability workloads on Azure compute (Web Apps, VMSS), maintaining 99.9% service uptime and leading root-cause analysis (RCA) for critical incidents.
                    <br />
                    <strong>• Zero-Trust Identity Governance:</strong> Administered Microsoft Entra ID (Azure AD), configuring granular RBAC policies, Conditional Access, and Privileged Identity Management (PIM) to secure resources.
                    <br />
                    <strong>• Infrastructure as Code & CI/CD:</strong> Developed modular IaC configurations using Terraform and Bicep, automating multi-environment deployments via Azure DevOps CI/CD pipelines.
                    <br />
                    <strong>• Proactive Security & Monitoring:</strong> Hardened security posture using Microsoft Defender for Cloud, Private Link, and Azure Monitor/Log Analytics for real-time alerting.
                    <br />
                    <strong>• Serverless Automation:</strong> Created automated operational runbooks, custom Azure Functions, and Logic Apps to reduce manual administration effort.
                    <br />
                    <strong>• FinOps & Cost Optimization:</strong> Conducted cost-governance audits using Azure Cost Management and Azure Advisor, achieving significant budget savings through resource right-sizing and Reserved Instances.
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