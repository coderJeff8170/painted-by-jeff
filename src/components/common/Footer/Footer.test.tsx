import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  it("renders the footer with the given title", () => {
    const title = "Your Company";
    render(<Footer title={title} />);

    const footerElement = screen.getByText(
      `Proudly built with React.ts in React Bootstrap © 2024 by ${title}`
    );
    expect(footerElement).toBeInTheDocument();
    expect(footerElement.tagName).toBe("FOOTER");
  });
});
