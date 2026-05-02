import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container";
import "./contact-form.style.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const socialLinks = [
    { name: "Email", icon: "fas fa-envelope", link: "mailto:fcruz1301@icloud.com", className: "tile-email" },
    { name: "WhatsApp", icon: "fab fa-whatsapp", link: "https://api.whatsapp.com/send?phone=916379649461", className: "tile-whatsapp" },
    { name: "LinkedIn", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/ajf013-francis-cruz/", className: "tile-linkedin" },
    { name: "GitHub", icon: "fab fa-github", link: "https://github.com/ajf013", className: "tile-github" },
    { name: "X (Twitter)", icon: "fa-brands fa-x-twitter", link: "https://x.com/Itsme_Ajf013", className: "tile-x" },
    { name: "Instagram", icon: "fab fa-instagram", link: "https://www.instagram.com/fcruz_013/", className: "tile-instagram" },
  ];

  return (
    <div id="contact" className="py-5">
      <h1 data-aos="zoom-in" className="text-center font-details-b pb-5">CONTACT ME</h1>
      <Container>
        <div className="contact-container">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-tile ${social.className}`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <i className={social.icon}></i>
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Contact;
