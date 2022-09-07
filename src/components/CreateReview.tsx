import React, { useState } from "react";

import IdGenerator from "../utils/IdGenerator";

import styled from "styled-components";

type CreateReviewProps = {
  handleReviewCreate: (reviews: {}) => void;
};

const CreateReview = ({ handleReviewCreate }: CreateReviewProps) => {
  const [score, setScore] = useState<number>(5);
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [validateComment, setValidateComment] = useState<boolean>(false);

  const scoreChanged = (value: React.SetStateAction<number>) => {
    setScore(value);
  };

  const handleTitle = (title: React.SetStateAction<string>) => {
    setTitle(title);
  };

  const handleComment = (comment: React.SetStateAction<string>) => {
    if (comment.length < 5) {
      setValidateComment(true);
    } else {
      setValidateComment(false);
    }

    setComment(comment);
  };

  const processForm = () => {
    setTitle("");
    setComment("");

    handleReviewCreate({
      id: IdGenerator(20),
      title,
      comment,
      score,
    });
  };

  return (
    <CreateReviewContainer>
      <SectionName>신규 리뷰 등록</SectionName>
      <TitleName>영화 제목</TitleName>
      <input
        className="title-input"
        type="text"
        placeholder="제목을 입력해 주세요."
        value={title}
        onChange={(event) => handleTitle(event.target.value)}
      />
      <TitleName>한줄평</TitleName>
      <input
        className="comment"
        placeholder="내용을 입력해 주세요."
        value={comment}
        onChange={(event) => handleComment(event.target.value)}
      ></input>
      <TitleName>별점</TitleName>
      <label>
        <select
          onChange={({ target: { value } }) => scoreChanged(Number(value))}
        >
          <option value="5">5점</option>
          <option value="4">4점</option>
          <option value="3">3점</option>
          <option value="2">2점</option>
          <option value="1">1점</option>
        </select>
      </label>
      <button
        className="submit-button"
        disabled={!title.trim().length || !comment.trim().length}
        onClick={() => processForm()}
      >
        등록
      </button>
      {validateComment && (
        <span>
          <hr />❌ Please enter your review in at least 5 characters.
        </span>
      )}
    </CreateReviewContainer>
  );
};

export default CreateReview;

const CreateReviewContainer = styled.section`
  width: 30vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  gap: 1.5vh;

  input {
    padding: 0.5rem;
    border: 0.1rem solid #ddd;
    border-radius: 5px;
    height: 40px;
  }

  select {
    padding: 0.5rem;
    width: 100%;
    height: 40px;
    font-weight: bold;
  }

  span {
    font-size: 10px;
    color: #f32929;
  }

  button {
    background-color: #194e84;
    color: #f5f5f5;
    border-radius: 5px;
    border: 0.1rem solid #ddd;
    height: 40px;
    font-size: 15px;
  }
`;

const SectionName = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #194e84;
`;

const TitleName = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #194e84;
`;
