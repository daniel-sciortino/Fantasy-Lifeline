import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../actions";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "./Button";
import { FiAlertTriangle } from "react-icons/fi";

const SignUp = () => {
  const state = useSelector((state) => state.signin);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const dispatch = useDispatch();
  let history = useHistory();
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let firstName = firstNameRef.current.value;
    let lastName = lastNameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    let confirmPassword = passwordConfirmRef.current.value;

    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        isSignedIn: true,
      }),
      headers: { "Content-Type": "application/json" },
    };

    if ((password != confirmPassword)) {
      setConfirmPasswordError(true);
      return;
    } else {
      fetch("/sign-up", requestOptions)
        .then((res) => res.json())
        .then((json) => {
          console.log("sign-up", json);
          if (json.status === 200) {
            dispatch(signUp(json.user));
            return history.push("/");
          } else if (json.status === 400) {
            return window.alert("This user already exists");
          }
        });
    }
  };
  return (
    <Body>

      <FormContainer>
        <h1>Create an Account</h1>

        <AuthErrorMsg
          style={
            confirmPasswordError === true
              ? { border: " solid red ", borderRadius: "7px" }
              : { backgroundColor: "var(--secondary-bg-color)" }
          }
        >
          {confirmPasswordError === false ? (
            <span>
              <p></p>
            </span>
          ) : (
            <span>
              <ErrorMessage style={{ color: "white" }}>
                <FiAlertTriangle style={{ height: "40px", width: "40px" }} />
              </ErrorMessage>
              <p> The passwords provided do not match!</p>
            </span>
          )}
        </AuthErrorMsg>

        <form onSubmit={handleSubmit}>
          <label for="first-name">
            <b>First name</b>
          </label>
          <input
            ref={firstNameRef}
            type="text"
            placeholder="First name"
            name="first-name"
            required
          />
          <label for="last-name">
            <b>Last name</b>
          </label>
          <input
            ref={lastNameRef}
            type="text"
            placeholder="Last Name"
            name="last-name"
            required
          />
          <label for="email">
            <b>Email</b>
          </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            onChange={handleChange}
          />

          <label for="password">
            <b>Password</b>
          </label>
          <input
            ref={passwordRef}
            type="password"
            onChange={handleChange}
            placeholder="Enter Password"
            name="password"
            required
          />
          <label for="password">
            <b>Confirm Password</b>
          </label>
          <input
            ref={passwordConfirmRef}
            type="password"
            onChange={handleChange}
            placeholder="Confirm Password"
            name="password"
            required
          />

          <div>
            <Button
              type="submit"
              onClick={handleSubmit}
              style={{ marginTop: "10px" }}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </FormContainer>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  height: 85vh;
  background-image: url("/Images/Sign-in-background.jpeg");
  display:flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 500px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: var(--secondary-bg-color);
  
  

  h1 {
    justify-content: center;
    display: flex;
    align-items: center;
    text-align: center;
    height: 15%;
    font-size: 50px;
    color: var(--primary-bg-color);
  }

  form {
    height: 80%;
    min-width: 500px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    height: 50px;
    width: 75%;
    border-radius: 7px;
    margin-top: 4px;
    margin-right: 3px;
    margin-bottom: 4px;
  }
  label {
    padding: 5px;
  }
`;
const AuthErrorMsg = styled.div`
  display: flex;
  min-width: 380px;
  max-width: 70%;
  min-height: 80px;
  max-height: 80px;
  margin-bottom: 10px;
  text-align: center;
 

  span {
    display: flex;
    align-items: center;
    background-color: var(--secondary-bg-color);
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  color: white;
  width: 20%;
  height: 100%;
  background-color: red;
  align-items: center;
  justify-content: center;
`;

export default SignUp;
