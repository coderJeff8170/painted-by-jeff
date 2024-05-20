import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";

beforeEach(() => {
  render(
    <Router>
      <Home />
    </Router>
  );
});

describe("Home component", () => {
    it('should render the Header component with correct props', () => {
        expect(screen.getByText('Welcome to the new and improved')).toBeInTheDocument();
        expect(screen.getByText('PaintedByJeff.com')).toBeInTheDocument();
        expect(screen.getByText('This is a subtitle')).toBeInTheDocument();
      });

    it('should render the Image component with correct attributes', () => {
        const imgElement = screen.getByRole('img');
        expect(imgElement).toHaveAttribute('src', 'CAprogress2.gif');
        expect(imgElement).toHaveAttribute('alt', 'gif of a painting in progress');
    });

    it('should have a link to /Analog', () => {
        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveAttribute('href', '/Analog');
      });
});
