import styled from "styled-components";
import { ClickEvent } from "../types";

type SearchReviewProps = {
  search: string;
  setSearch: (state: string) => void;
  handleSearch: (event: ClickEvent) => void;
};

const SearchReview = ({
  search,
  setSearch,
  handleSearch,
}: SearchReviewProps) => {
  const onChange = (event: { target: { value: string } }) => {
    setSearch(event.target.value);
  };

  return (
    <SearchContainer>
      <SectionName>리뷰 검색</SectionName>
      <input
        placeholder="영화 제목을 입력해 주세요."
        type="text"
        value={search}
        onChange={onChange}
      />
      <button hidden onClick={handleSearch}>
        검색
      </button>
    </SearchContainer>
  );
};

export default SearchReview;

const SearchContainer = styled.form`
  width: 30vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  input {
    height: 40px;
    background-color: #f5f5f5;
    border: 0.1rem solid #ddd;
    border-radius: 5px;
    padding: 0.5rem;
  }
`;

const SectionName = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #194e84;
  margin-bottom: 15px;
`;
