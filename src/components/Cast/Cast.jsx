import { getMovieCredits } from 'services/api';
import { useHttp } from 'hooks/useHttp';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const Cast = () => {
  const { movieId } = useParams();
  const [credits] = useHttp(getMovieCredits, movieId);

  return (
    <>
      {credits && (
        <StyledList>
          {credits.cast.map(el => {
            return (
              <li key={el.id}>
                <img
                  width="150"
                  src={`https://image.tmdb.org/t/p/original/${el.profile_path}`}
                  alt={el.name}
                />
                <p>{el.name}</p>
                <p>{el.character}</p>
              </li>
            );
          })}
        </StyledList>
      )}
    </>
  );
};

export default Cast;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  li {
    list-style: none;
  }
`;
