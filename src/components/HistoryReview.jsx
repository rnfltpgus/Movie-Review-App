import React from "react";

import ReviewCade from "../components/ReviewCade";

import styled from "styled-components";

const HistoryReview = ({ reviews, setReviews }) => {
  const deleteReview = (id) => {
    setReviews(
      reviews.filter((item) => {
        return id !== item.id;
      })
    );
  };

  return (
    <HistoryReviewContainer>
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
    </HistoryReviewContainer>
  );
};

export default HistoryReview;

const HistoryReviewContainer = styled.div`
  width: 30vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;

const SectionName = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #194e84;
  margin-bottom: 20px;
`;
