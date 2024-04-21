import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ThemeToggle } from "./ThemeToggle";
import {  useState } from "react";

export const Navigation: React.FC = () => {

  const homeNavlinks = ["Analog", "Digital"];
  const analogNavlinks = ["Paintings", "Drawings", "Prints"];
  const digitalNavlinks = ["Frontend", "Backend", "Games"];

  const [navlinks, setNavLinks] = useState(homeNavlinks);

  const handleNavClick = (link: string) => {
    switch(link) {
      case "Analog":
        console.log("Analog");
        setNavLinks(analogNavlinks);
        break;
      case "Digital":
        console.log("Digital");
        setNavLinks(digitalNavlinks);
        break;
      default:
        console.log("default");
        setNavLinks(homeNavlinks);
    }
  };
  return (
    <Navbar  expand="md" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="/">Painted By Jeff</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navlinks.map((link, index) => {
              return (
                <NavLink className="nav-link" key={index} to={`/${link}`} onClick={() => handleNavClick(link)}>
                  {link}
                </NavLink>
              );
            })}
          </Nav>
        </Navbar.Collapse>
        <ThemeToggle />
      </Container>
    </Navbar>
  );
};
