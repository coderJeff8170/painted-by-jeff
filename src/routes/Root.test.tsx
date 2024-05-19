import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Root } from "./Root";
import { BrowserRouter as Router } from "react-router-dom";

vi.mock("../components/common/Navigation", () => ({
  Navigation: () => <div>Navigation Component</div>,
}));

vi.mock("../components/common/Footer/Footer", () => ({
  default: () => <div>Footer Component</div>,
}));

describe("Root component", () => {
  it("should render Navigation, Outlet, and Footer components", () => {
    render(
      <Router>
        <Root />
      </Router>
    );

    expect(screen.getByText("Navigation Component")).toBeInTheDocument();

    expect(screen.getByText("Footer Component")).toBeInTheDocument();
  });
});
