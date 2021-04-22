import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import { useMediaQuery } from "./useMediaQuery";
import Loading from "./Loading";
import Button from "./Button";
import { GiCoinsPile } from "react-icons/gi";

interface IProps {
  isDisabled?: Boolean;
}

const Homepage = () => {
  const [allQuestions, setAllQuestions] = useState([null]);
  const [questionCount, setQuestionCount] = useState(0);
  const [question, setQuestion] = useState([null]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [voteComplete, setVoteComplete] = useState(false);
  const state = useSelector((state) => state.signIn);

  const requestOptionsVoteOne = {
    method: "PUT",
    body: JSON.stringify({
      votePlayerOne: question?.votePlayerOne?.concat(currentUserId),
    }),
    headers: { "Content-Type": "application/json" },
  };
  const requestOptionsVoteTwo = {
    method: "PUT",
    body: JSON.stringify({
      votePlayerTwo: state?._id,
    }),
    headers: { "Content-Type": "application/json" },
  };

  useEffect(() => {
    setLoading(true);

    fetch(`/all-questions`)
      .then((res) => res.json())
      .then((data) => {
        setAllQuestions(data.questions);
      })
      .catch((error) => {
        setLoading(false);
        console.log("ERROR", error);
        setError(true);
      });
  }, []);
  /////// set either logged in user ID or offline userID ////////
  useEffect(() => {
    if (state._id) {
      setCurrentUserId(state._id);
    } else {
      setCurrentUserId("55555555");
    }
  }, []);
  /////////////////////////////////////////////////////////

  useEffect(() => {
    let totalQuestions = allQuestions.length;
    setQuestionCount(totalQuestions - 1);
  }, [allQuestions]);

  useEffect(() => {
    setQuestion(allQuestions[questionCount]);
  }, [questionCount]);

  //////////////////// button next Question /////////////////

  const handleNextQuestion = (e) => {
    e.preventDefault();
    if (questionCount > -1) {
      setQuestionCount(questionCount - 1);
      setVoteComplete(false);
    } else {
      setQuestionCount(0);
    }
  };

  const handleVoteOne = (e) => {
    console.log(e.currentTarget.value);

    fetch(`/vote-one/${e.currentTarget.value}`, requestOptionsVoteOne)
      .then((res) => res.json())
      .then((json) => {
        console.log("vote 1", json);
        if (json.status === 200) {
        } else if (json.status === 400) {
          return window.alert("This user already exists");
        }
        setVoteComplete(true);
      });
  };

  const handleVoteTwo = (e) => {
    console.log(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <TitleContainer>
        <h1>Someone out there needs your help!</h1>
        <h2>Click on the player you believe is the better fantasy option.</h2>
      </TitleContainer>
      {question ? (
        <QuestionContainerBg>
          <QuestionContainer disabled={voteComplete}>
            <PlayerBox onClick={handleVoteOne} value={question._id}>
              <h2>
                <h3># {question?.playerOne?.primaryNumber}</h3>
                {question?.playerOne?.fullName}
              </h2>
              <h4> {question?.playerOne?.currentTeam.name} </h4>

              {question?.playerOne?.id && (
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${question?.playerOne?.id}.jpg`}
                  alt={question?.playerOne.fullName}
                ></img>
              )}

              <h4>
                Position: {question?.playerOne?.primaryPosition.abbreviation}{" "}
              </h4>
              <h4>Age: {question?.playerOne?.currentAge} </h4>
              <h4>Height: {question?.playerOne?.height} </h4>
              <h4>
                Birth Place: {question?.playerOne?.birthCity},{" "}
                {question?.playerOne?.birthCountry}{" "}
              </h4>
            </PlayerBox>
            <h2>OR</h2>
            <PlayerBox onClick={handleVoteTwo} value={question._id}>
              <h2>
                <h3># {question?.playerTwo?.primaryNumber}</h3>
                {question?.playerTwo?.fullName}{" "}
              </h2>
              <h4> {question?.playerTwo?.currentTeam.name} </h4>

              {question?.playerTwo?.id && (
                <img
                  src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${question?.playerTwo?.id}.jpg`}
                  alt="profile"
                ></img>
              )}

              <h4>
                Position: {question?.playerTwo?.primaryPosition.abbreviation}{" "}
              </h4>
              <h4>Age: {question?.playerTwo?.currentAge} </h4>
              <h4>Height: {question?.playerTwo?.height} </h4>
              <h4>
                Birth Place: {question?.playerTwo?.birthCity},{" "}
                {question?.playerOne?.birthCountry}{" "}
              </h4>
            </PlayerBox>
          </QuestionContainer>
          <Button
            style={{ fontSize: "1rem", fontWeight: "bold" }}
            onClick={handleNextQuestion}
          >
            {" "}
            Next{" "}
          </Button>
        </QuestionContainerBg>
      ) : (
        <div>loading</div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #2d3142;
  background-color: var(--primary-bg-color);

  h1,
  h2 {
    margin: 40px 0px 5px 0px;
  }

  p {
    font-size: 1.3rem;
    color: white;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const QuestionContainerBg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-bg-color);
  padding: 50px;
`;

const QuestionContainer = styled.div`
  width: 80%;
  height: 70%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 50px;

  button {
    ${({ disabled }) =>
      disabled &&
      css`
        cursor: not-allowed;
      `}
  }

  button:hover {
     {
      box-shadow: 0 0 10pt 4pt var(--outline-color);
    }
  }
`;

const PlayerBox = styled.button`
  width: 350px;
  max-width: 350px;
  min-height: 500px;
  max-height: 700px;

  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: solid 1px #adb5bd;
  background-image: url("https://www.nhltraderumor.com/wp-content/uploads/2014/08/ice-hockey-twitter-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
    width: 100%;
    color: white;
    background-color: #022b3a;

    h3 {
      margin-right: 25px;
      margin-left: -45px;
    }
  }
  h3 {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
    padding: 2px;
    color: #2d3142;
    border-radius: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-left: 0px;
  }
  h4 {
    padding: 5px;
  }
  img {
    margin: 10px;
    width: 80%;
    max-height: 200px;
    border: solid 1px #2d3142;
    image-rendering: auto;
  }
`;
export default Homepage;
