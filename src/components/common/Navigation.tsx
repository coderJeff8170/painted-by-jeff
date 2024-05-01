import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation: React.FC = () => {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          title="Home page for PaintedByJeff"
          aria-label="Home page for PaintedByJeff"
          aria-live="polite"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#0D6EFD"
            className="bi bi-palette-fill"
            viewBox="0 0 16 16"
          >
            <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
          </svg>{" "}
          PaintedByJeff
        </Navbar.Brand>
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
