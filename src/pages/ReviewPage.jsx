import React, { useEffect, useState } from "react";

import CreateReview from "../components/CreateReview";
import ReviewCade from "../components/ReviewCade";

import styled from "styled-components";
import SearchReview from "../components/SearchReview";

const ReviewHistory = () => {
  let [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem("review-data"))
  );
  const [search, setSearch] = useState("");
  const [isKeyword, setIsKeyword] = useState(false);

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

  const deleteReview = (id) => {
    setReviews(
      reviews.filter((item) => {
        return id !== item.id;
      })
    );
  };

  const addReview = (review) => {
    setReviews([review, ...reviews]);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setIsKeyword(true);
    setSearch(search);
    setSearch("");
  };

  const handleUserAction = () => {
    reviews = reviews.filter((reviews) => {
      const { title, comment } = reviews;
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
      <SectionName>신규 리뷰 등록</SectionName>
      <CreateReview handleReviewCreate={addReview} />
      <SectionName>리뷰 검색</SectionName>
      <SearchReview
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <SectionName>리뷰 내역</SectionName>
      <ul className="review-list">
        {reviews &&
          reviews
            .sort((a, b) => {
              if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
              else if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
              else return 0;
            })
            .sort((a, b) => b.score - a.score)
            .map((review) => {
              const { id, title, comment, score } = review;

              return (
                <li key={id}>
                  <ReviewCade
                    id={id}
                    title={title}
                    comment={comment}
                    score={score}
                    handleDelete={() => deleteReview(review.id)}
                  />
                </li>
              );
            })}
      </ul>
    </ReviewHistoryContainer>
  );
};

export default ReviewHistory;

const ReviewHistoryContainer = styled.section``;

const SectionName = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #194e84;
  margin-bottom: 20px;
`;
