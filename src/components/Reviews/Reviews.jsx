import { useHttp } from 'hooks/useHttp';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { styled } from 'styled-components';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews] = useHttp(getMovieReviews, movieId);

  return (
    <>
      {reviews && reviews.length > 0 ? (
        <StyledList>
          {reviews.map(el => {
            return (
              <li key={el.id}>
                <h3>Author: {el.author}</h3>
                <p>{el.content}</p>
              </li>
            );
          })}
        </StyledList>
      ) : (
        <StyledMessage>
          {' '}
          Sorry! We don't have any reviews for this movie!
        </StyledMessage>
      )}
    </>
  );
};

export default Reviews;

const StyledList = styled.ul`
  margin: 20px;
`;

const StyledMessage = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin: 35px 0;
`;
