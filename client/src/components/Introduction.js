import React from "react";
import styled from "styled-components";

const Introduction = () => {
    
  return (
    <Wrapper id="introduction-page">
      <Intro>
        <h1>Do you need advice on who to keep in your lineup?</h1>
        <h2>
          Getting Fantasy help isn't always easy when competing versus friends.
          FantasyLifeline has you covered!
        </h2>
        <h3>
          Simply follow the 3 steps below to start getting and giving Fantasy
          advice to the FantasyLifeline community. Once you question is
          submitted FantasyLifeline members will vote on which player they think
          you should keep out of the two in question.
        </h3>
      </Intro>
      <Container>
        <One>
          <StepsContainer>
            <h2> Create Account</h2>
          </StepsContainer>
        </One>
        <Two>
          <StepsContainer>
            <h2>Select players</h2>
            <ul>
              <li>
                Head over to <a href="/new-question">Get Fantasy Help!</a>{" "}
                section.
              </li>
              <li>
                Use the drop down to select two players you are undecided on.
              </li>
              <li>
                Click "Submit" & give time to FatasyLifeline comunity to vote
                which player they think is best.
              </li>
            </ul>
          </StepsContainer>
        </Two>
        <Three>
          <StepsContainer>
            <h2>Check back for results</h2>
            <h3>
              Head over to <a href="/"> My Account </a> page and watch the votes
              pile in.
            </h3>
          </StepsContainer>
        </Three>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const Intro = styled.div`
  height: 65%;
  max-height: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  /* background: rgb(13,13,13);
background: -moz-linear-gradient(90deg, rgba(13,13,13,1) 10%, rgba(149,149,149,1) 100%, rgba(34,34,34,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(13,13,13,1) 10%, rgba(149,149,149,1) 100%, rgba(34,34,34,1) 100%);
background: linear-gradient(90deg, rgba(13,13,13,1) 10%, rgba(149,149,149,1) 100%, rgba(34,34,34,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0d0d0d",endColorstr="#222222",GradientType=1); */
  border-top: solid #c1c0c0 3px;
  border-right: solid #c1c0c0 3px;
  border-left: solid #c1c0c0 3px;
  padding-top: 20px;

  h1 {
    font-size: 5rem;
    color: black;
  }
  h2 {
    color: var(--theme-color);
    font-size: 2.2rem;
    padding: 10px;
    font-weight: 600;
  }
  h3 {
    color: black;
    font-size: 2rem;
    padding: 20px;
    width: 75%;
    text-align: center;
    font-weight: 400;
    text-rendering: optimizeLegibility;
  }
`;
const Container = styled.div`
  height: 50%;
  width: 100%;
  max-height: 640px;
  display: flex;
`;
const One = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: cover;
  background-image: url("../Images/Pic01.png");
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
`;

const Two = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
  background-image: url("../Images/Pic2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
`;

const Three = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
  background-image: url("../Images/Pic04.png");
  background-position: cover;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
`;

const StepsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
  border: solid #c1c0c0 3px;

  h2 {
    color: var(--theme-color);
    font-size: 3rem;
    padding: 10px;
    border-bottom: solid white;
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: solid white;
    list-style-type: circle;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    width: 90%;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  li {
    color: white;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 20px;
    width: 85%;
  }

  a {
    border-radius: 7px;
    padding: 5px;
    padding-right: 10px;
    padding-left: 10px;
    background-color: #b01313;
    color: var(--primary-color);
    text-decoration: none;
    border: solid 2px transparent;
  }

  a:hover {
    border: solid var(--primary-color) 2px;
  }
`;

export default Introduction;
