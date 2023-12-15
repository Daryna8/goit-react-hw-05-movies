import { useHttp } from 'hooks/useHttp';
import { NavLink, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';
import styled from 'styled-components';

const Home = () => {
  const [movies] = useHttp(fetchTrendingMovies);
  const location = useLocation();

  return (
    <div>
      <StyledTitle>Trending now!</StyledTitle>
      <StyledList>
        {movies?.map(movie => (
          <li key={movie.id}>
            <NavLink state={{ from: location }} to={`/movies/${movie.id}`}>
              {' '}
              {movie.title}
            </NavLink>
          </li>
        ))}
      </StyledList>
    </div>
  );
};

export default Home;

const StyledList = styled.ul`
  list-style: inside;
  display: grid;
  gap: 12px;
  li {
    padding-left: 15px;
    font-size: 22px;
    a {
      color: black;
      text-decoration: none;
      &:hover {
        color: #000079;
      }
    }
  }
`;

const StyledTitle = styled.h2`
  display: flex;
  justify-content: flex-start;
  padding-left: 85px;
  font-size: 34px;
  margin-bottom: 50px;
`;
