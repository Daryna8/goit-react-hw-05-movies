import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/api';
import SearchForm from '../components/SearchForm/SearchForm';
import { useHttp } from 'hooks/useHttp';
import { InfinitySpin } from 'react-loader-spinner';
import styled from 'styled-components';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');
  const [movies, isLoading] = useHttp(fetchMoviesByQuery, queryParam);
  const location = useLocation();

  const handleSearchSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <div>
      <SearchForm onSumbit={handleSearchSubmit} />
      {isLoading && <InfinitySpin />}
      {movies && (
        <StyledList>
          {movies?.map(movie => (
            <li key={movie.id}>
              <Link state={{ from: location }} to={movie.id.toString()}>
                {' '}
                {movie.title}
              </Link>
            </li>
          ))}
        </StyledList>
      )}
    </div>
  );
};

export default Movies;

const StyledList = styled.ul`
  list-style: inside;
  display: grid;
  gap: 12px;
  li {
    padding-left: 15px;
    font-size: 18px;
    a {
      color: black;
      text-decoration: none;
      &:hover {
        color: #000079;
      }
    }
  }
`;
