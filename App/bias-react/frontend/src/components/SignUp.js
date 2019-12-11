import React, { Component } from "react";
import { MyContext } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignUpTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    width: 50%;
    flex-direction: column;
    text-align: left;
  }
`;

export default class SignupContainer extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <SignUpTag>
            <h1>SignUp</h1>
            <form
              onSubmit={e => {
                context.handleSignup(e);
                context.props.history.push("/login");
              }}
            >
              <tag>Username.</tag>
              <input
                type="text"
                name="username"
                onChange={e => context.handleInput(e, "formSignup")}
              />
              <br />
              <tag>Email.</tag>
              <input
                type="text"
                name="email"
                onChange={e => context.handleInput(e, "formSignup")}
              />
              <br />
              <tag>Password.</tag>
              <input
                type="password"
                name="password"
                onChange={e => context.handleInput(e, "formSignup")}
              />
              <br />
              <tag>Country.</tag>
              <input
                type="text"
                name="country"
                onChange={e => context.handleInput(e, "formSignup")}
              />
              <br />

              <tag>State.</tag>
              <input
                type="text"
                name="state"
                onChange={e => context.handleInput(e, "formSignup")}
              />
              <br />
              <tag>City.</tag>
              <input
                type="text"
                name="city"
                onChange={e => context.handleInput(e, "formSignup")}
              />
              <br />
              <button type="submit">Create my Account</button>
            </form>
            <p>
              Do you already have an account? <Link to="/login">Log In</Link>
            </p>
          </SignUpTag>
        )}
      </MyContext.Consumer>
    );
  }
}
