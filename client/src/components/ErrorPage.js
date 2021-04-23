import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <h1>This page can't be found</h1>
      <span>
        <HomeLink to={"/"}>Go back home</HomeLink>
      </span>
      <Image src="/Images/buzzer.png" />
    </Wrapper>
  );
};

const HomeLink = styled(Link)`
  text-decoration: none;
  margin: 50px;
  font-size: 2rem;
  font-weight: bold;
  color: var(--secondary-color);
  padding: 10px 20px;
  /* border-radius: 20px; */
  border: 4px solid var(--primary-color);
  &:hover {
    background-color: var(--primary-color);
    border-color: black;
  }
  &:active {
    color: white;
    box-shadow: 2px 2px 5px black inset;
  }
`;

const Image = styled.img`
  margin: 50px;
  width: 400px;
  height: 400px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  min-height: var(--page-height);
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

export default ErrorPage;
