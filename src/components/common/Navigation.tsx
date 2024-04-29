import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

export const Navigation: React.FC = () => {
  const homeNavlinks = [
    { name: "Analog", path: "Analog" },
    { name: "Digital", path: "Digital" },
  ];
  const analogNavlinks = [
    { name: "Paintings", path: "Analog/Paintings" },
    { name: "Drawings", path: "Analog/Drawings" },
  ];
  const digitalNavlinks = [
    { name: "Frontend", path: "Digital/Frontend" },
    { name: "Games", path: "Digital/Games" },
  ];

  const [navlinks, setNavLinks] = useState(homeNavlinks);

  const handleNavClick = (link: string) => {
    switch (link) {
      case "Analog":
        console.log("Analog");
        setNavLinks(analogNavlinks);
        break;
      case "Digital":
        console.log("Digital");
        setNavLinks(digitalNavlinks);
        break;
      case "Home":
        console.log("Home");
        setNavLinks(digitalNavlinks);
        break;
      default:
        console.log("default");
    }
  };
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Painted By Jeff</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navlinks.map((link, index) => {
              return (
                <NavLink
                  className="nav-link"
                  key={index}
                  to={`${link.path}`}
                  onClick={() => handleNavClick(link.name)}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </Nav>
        </Navbar.Collapse>
        {import.meta.env.MODE === "development" && (
          <NavLink className="nav-link" to={`/Admin`}>
            Admin
          </NavLink>
        )}
        <ThemeToggle />
      </Container>
    </Navbar>
  );
};
