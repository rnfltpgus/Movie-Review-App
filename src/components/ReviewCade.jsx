import React from "react";

import styled from "styled-components";

const ReviewCade = ({ title, comment, score, handleDelete }) => {
  return (
    <ReviewCadeContainer>
      <div className="review-card-detail">
        <div className="review-card-title">{title}</div>
        <div>{comment}</div>
        <div>{score}</div>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </ReviewCadeContainer>
  );
};

export default ReviewCade;

const ReviewCadeContainer = styled.div`
  width: 35vw;
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
`;
