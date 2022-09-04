import React from "react";

import styled from "styled-components";

const ReviewCade = ({ title, comment, score, handleDelete }) => {
  let yellowScoreStar = new Array(score).fill("⭐️");

  return (
    <ReviewCadeContainer>
      <div className="review-card-detail">
        <div className="review-card-title">{title}</div>
        <div className="review-card-comment">{comment}</div>
        <div>{yellowScoreStar}</div>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </ReviewCadeContainer>
  );
};

export default ReviewCade;

const ReviewCadeContainer = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
  border: 0.1rem solid #ddd;
  border-radius: 10px;
  color: #194e84;

  .review-card-detail {
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
  }

  .review-card-title {
    font-weight: bold;
  }
  .review-card-comment {
    font-size: 14px;
  }
`;
