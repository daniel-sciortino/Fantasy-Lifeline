import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../actions";
import styled from "styled-components";
import { Redirect, useHistory } from "react-router-dom";
import Button from "./Button";
import { Link } from "react-router-dom";
import { GiEdgeCrack, GiRobotAntennas, GiWhiteBook } from "react-icons/gi";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { FiAlertTriangle } from "react-icons/fi";
import { useMediaQuery } from "../components/useMediaQuery";

const Signin = () => {
 

  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  let history = useHistory();
  const [passwordError, setPasswordError] = useState(false);
  let isPageWide = useMediaQuery("(min-width: 900px)");

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    };

    fetch("/login", requestOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (
          json.status === 200 &&
          json.user.email === email &&
          json.user.password === password
        ) {
          dispatch(signIn(json.user));
          return history.push("/");
        } else if (
          (json.status === 200 && json.user.email != email) ||
          json?.user?.password != password
        ) {
          setPasswordError(true);
          return;
        } else if (json.status === 404) {
          setPasswordError(true);
        }
      });
  };

  return isPageWide ? (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: "var(--primary-bg-color)" }}>Sign in</h1>
          <AuthErrorMsg
            style={
              passwordError === true
                ? { border: " solid red ", borderRadius: "7px" }
                : { backgroundColor: "var(secondary-bg-color)" }
            }
          >
            {passwordError === false ? (
              <span>
                <p></p>
              </span>
            ) : (
              <span>
                <ErrorMessage style={{ color: "white" }}>
                  <FiAlertTriangle style={{ height: "40px", width: "40px" }} />
                </ErrorMessage>
                <p>
                  {" "}
                  Sorry, the e-mail address and password you entered don’t
                  match. Please try again.
                </p>
              </span>
            )}
          </AuthErrorMsg>
          <label for="email">
            <b>Email</b>
          </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            maxlength="50"
          />

          <label for="password">
            <b>Password</b>
          </label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter Password"
            name="password"
            maxlength="40"
            required
          />

          <Button type="submit" onClick="submit" style={{ marginTop: "10px" }}>
            Login
          </Button>
          <SignUpLink>
            <p>Don't have an account?</p>
            <p class="signUp"> Sign up.</p>
          </SignUpLink>
        </form>
      </div>
    </Container>
  ) : (
    <Container style={{ flexDirection: "column" }}>
      <div>
        <form onSubmit={handleSubmit}>
          <AuthErrorMsg
            style={
              passwordError === true
                ? { border: " solid red ", borderRadius: "7px" }
                : { backgroundColor: "white" }
            }
          >
            {passwordError === false ? (
              <span>
                <p></p>
              </span>
            ) : (
              <span>
                <ErrorMessage style={{ color: "white" }}>
                  <FiAlertTriangle style={{ height: "40px", width: "40px" }} />
                </ErrorMessage>
                <p>
                  {" "}
                  Sorry, the e-mail address and password you entered don’t
                  match. Please try again.
                </p>
              </span>
            )}
            <h1>Sign in</h1>
          </AuthErrorMsg>

          <label for="email">
            <b>Email</b>
          </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            maxlength="50"
          />

          <label for="password">
            <b>Password</b>
          </label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter Password"
            name="password"
            maxlength="40"
            required
          />

          <ButtonContainer>
            <Button type="submit" onClick="submit" style={{ marginTop: "10px" }}>
              Login
            </Button>
            <Link
              style={{ textDecoration: "none", color: "var(--primary-color)" }}
            >
              Forgot password?
            </Link>
          </ButtonContainer>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  /* height: 83vh; */
  justify-content: center;
  align-items: center;
  background-image: url("/Images/Sign-in-background.jpeg");
  background-size: cover contain;

  form {
    height: 500px;
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: var(--secondary-bg-color);
    border-radius: 10px;
  }

  input {
    height: 50px;
    border-radius: 7px;
    max-width: 90%;
    margin-top: 4px;
    margin-right: 3px;
    margin-bottom: 4px;
    min-width: 380px;
  }
  h1 {
    margin-bottom: 40px;
    font-size: 50px;
    text-align: center;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 400px;
  max-width: 400px;
`;

const AuthErrorMsg = styled.div`
  display: flex;
  min-width: 380px;
  max-width: 70%;
  min-height: 80px;
  max-height: 80px;
  margin-bottom: 10px;
  color: var(--secondary-color);
  text-align: center;

  span {
    display: flex;
    align-items: center;
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

const SignUpLink = styled(Link)`
  display: flex;
  text-decoration: none;
  margin: 10px;

  p {
    margin-left: 2px;
    color: var(--outline-color);
  }

  .signUp:hover {
    text-decoration: underline;
  }
`;

export default Signin;
