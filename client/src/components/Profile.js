import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Profile = () => {
  const [allQuestions, setAllQuestions] = useState([null]);
  const [userQuestions, setUserQuestions] = useState([null]);
  const state = useSelector((state) => state.signIn);

  useEffect(() => {
    fetch(`/all-questions`)
      .then((res) => res.json())
      .then((data) => {
        setAllQuestions(data.questions);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    let userId = [state._id];
    const usersQuestions = allQuestions?.filter((question) =>
      userId?.includes(question?.userId)
    );
    setUserQuestions(usersQuestions);
  }, [allQuestions]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Wrapper>
      <h3>Welcome back, {capitalizeFirstLetter(state.firstName)}!</h3>
      <TitleContainer>
        <h1>The people have spoken </h1>
        <img src="/Images/SPOKEN.png" alt="spoken"></img>
      </TitleContainer>
      <Table>
        <tr>
          <th>Player 1</th>
          <th>Player 2</th>
          <th>Votes for Player 1</th>
          <th>Votes for Player 2</th>
          <th>Members Pick</th>
          <th>Percentage</th>
        </tr>
        {userQuestions.map((question) => {
          return (
            <tr>
              <td> {question?.playerOne?.fullName}</td>
              <td> {question?.playerTwo?.fullName}</td>
              <td> {question?.votePlayerOne?.length}</td>
              <td> {question?.votePlayerTwo?.length}</td>
              <td style={{ backgroundColor: " rgba(34, 229, 202, 0.4)" }}>
                {" "}
                {question?.votePlayerOne?.length >
                question?.votePlayerTwo?.length
                  ? question?.playerOne?.fullName
                  : question?.playerTwo?.fullName}
              </td>
              <td>
                {" "}
                {question?.votePlayerOne?.length >
                question?.votePlayerTwo?.length
                  ? Math.round(
                      (question?.votePlayerOne?.length /
                        (question?.votePlayerOne?.length +
                          question?.votePlayerTwo?.length)) *
                        100
                    )
                  : Math.round(
                      (question?.votePlayerTwo?.length /
                        (question?.votePlayerOne?.length +
                          question?.votePlayerTwo?.length)) *
                        100
                    )}
              </td>
            </tr>
          );
        })}
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2d3142;
  background-color: var(--primary-bg-color);

  h3 {
    position: absolute;
    left: 50px;
    top: 175px;
    font-size: 25px;
    color: var(--primary-color);
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(34, 229, 202, 0.4);
  width: 80%;
  margin: 30px;

  img {
    width: 150px;
    margin: 15px 30px 15px 30px;
  }
`;

const Table = styled.table`
  width: 80%;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
  background-color: var(--secondary-bg-color);
  margin-top: 10px;
  border-radius: 7px;

  td,
  th {
    border: 1px solid lightgray;
    font-size: 1.2rem;
    padding: 9px;
  }
  th {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default Profile;
