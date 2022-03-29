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
          <h1>Fantasy Lifeline</h1>
          <h2>Getting fantasy advice just got easier.</h2>
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
              color: "var(--primary-bg-color).",
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
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-color: rgb(0, 0, 0, 0);

  /* border-radius: 20px; */

  h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 20vh;
    color: #f7f7ff;
    font-size: 17vmin;
    font-family: "Bebas Neue", cursive;
    font-family: "Oswald", sans-serif;
  }

  h2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 10vh;
    color: #f5b800;
    font-size: 5vmin;
    font-family: "Bebas Neue", cursive;
    font-family: "Oswald", sans-serif;
  }

  Button {
    margin-top: 50px;
    /* background-color: #C1C3C1; */
    background-color: #000;
    color: var(--primary-color);
    font-size: 1.5rem;
    font-family: "Bebas Neue", cursive;
    font-family: "Oswald", sans-serif;
  }
`;

const RoutesContainer = styled.div`
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.25);
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
