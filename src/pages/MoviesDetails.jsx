import { useHttp } from 'hooks/useHttp';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import styled from 'styled-components';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie] = useHttp(getMovieDetails, movieId);

  const location = useLocation();

  const goBackRef = useRef(location.state?.from || '/movies');

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(goBackRef.current);
  };

  return (
    <>
      <StyledBtn onClick={handleGoBack}>Go back</StyledBtn>
      {movie ? (
        <div>
          <StyledWrapper>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              width="350"
            />
            <StyledInfo>
              <h2>
                {movie.title} ({movie.release_date.substring(0, 4)})
              </h2>
              <p>
                User score: {Math.ceil(parseFloat(movie.vote_average) * 10)}%
              </p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p>{movie.genres.map(el => el.name + ' ')}</p>
            </StyledInfo>
          </StyledWrapper>
          <hr />
          <StyledAdditional>Additional info</StyledAdditional>
          <StyledNavLink to="cast">Cast</StyledNavLink>
          <StyledNavLink to="reviews">Reviews</StyledNavLink>
          <Outlet />
        </div>
      ) : (
        <InfinitySpin />
      )}
    </>
  );
};

export default MoviesDetails;

const StyledWrapper = styled.div`
  display: flex;
  margin: 0 15px;
  gap: 20px;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 36px;
  }
  h3,
  h4 {
    font-size: 24px;
    margin: 0;
  }
  p {
    font-size: 22px;
  }
`;

const StyledBtn = styled.button`
  width: 100px;
  padding: 10px;
  margin: 0 0 10px 10px;
  background-color: #096a3e;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #3b906a;
  }
`;

const StyledAdditional = styled.h5`
  font-size: 25px;
  margin: 25px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #070707;
  font-weight: 500;
  font-size: 22px;
  margin-left: 15px;
  margin-right: 5px;
  &.active {
    color: #096a3e;
  }
`;
