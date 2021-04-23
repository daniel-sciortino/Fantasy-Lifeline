import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../actions";

const Header = () => {
  const isSignedIn = useSelector((state) => state.signIn);
  const dispatch = useDispatch();

  const handleSignOut = (e) => {
    dispatch(signOut());
    window.location.reload();
  };

  return (
    <Wrapper>
      <NavLink to="/">
        <Logo src="/Images/LOGO.png"></Logo>
      </NavLink>

      <NavLinkContainer>
        <StyledNavLink to="/new-question">Get Fantasy Advice</StyledNavLink>
        <StyledNavLink to="/questions">Give Fantasy Advice</StyledNavLink>
        {!isSignedIn._id ? (
          <span>
            <StyledNavLink to="/login">Sign In</StyledNavLink>
            <StyledNavLink to="/sign-up">Sign Up</StyledNavLink>
          </span>
        ) : (
          <span>
            <StyledNavLink to="/profile">Profile</StyledNavLink>
            <StyledNavLink to="/" onClick={handleSignOut}>
              Sign Out
            </StyledNavLink>
          </span>
        )}
      </NavLinkContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-bg-color);
  border-bottom: solid 3px #67a2a2;
`;

const NavLinkContainer = styled.div`
  position: absolute;
  right: 0px;
  display: flex;
  max-width: 650px;
  max-height: 80px;
  font-size: 1.5rem;
  justify-content: center;

  span {
    display: flex;
  }
`;
const Logo = styled.img`
  margin-right: auto;
  height: 100px;
  width: 150px;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.1rem;
  margin: 1rem;
  text-decoration: none;
  color: var(--secondary-bg-color);
  z-index: 0;
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid transparent;
  /* padding-top:10px;
  padding-bottom:10px; */
  padding: 12px 5px 12px 5px;

  &&:hover {
    border: 1px solid var(--outline-color);
    border-radius: 5px;

    text-shadow: 0 0 1px white;
    align-items: center;
    padding: 12px 5px 12px 5px;
  }
`;

export default Header;
