import React, { Component } from "react";
import { MyContext } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: left;
    box-sizing: border-box;
  }
`;

export default class LogIn extends Component {
  componentDidMount() {
    if (this.context.loggedUser) {
      return this.props.history.push("/profile");
    }
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <LogWrapper>
            <h1>Log In</h1>
            <form
              onSubmit={e => {
                context.handleLogin(e, () => {
                  this.props.history.push("/profile");
                });
              }}
            >
              <tag>Email.</tag>
              <input
                type="text"
                name="email"
                onChange={e => context.handleInput(e, "loginForm")}
              />
              <br />
              <tag>Password.</tag>
              <input
                type="password"
                name="password"
                onChange={e => context.handleInput(e, "loginForm")}
              />
              <br />
              <button type="submit">Log Me In!</button>
            </form>
            <p>
              If you don't have an account yet
              <br /> you can create your account <Link to="/signup">here</Link>
            </p>
          </LogWrapper>
        )}
      </MyContext.Consumer>
    );
  }
}
