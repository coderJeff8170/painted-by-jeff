import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./Root";

vi.mock("../../components/common/Navigation", () => ({
  default: () => <div>Navigation Component</div>,
}));

vi.mock("../../components/common/Footer/Footer", () => ({
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
