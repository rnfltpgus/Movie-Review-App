import React from "react";

import styled from "styled-components";

const ReviewCade = ({ title, comment, score }) => {
  return (
    <ReviewCadeContainer>
      <div className="review-card-detail">
        <div>{title}</div>
        <div>{comment}</div>
        <div>{score}</div>
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

  .review-card-detail {
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
  }
`;
