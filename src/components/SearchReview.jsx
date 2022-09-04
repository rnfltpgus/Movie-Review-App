import React, { useState } from "react";

import styled from "styled-components";

const SearchReview = ({ search, setSearch, handleSearch }) => {
  const onChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <CreateReviewContainer>
      <form className="search-input">
        <input
          placeholder="영화 제목을 입력해 주세요."
          type="text"
          value={search}
          onChange={onChange}
        />
        <button hidden onClick={handleSearch}>
          검색
        </button>
      </form>
    </CreateReviewContainer>
  );
};

export default SearchReview;

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
  margin-bottom: 4vh;
`;
