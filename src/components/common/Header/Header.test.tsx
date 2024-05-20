import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("header", () => {
  it("renders the header with the given title, supertitle and subtitle", () => {
    const superTitle = "Header Supertitle";
    const title = "Header Title";
    const subtitle = "Header Subtitle";
    render(<Header title={title} subtitle={subtitle} supertitle={superTitle}/>);

    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.tagName).toBe("HEADER");

    const titleElement = screen.getByRole("heading", { name: title });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1");

    const subtitleElement = screen.getByText(subtitle);
    expect(subtitleElement).toBeInTheDocument();
    expect(subtitleElement.tagName).toBe("DIV");

    const supertitleElement = screen.getByText(superTitle);
    expect(supertitleElement).toBeInTheDocument();
    expect(supertitleElement.tagName).toBe("DIV");

  });
});
