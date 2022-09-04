import React, { useState } from "react";

import IdGenerator from "../utils/IdGenerator";

import styled from "styled-components";

const CreateReview = ({ handleReviewCreate }) => {
  const [score, setScore] = useState(5);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [disable, setDisable] = useState(false);
  const [validateComment, setValidateComment] = useState(false);

  const scoreChanged = (value) => {
    setScore(value);
  };

  const handleTitle = (title) => {
    setTitle(title);
  };

  const handleComment = (comment) => {
    if (comment.length < 5) {
      setDisable(true);
      setValidateComment(true);
    } else {
      setDisable(false);
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
      <div>영화 제목</div>
      <input
        className="title-input"
        type="text"
        placeholder="제목을 입력해 주세요."
        value={title}
        onChange={(event) => handleTitle(event.target.value)}
      />
      <div>한줄평</div>
      <textarea
        className="comment"
        placeholder="내용을 입력해 주세요."
        value={comment}
        onChange={(event) => handleComment(event.target.value)}
      ></textarea>
      <div>별점</div>
      <label>
        <select
          type="number"
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
        disable={`${disable === true ? "disable" : ""}`}
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
  width: 35vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 0.1rem solid #ddd;
  border-radius: 10px;
  color: #194e84;
  gap: 1.5vh;
  margin-bottom: 5vh;

  span {
    color: #f32929;
  }
`;
