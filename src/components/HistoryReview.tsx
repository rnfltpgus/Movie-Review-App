import ReviewCade from "./ReviewCade";

import styled from "styled-components";

type Reviews = {
  filter(arg0: (item: { id: string | number }) => boolean): Reviews;
  sort: any;
  id: string | number;
  title: string;
  comment: string;
  score: number | string;
};

type HistoryReviewProps = {
  reviews: Reviews;
  setReviews: (state: Reviews) => void;
};

const HistoryReview = ({ reviews, setReviews }: HistoryReviewProps) => {
  const deleteReview = (id: string | number) => {
    setReviews(
      reviews.filter((item: { id: string | number }) => {
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
            .sort(
              (
                a: { title: { toLowerCase: () => number } },
                b: { title: { toLowerCase: () => number } }
              ) => {
                if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
                else if (a.title.toLowerCase() < b.title.toLowerCase())
                  return -1;
                else return 0;
              }
            )
            .sort(
              (a: { score: number }, b: { score: number }) => b.score - a.score
            )
            .map(
              (review: {
                id: string | number;
                title: string;
                comment: string;
                score: number;
              }) => {
                const { id, title, comment, score } = review;

                return (
                  <li key={id}>
                    <ReviewCade
                      title={title}
                      comment={comment}
                      score={score}
                      handleDelete={() => deleteReview(review.id)}
                    />
                  </li>
                );
              }
            )}
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
