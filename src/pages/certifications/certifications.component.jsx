import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./certifications.style.css";

// Import all certification images
import AwsCloudPractitioner from "../../assets/img/certifications/aws-certified-cloud-practitioner.png";
import AzureAdmin from "../../assets/img/certifications/microsoft-certified-azure-administrator-associate.2.png";
import Ms365Fundamentals from "../../assets/img/certifications/microsoft-365-certified-fundamentals.png";
import AzureAiFundamentals from "../../assets/img/certifications/microsoft-certified-azure-ai-fundamentals.png";
import AzureDataFundamentals from "../../assets/img/certifications/microsoft-certified-azure-data-fundamentals.png";
import AzureFundamentals from "../../assets/img/certifications/microsoft-certified-azure-fundamentals.png";
import AzureNetworkEngineer from "../../assets/img/certifications/microsoft-certified-azure-network-engineer-associate.png";
import AzureSecurityEngineer from "../../assets/img/certifications/microsoft-certified-azure-security-engineer-associate.png";
import AzureSolutionsArchitect from "../../assets/img/certifications/microsoft-certified-azure-solutions-architect-expert.1.png";
import CloudSkillsChampion from "../../assets/img/certifications/msus-cloud-skills-challenge-champion.png";

const Certifications = () => {
  const certificationsList = [
    {
      name: "Microsoft Certified: Azure Fundamentals",
      date: "March 24,2021",
      organization: "Microsoft",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/Fcruz-1301/5CA5DC84DFFEBB65?sharingId=97FB2ACBDB1199A8",
      logo: AzureFundamentals
    },
    {
      name: "Microsoft Certified: Azure Data Fundamentals",
      date: "July 30, 2021",
      organization: "Microsoft",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/Fcruz-1301/CA4B19C938D03AA8?sharingId=97FB2ACBDB1199A8",
      logo: AzureDataFundamentals
    },
    {
      name: "Microsoft Certified: Azure AI Fundamentals",
      date: "March 26, 2021",
      organization: "Microsoft",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/Fcruz-1301/9129B319EBE22BB3?sharingId=97FB2ACBDB1199A8",
      logo: AzureAiFundamentals
    },
    {
      name: "Microsoft 365 Certified: Fundamentals",
      date: "8/17/2021",
      organization: "Microsoft",
      link: "https://www.credly.com/badges/a9aff1b8-9f6f-411b-a444-04ff2808acd0/public_url",
      logo: Ms365Fundamentals
    },
    {
      name: "Microsoft Certified: Azure Administrator Associate",
      date: "September 16, 2021",
      organization: "Microsoft",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/Fcruz-1301/89A6F1CCC49276D4?sharingId=97FB2ACBDB1199A8",
      logo: AzureAdmin
    },
    {
      name: "Microsoft Certified: Azure Network Engineer Associate",
      date: "July 31, 2022",
      organization: "Microsoft",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/Fcruz-1301/37EBF8F0DDFB0D4C?sharingId=97FB2ACBDB1199A8",
      logo: AzureNetworkEngineer
    },
    {
      name: "Microsoft Certified: Azure Security Engineer Associate",
      date: "November 4, 2022",
      organization: "Microsoft",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/FrancisCruz-5684/1EBDE8A95CCEA12E?sharingId=92A9DF6AA68B9D8A",
      logo: AzureSecurityEngineer
    },
    {
      name: "Microsoft Certified: Azure Solutions Architect Expert",
      date: "July 3, 2023",
      organization: "Microsoft",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/Fcruz-1301/31EE2D1F093D26D1?sharingId=97FB2ACBDB1199A8",
      logo: AzureSolutionsArchitect
    },
    {
      name: "AWS Certified Cloud Practitioner",
      date: "February 18, 2022",
      organization: "Amazon Web Services",
      link: "https://www.credly.com/badges/eed8a21f-52c6-4a26-8b4c-803901ab65e3/public_url",
      logo: AwsCloudPractitioner
    },    
    {
      name: "MS Cloud Skills Challenge Champion",
      date: "February 21, 2021",
      organization: "Microsoft Americas Azure Team",
      link: "https://www.credly.com/badges/5e11c112-a2ef-4037-b175-05efd6e029c1/public_url",
      logo: CloudSkillsChampion
    }
  ];

  return (
    <div id="certifications">
      <div className="cert-header">
        <h1 className="pt-3 text-center font-details-b pb-3">CERTIFICATIONS</h1>
      </div>
      <Container>
        <Row className="justify-content-center">
          {certificationsList.map((cert, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="cert-card h-100">
                <div className="cert-logo-container">
                  <Card.Img variant="top" src={cert.logo} alt={`${cert.name} logo`} className="cert-logo" />
                </div>
                <Card.Body>
                  <Card.Title className="cert-title">{cert.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {cert.organization}
                  </Card.Subtitle>
                  <Card.Text>Certified on: {cert.date}</Card.Text>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary cert-btn">
                    View Certificate
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Certifications;
