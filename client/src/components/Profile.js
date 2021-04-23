import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import { useMediaQuery } from "./useMediaQuery";
import Loading from "./Loading";
import Button from "./Button";
import { GiCoinsPile } from "react-icons/gi";

const Profile = () => {

    const [allQuestions, setAllQuestions] = useState([null]);
    const [userQuestions, setUserQuestions] = useState([null]);
    const state = useSelector((state) => state.signIn);

    useEffect(() => {
       
    
        fetch(`/all-questions`)
          .then((res) => res.json())
          .then((data) => {
              console.log(state._id)
            setAllQuestions(data.questions);
            
          })
          .catch((error) => {
            
            console.log("ERROR", error);
           
          });
      }, []);


      useEffect(() => {
        let userId = [state._id]
        const usersQuestions = allQuestions?.filter((question) => userId?.includes(question?.userId))
        setUserQuestions(usersQuestions);
         console.log(usersQuestions);
      }, [allQuestions])







    return (
        <Wrapper>
            <div>
            <table>
                <tr>
                    <th>Player 1</th>
                    </tr>
{userQuestions.map((question) => {
    return (<div>
        

        
        <h2> {question.playerOne.fullName}</h2>
        
        </div>)
})}</table>
            </div>
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
`
export default Profile;