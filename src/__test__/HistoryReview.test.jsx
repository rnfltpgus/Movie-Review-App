/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen } from "@testing-library/react";

import HistoryReview from "../components/HistoryReview";

describe("HistoryReview Component", () => {
  beforeEach(() => {
    render(<HistoryReview />);
  });

  it("Render HistoryReview Component Title Text", () => {
    const reviewHistory = screen.getByText("리뷰 내역");

    expect(reviewHistory).toBeInTheDocument();
  });
});
