import React, { useEffect, useState } from "react";

import CreateReview from "./CreateReview";
import ReviewCade from "./ReviewCade";

import styled from "styled-components";

const ReviewHistory = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    async function getReviewData() {
      try {
        const response = await fetch("./data/data.json");
        const data = await response.json();

        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    }

    getReviewData();
  }, [setReviews]);

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

  return (
    <ReviewHistoryContainer>
      <div className="review-history-title">신규 리뷰 등록</div>
      <CreateReview handleReviewCreate={addReview} />
      <div className="review-history-title">리뷰 내역</div>
      <ul className="review-list">
        {reviews &&
          reviews
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

const ReviewHistoryContainer = styled.section`
  .review-history-title {
    font-weight: bold;
    font-size: 18px;
    color: #194e84;
    margin-bottom: 20px;
  }
`;
