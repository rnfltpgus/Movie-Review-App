import { useEffect, useState } from "react";

import CreateReview from "../components/CreateReview";
import SearchReview from "../components/SearchReview";
import HistoryReview from "../components/HistoryReview";
import { ClickEvent } from "../types";

import styled from "styled-components";

const ReviewHistory = () => {
  let [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem("review-data") as string)
  );
  const [search, setSearch] = useState<string>("");
  const [isKeyword, setIsKeyword] = useState<boolean>(false);

  useEffect(() => {
    async function getReviewData() {
      try {
        if (!reviews) {
          const response = await fetch("./data/data.json");
          const data = await response.json();

          setReviews(data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getReviewData();
  }, [reviews, setReviews]);

  const addReview = (review: {}) => {
    setReviews([review, ...reviews]);
  };

  const handleSearch = (event: ClickEvent) => {
    event.preventDefault();
    setIsKeyword(true);
    setSearch(search);
    setSearch("");
  };

  const handleUserAction = () => {
    reviews = reviews.filter((review: { title: string; comment: string }) => {
      const { title, comment } = review;
      const keyWord = search.toLowerCase();

      return (
        title.toLowerCase().includes(keyWord) ||
        comment.toLowerCase().includes(keyWord)
      );
    });
  };

  if (isKeyword) {
    handleUserAction();
  }

  localStorage.setItem("review-data", JSON.stringify(reviews));

  return (
    <ReviewHistoryContainer>
      <CreateReview handleReviewCreate={addReview} />
      <SearchReview
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <HistoryReview reviews={reviews} setReviews={setReviews} />
    </ReviewHistoryContainer>
  );
};

export default ReviewHistory;

const ReviewHistoryContainer = styled.section``;
