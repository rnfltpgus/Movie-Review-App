/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CreateReview from "../components/CreateReview";

describe("CreateReview Component", () => {
  beforeEach(() => {
    render(<CreateReview />);
  });

  it("Render CreateReview Component Title Text", () => {
    const addReview = screen.getByText("신규 리뷰 등록");

    expect(addReview).toBeInTheDocument();
  });

  it("Movie Title Text end PlaceholderText", () => {
    const movieTitle = screen.getByText("영화 제목");
    const moviePlaceholderText =
      screen.getByPlaceholderText("제목을 입력해 주세요.");

    expect(movieTitle).toBeInTheDocument();
    expect(moviePlaceholderText).toBeInTheDocument();
  });

  it("One-Line Title Text end PlaceholderText", () => {
    const oneLineTitle = screen.getByText("한줄평");
    const oneLinePlaceholderText =
      screen.getByPlaceholderText("내용을 입력해 주세요.");

    expect(oneLineTitle).toBeInTheDocument();
    expect(oneLinePlaceholderText).toBeInTheDocument();
  });

  it("Horoscope Title Text", () => {
    const horoscopeTitle = screen.getByText("별점");

    expect(horoscopeTitle).toBeInTheDocument();
  });

  it("If you write down the title and comment, the registration button is activated.", async () => {
    const user = userEvent.setup();
    const submitButton = screen.getByText("등록");
    const moviePlaceholderText =
      screen.getByPlaceholderText("제목을 입력해 주세요.");
    const oneLinePlaceholderText =
      screen.getByPlaceholderText("내용을 입력해 주세요.");

    expect(submitButton).toBeDisabled();

    await user.type(moviePlaceholderText, "한산");
    await user.type(oneLinePlaceholderText, "액션이 전부였다... 국뽕!!");

    expect(submitButton).toBeEnabled();
  });
});

describe("Horoscope selectOptions", () => {
  beforeEach(() => {
    render(
      <select multiple>
        <option value="5">5점</option>
        <option value="4">4점</option>
        <option value="3">3점</option>
        <option value="2">2점</option>
        <option value="1">1점</option>
      </select>
    );
  });

  it("Horoscope option", () => {
    userEvent.selectOptions(screen.getByRole("listbox"), ["5", "3"]);

    expect(screen.getByRole("option", { name: "5점" }).selected).toBe(true);
    expect(screen.getByRole("option", { name: "4점" }).selected).toBe(false);
    expect(screen.getByRole("option", { name: "3점" }).selected).toBe(false);
    expect(screen.getByRole("option", { name: "2점" }).selected).toBe(false);
    expect(screen.getByRole("option", { name: "1점" }).selected).toBe(false);
  });
});
