import React from "react";
import "./CertModal.css";

const getSkillsMeasured = (name) => {
  const n = name.toLowerCase();
  if (n.includes("solutions architect")) {
    return [
      "Design identity, governance, and security solutions",
      "Design data storage and integration solutions",
      "Design business continuity and disaster recovery",
      "Design infrastructure and compute topologies",
      "Architect FinOps & cost-governed resources"
    ];
  }
  if (n.includes("administrator")) {
    return [
      "Manage Azure identities and governance",
      "Implement and manage storage accounts",
      "Deploy and manage Azure compute resources",
      "Configure and manage virtual networks",
      "Monitor and back up Azure resources"
    ];
  }
  if (n.includes("security")) {
    return [
      "Manage identity and access (Microsoft Entra ID)",
      "Secure virtual networks and private endpoints",
      "Configure threat protection and security monitoring",
      "Manage data security and key storage (Key Vault)",
      "Harden workloads with Defender for Cloud"
    ];
  }
  if (n.includes("network")) {
    return [
      "Design and implement hybrid networking (VPN/ExpressRoute)",
      "Configure routing, load balancing, and traffic routing",
      "Secure network paths (Azure Firewall, NSG, WAF)",
      "Manage private endpoints and DNS resolution",
      "Monitor and troubleshoot network health"
    ];
  }
  if (n.includes("data fundamentals")) {
    return [
      "Describe core data concepts and SQL/NoSQL databases",
      "Understand relational and non-relational data on Azure",
      "Describe analytical workloads (Data Lake, Synapse)"
    ];
  }
  if (n.includes("ai fundamentals")) {
    return [
      "Describe Artificial Intelligence workloads and concepts",
      "Understand machine learning principles in Azure",
      "Describe features of computer vision and NLP workloads"
    ];
  }
  if (n.includes("fundamentals")) {
    return [
      "Describe cloud concepts (HA, scalability, elasticity)",
      "Describe core Azure services (VMs, App Services, SQL)",
      "Describe security, compliance, privacy, and trust features",
      "Understand Azure pricing, SLA agreements, and lifecycles"
    ];
  }
  if (n.includes("trainer")) {
    return [
      "Deliver Microsoft Certified training workshops",
      "Instruct technical teams on cloud architecture",
      "Facilitate DevOps, administration, and SysOps programs"
    ];
  }
  if (n.includes("champion")) {
    return [
      "Excelled in Azure-focused technical challenges",
      "Demonstrated depth in multicloud operations",
      "Recognized for top performance in cloud skills sprints"
    ];
  }
  return [
    "Verify professional credentials and skills in action",
    "Aligned with cloud operations and automation standards",
    "Continuous upskilling in enterprise IT architectures"
  ];
};

const CertModal = ({ isOpen, onClose, cert }) => {
  if (!isOpen || !cert) return null;

  const skills = getSkillsMeasured(cert.name);

  return (
    <div className="cert-modal-overlay" onClick={onClose}>
      <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="cert-modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times"></i>
        </button>

        <div className="row align-items-center g-4">
          {/* Badge Image Column */}
          <div className="col-12 col-md-5 text-center">
            <div className="cert-modal-badge-container">
              <img src={cert.logo} alt={cert.name} className="cert-modal-badge img-fluid" />
            </div>
          </div>

          {/* Details Column */}
          <div className="col-12 col-md-7">
            <div className="cert-modal-details">
              <span className="cert-modal-org">{cert.organization}</span>
              <h2 className="cert-modal-title mb-2">{cert.name}</h2>
              <p className="cert-modal-date text-white-50">
                <i className="far fa-calendar-alt mr-2"></i> Issued on: <strong>{cert.date}</strong>
              </p>

              <hr className="border-secondary my-3" />

              <h5 className="text-white mb-2">Skills Measured & Verified:</h5>
              <ul className="cert-modal-skills-list pl-3">
                {skills.map((skill, index) => (
                  <li key={index} className="text-white-50 mb-1">
                    <i className="fas fa-check-circle text-info mr-2"></i> {skill}
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-2 d-flex flex-wrap gap-2">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary px-4 py-2 mr-2"
                >
                  <i className="fas fa-external-link-alt mr-2"></i> Verify Badge Link
                </a>
                <button className="btn btn-outline-secondary px-4 py-2" onClick={onClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertModal;
