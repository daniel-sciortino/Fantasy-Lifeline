import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import Button from "./Button";

const Home = () => {
  return (
    <Wrapper>
      {/* <MainImage>
<img src="/Images/homepage.png"></img>
      </MainImage> */}
      <DetailsContainer>
        <TitleContainer>
          <h1>Join the Community</h1>
          <DetailsP>
            <p>
              Here at FantasyLifeline we know asking your friends for fantasy
              advice is usually not an option. Join a community where you can
              get honest fantasy advice for your team without tipping off your
              friends.
            </p>
          </DetailsP>
          <Button>Get Started</Button>
        </TitleContainer>

        {/* <RoutesContainer>
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
            Fantasy Lifeline Members.
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
          <StyledLink to="/questions"> Start Helping Now!</StyledLink>
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
      </RoutesContainer> */}
      </DetailsContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 92vh;
  background-image: url("../Images/HomeBG.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

// const MainImage = styled.div`
//   width: 40vw;
//   height: 100%;

//   img {
//     width: 100%;
//     height: 100%;
//     image-rendering: auto;
//   }
// `;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  h1 {
    color: white;
    font-size: 5rem;
    margin: 10px;
    margin-top: 40px;
    text-shadow: 1px 0.8px black;
  }
  Button {
    margin-top: 50px;
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

const DetailsP = styled.div`
  max-width: 600px;
  font-size: 1.5rem;
  color: white;
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
  justify-content: center;
  text-align: center;
`;

export default Home;
