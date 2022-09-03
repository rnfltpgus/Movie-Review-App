import React, { useEffect, useState } from "react";

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

  return (
    <ReviewHistoryContainer>
      <div className="review-history-title">리뷰 내역</div>
      <ul className="review-list">
        {reviews &&
          reviews.map((reviews) => {
            const { id, title, comment, score } = reviews;

            return (
              <li key={id}>
                <ReviewCade
                  id={id}
                  title={title}
                  comment={comment}
                  score={score}
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
