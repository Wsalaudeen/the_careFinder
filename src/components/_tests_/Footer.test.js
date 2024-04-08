import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer/Footer";

describe("Footer component", () => {
  test("renders CareFinder Logo", () => {
    render(<Footer />);
    const logo = document.querySelector("img");
    if (logo instanceof HTMLImageElement) {
      expect(logo.alt).toContain("CareFinder Logo");
    } else {
      console.error("The selected element is not an image");
    }
  });

  test("renders correct footer links", () => {
    render(<Footer />);
    const productLinks = screen.getAllByText(
      /Product|Features|Pricing|Reviews/
    );
    const companyLinks = screen.getAllByText(/Company|About|Contact us|Career/);
    const supportLinks = screen.getAllByText(
      /Support|Getting started|Help Centre|Server status/
    );
    const socialLinks = screen.getAllByText(
      /Follow us|Facebook|Instagram|LinkedIn/
    );

    expect(productLinks.length).toBe(4);
    expect(companyLinks.length).toBe(4);
    expect(supportLinks.length).toBe(4);
    expect(socialLinks.length).toBe(4); // Includes the "Follow us" text
  });

  // Add more tests as needed to cover the functionality and structure of the Footer component
});
