import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CompletedPage = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <p>Your're Question has been submited!</p>
          <p>Please check your Profile page later to see the vote results.</p>
        </div>
        <div>
          <StyledLink to="/new-question"> Submit another Question</StyledLink>
          <StyledLink to="/questions"> Give Fantasy Advice</StyledLink>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: var(--secondary-bg-color);
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 7px;

  p {
    font-size: 1.5rem;
    margin: 14px;
    text-align: center;
    margin-bottom: 30px;
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
  justify-content: center;
`;

export default CompletedPage;
