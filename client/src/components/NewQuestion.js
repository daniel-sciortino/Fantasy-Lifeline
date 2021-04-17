import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const NewQuestion = () => {
  const [teams, setTeams] = useState(null);
  const [teamsTwo, setTeamsTwo] = useState(null);
  const [roster, setRoster] = useState(null);
  const [rosterTwo, setRosterTwo] = useState(null);
  const [selectedTeamOne, setSelectedTeamOne] = useState(null);
  const [selectedTeamTwo, setSelectedTeamTwo] = useState(null);
  const [selectedPlayerOne, setSelectedPlayerOne] = useState(null);
  const [selectedPlayerTwo, setSelectedPlayerTwo] = useState(null);
  const [playerOneLink, setPlayerOneLink] = useState(null);
  const [playerTwoLink, setPlayerTwoLink] = useState(null);
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);

  //////////////////////////////Fetch to get All NHL teams in dropdown
  useEffect(() => {
    console.log("teams");
    fetch("https://statsapi.web.nhl.com/api/v1/teams")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.teams);
      });
  }, []);

  ///////////////////////////// Player 1 ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////// Once team1 selected fetch selectedTeam Roster///////////////////////////////////////////
  useEffect(() => {
    console.log("team1-roster");
    fetch(`https://statsapi.web.nhl.com/${selectedTeamOne}/roster`)
      .then((res) => res.json())
      .then((data) => {
        setRoster(data.roster);
        return;
      });
  }, [selectedTeamOne]);

  ////////////////////////////// Once Player1 selected SetPlayerOneLink ///////////////////////////////////////////
  useEffect(() => {
    console.log("3");
    let playerOne = roster?.find(
      (player) => player.person.fullName === selectedPlayerOne
    );
    setPlayerOneLink(playerOne?.person.link);
  }, [selectedPlayerOne]);

  ////////////////////////////// Once Player1 selected fetch Player Data with PlayerOneLink ///////////////////////////////////////////
  useEffect(() => {
    console.log("4");
    fetch(`https://statsapi.web.nhl.com/${playerOneLink}`)
      .then((res) => res.json())
      .then((data) => {
        setPlayerOne(data.people[0]);
        return;
      });
  }, [playerOneLink]);

  ///////////////////////////// Handle selections Player 1 ///////////////////////////////////////////
  const handleSelectTeamOne = (e) => {
    e.preventDefault();
    setSelectedTeamOne(e.target.value);
  };

  const handleSelectPlayerOne = (e) => {
    e.preventDefault();
    setSelectedPlayerOne(e.target.value);
  };
  ///////////////////////////// Player 2 ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    console.log("5");
    fetch("https://statsapi.web.nhl.com/api/v1/teams")
      .then((res) => res.json())
      .then((data) => {
        setTeamsTwo(data.teams);
      });
  }, []);

  useEffect(() => {
    console.log("6");
    fetch(`https://statsapi.web.nhl.com/${selectedTeamTwo}/roster`)
      .then((res) => res.json())
      .then((data) => {
        if (selectedTeamOne === selectedTeamTwo) {
          console.log("working");
          let filteredRoaster = roster?.filter(
            (player) => player.person.fullName != selectedPlayerOne
          );

          setRosterTwo(filteredRoaster);
          
        } else {
          setRosterTwo(data.roster);
          return;
        }
      });
  }, [selectedTeamTwo]);

  ////////////////////////////// Once Player2 selected SetPlayerTwoLink ///////////////////////////////////////////
  useEffect(() => {
    console.log("6");
    let playerTwo = rosterTwo?.find(
      (player) => player.person.fullName === selectedPlayerTwo
    );
    setPlayerTwoLink(playerTwo?.person.link);
  }, [selectedPlayerTwo]);

  ////////////////////////////// Once Player2 selected fetch Player Data with PlayerTwoLink ///////////////////////////////////////////
  useEffect(() => {
    console.log("6");
    fetch(`https://statsapi.web.nhl.com/${playerTwoLink}`)
      .then((res) => res.json())
      .then((data) => {
        setPlayerTwo(data.people[0]);
        return;
      });
  }, [playerTwoLink]);

  const handleSelectTeamTwo = (e) => {
    e.preventDefault();
    setSelectedTeamTwo(e.target.value);
  };

  const handleSelectPlayerTwo = (e) => {
    e.preventDefault();
    setSelectedPlayerTwo(e.target.value);
  };
  const handleResetPlayerOne = (e) => {
    setSelectedTeamOne(null);
    setSelectedPlayerOne(null);
  };
  const handleResetPlayerTwo = (e) => {
    setSelectedTeamTwo(null);
    setSelectedPlayerTwo(null);
  };
  ////// handleSubmit New Question /////////////////////////////////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        playerOne: playerOne,
        playerTwo: playerTwo,
      }),
      headers: { "Content-Type": "application/json" },
    };

    fetch("/new-question", requestOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log("new-req", json);
        if (json.status === 200) {
          return window.alert("success");
        } else if (json.status === 400) {
          return window.alert("Error");
        }
      });
  };

  return (
    <Wrapper>
      <h1>Are you in need of some Fantasy advice?</h1>
      <p>
        Adding & dropping players sometimes gets stressfull. FantasyLifeline
        always has your back!{" "}
      </p>
      <h2>Pick Players</h2>

      <PlayerBoxesContainer>
        {!selectedPlayerOne || !selectedTeamOne ? (
          <PlayerBox>
            <label for="team"> Select Team</label>
            <select name="team" onChange={handleSelectTeamOne}>
              <option disabled selected>
                Choose team
              </option>
              {teams?.map((team) => {
                return <option value={team.link}>{team.name}</option>;
              })}
            </select>
            <label for="player"> Select Player</label>
            <select name="player" onChange={handleSelectPlayerOne}>
              <option disabled selected>
                Choose Player
              </option>
              {roster?.map((player) => {
                return <option>{player.person.fullName}</option>;
              })}
            </select>
          </PlayerBox>
        ) : (
          <PlayerBox>
            <h2>{playerOne?.fullName}</h2>
            <h4> {playerOne?.currentTeam.name} </h4>
            <h3>(# {playerOne?.primaryNumber})</h3>
            {playerOne?.id && (
              <img
                src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${playerOne?.id}.jpg`}
                alt="profile"
              ></img>
            )}

            <h4>Position: {playerOne?.primaryPosition.abbreviation} </h4>
            <h4>Age: {playerOne?.currentAge} </h4>
            <h4>Height: {playerOne?.height} </h4>
            <h4>
              Birth Place: {playerOne?.birthCity}, {playerOne?.birthCountry}{" "}
            </h4>
            <button onClick={handleResetPlayerOne}>Clear</button>
          </PlayerBox>
        )}
        {!selectedPlayerTwo || !selectedTeamTwo ? (
          <PlayerBox>
            <label for="team"> Select Team</label>
            <select name="team" onChange={handleSelectTeamTwo}>
              <option disabled selected>
                Choose team
              </option>
              {teamsTwo?.map((team) => {
                return <option value={team.link}>{team.name}</option>;
              })}
            </select>
            <label for="player-two"> Select Player</label>
            <select name="player-two" onChange={handleSelectPlayerTwo}>
              <option disabled selected>
                Choose team
              </option>
              {rosterTwo?.map((player) => {
                return <option>{player.person.fullName}</option>;
              })}
            </select>
          </PlayerBox>
        ) : (
          <PlayerBox>
            <h2>{playerTwo?.fullName}</h2>
            <h4> {playerTwo?.currentTeam.name} </h4>
            <h3>(# {playerTwo?.primaryNumber})</h3>
            <img
              src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${playerTwo?.id}.jpg`}
              alt="profile"
            ></img>
            <h4>Position: {playerTwo?.primaryPosition.abbreviation} </h4>
            <h4>Age: {playerTwo?.currentAge} </h4>
            <h4>Height: {playerTwo?.height} </h4>
            <h4>
              Birth Place: {playerTwo?.birthCity}, {playerTwo?.birthCountry}{" "}
            </h4>
            <button onClick={handleResetPlayerTwo}>Clear</button>
          </PlayerBox>
        )}
      </PlayerBoxesContainer>
      <Button style={{ margin: "40px" }} onClick={handleSubmit}>
        {" "}
        Select
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid fuchsia;

  h1,
  h2 {
    margin: 40px 0px 5px 0px;
  }
`;
const PlayerBoxesContainer = styled.div`
  width: 80%;
  height: 70%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  border: solid yellow;
`;
const PlayerBox = styled.div`
  width: 350px;
  min-width: 25%;
  min-height: 500px;
  max-height: 700px;
  border: solid blue 4px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  select {
    width: 90%;
    font-size: 1.2rem;
    padding: 4px;
  }

  label {
    padding: 10px;
  }

  h2,
  h3,
  h4 {
    padding: 5px;
  }
  img {
    margin: 10px;
  }
`;

export default NewQuestion;
