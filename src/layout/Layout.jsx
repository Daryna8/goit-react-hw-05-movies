import { NavLink, Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const Layout = () => {
  return (
    <div>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </StyledNav>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;

const StyledNav = styled.nav`
  padding: 20px 35px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #070707;
  font-weight: 700;
  font-size: 32px;
  margin-right: 10px;
  &.active {
    color: #096a3e;
  }
`;
