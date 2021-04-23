import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

const Home = () => {

  return (
    <Wrapper>
      <TitleContainer>
        <h1>
          Having trouble deciding which player would suit your Fantasy NHL team
          better?
        </h1>
        <h2>Most times asking your friends for advice is not an option.</h2>
        <h1>Getting NHL Fantasy help has never been easier before!</h1>
      </TitleContainer>
      <RoutesContainer>
        <LinkContainer>
          <VscDebugBreakpointLogUnverified
            style={{
              fontSize: "1.5rem",
              color: "var(--primary-bg-color)",
              marginRight: "5px",
            }}
          />
          <h2>
            {" "}
            Pick two players you are unsure of & receive honest advice from
            fellow Fantasy Lifeline Members
          </h2>
          <StyledLink to="/new-question"> Get Fantasy Advice</StyledLink>
        </LinkContainer>
        <LinkContainer>
          <VscDebugBreakpointLogUnverified
            style={{
              fontSize: "1.5rem",
              color: "var(--primary-bg-color)",
              marginRight: "5px",
            }}
          />
          <h2>
            {" "}
            People out there need your advice as well. Simply click on the
            player you see as the better option for NHL Fantasy Hockey.
          </h2>
          <StyledLink to="/new-question"> Start Helping Now!</StyledLink>
        </LinkContainer>

        <LinkContainer>
          <VscDebugBreakpointLogUnverified
            style={{
              fontSize: "1.5rem",
              color: "var(--primary-bg-color)",
              marginRight: "5px",
            }}
          />
          <h2>
            {" "}
            You must be a Fantasy Lifeline member to recieve vote results. What
            are you waiting for???
          </h2>
          <StyledLink to="/sign-up"> Sign Up Now!</StyledLink>
        </LinkContainer>
      </RoutesContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url("/Images/Sign-in-background.jpeg");
  background-size: cover;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    font-size: 3rem;
    margin: 10px;
    margin-top: 40px;
    text-shadow: 1px 0.8px black;
  }
`;

const RoutesContainer = styled.div`
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
  background-color: var(--secondary-bg-color);
  padding: 20px;
`;
const LinkContainer = styled.div`
  display: flex;
  margin: 25px;
  align-items: center;
  justify-content: left;

  h2 {
    color: var(--outline-color);
    text-shadow: 1px 0.8px black;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  margin: 1rem;
  text-decoration: none;
  color: var(--secondary-bg-color);
  background-color: var(--primary-bg-color);
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
`;

export default Home;
