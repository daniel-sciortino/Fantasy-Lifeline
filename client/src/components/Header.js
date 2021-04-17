import React from 'react';
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Wrapper>
            <span>
            <NavLink to="/">LOGO</NavLink>
            </span>
            
            <NavLink to="/new-question">New Request</NavLink>
            
        </Wrapper>
    );
};

const Wrapper = styled.div `
border: solid red 1px;
width: 100vw;
height: 5vh;
display: flex;
justify-content: space-between;
align-items: center;

span{
    margin: auto;
}

`

export default Header;