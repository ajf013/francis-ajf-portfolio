import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/icons/logow.webp'

import "./mynavbar.style.css";

const MyNavbar = () => {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <>
            <Navbar
                expanded={expanded}
                fixed="top"
                collapseOnSelect
                expand="md"
                variant="dark"
                className="animate-navbar nav-theme justify-content-between"
            >
                <Navbar.Brand href="#home">
                    <img className="logo" src={Logo} alt="My Portfolio Logo" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link href="#about" onClick={() => setExpanded(false)}>About</Nav.Link>
                        <Nav.Link href="#skills" onClick={() => setExpanded(false)}>Skills</Nav.Link>
                        <Nav.Link href="#experience" onClick={() => setExpanded(false)}>Experience</Nav.Link>
                        <Nav.Link href="#projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
                        <Nav.Link href="#certifications" onClick={() => setExpanded(false)}>Certifications</Nav.Link>
                        <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MyNavbar;