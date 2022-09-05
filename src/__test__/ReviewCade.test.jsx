/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen } from "@testing-library/react";

import ReviewCade from "../components/ReviewCade";

describe("Card Component", () => {
  beforeEach(() => {
    render(<ReviewCade />);
  });

  it("There should be a review-specific icon.", () => {
    const starIcon = screen.getByText("⭐️");

    expect(starIcon).toBeInTheDocument();
  });

  it("The card component must have a delete button.", () => {
    const deleteButton = screen.getByText("삭제");

    expect(deleteButton).toBeInTheDocument();
  });
});
