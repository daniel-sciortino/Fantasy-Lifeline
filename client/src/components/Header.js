import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <NavLink to="/">
        <Logo src="/Images/LOGO.png"></Logo>
      </NavLink>

      <span>
        <StyledNavLink to="/new-question">New Request</StyledNavLink>
        <StyledNavLink to="/login">Sign In</StyledNavLink>
        <StyledNavLink to="/sign-up">Sign Up</StyledNavLink>
      </span>
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

  span {
    position: absolute;
    right: 0px;
    display: flex;
    width: 450px;
    height: 80px;
    font-size: 1.5rem;
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  margin-right: auto;
  height: 100px;
  width: 150px;
  /* border: solid 3px #67a2a2;  */
`;

const StyledNavLink = styled(NavLink)`
      font-size: 1.2rem;
        margin: 1rem;
        text-decoration: none;
        color: var(--secondary-bg-color);
        z-index: 0;
        display: flex;
        align-items: center;
        position: relative;
       
    

        &&:hover {

            border: 1px solid var(--outline-color);
            border-radius: 5px;
            padding: 10px;
        text-shadow: 0 0 1px white;
        
        }
`;

export default Header;
