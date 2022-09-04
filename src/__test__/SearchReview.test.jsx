/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen } from "@testing-library/react";

import SearchReview from "../components/SearchReview";

describe("SearchReview Component", () => {
  beforeEach(() => {
    render(<SearchReview />);
  });

  it("Render SearchReview Component Title Text", () => {
    const reviewHistory = screen.getByText("리뷰 검색");

    expect(reviewHistory).toBeInTheDocument();
  });

  it("Review Search Window PlaceholderText", () => {
    const SearchPlaceholderText =
      screen.getByPlaceholderText("영화 제목을 입력해 주세요.");

    expect(SearchPlaceholderText).toBeInTheDocument();
  });
});
