import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation: React.FC = () => {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Painted By Jeff</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to={`/Analog`}>
              Analog
            </NavLink>
            <NavLink className="nav-link" to={`/Digital`}>
              Digital
            </NavLink>
          </Nav>
          <Nav>
            {import.meta.env.MODE === "development" && (
              <NavLink className="nav-link" to={`/Admin`}>
                Admin
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
        <ThemeToggle />
      </Container>
    </Navbar>
  );
};
