import React, { Component } from "react";
import { MyContext } from "../context";
import { Link } from "react-router-dom";
import { LogWrapper, MainButton } from "../styles/components";

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
            <br />
            <div className="login-form">
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
                <MainButton type="submit">Log Me In!</MainButton>
              </form>
              <p>
                If you don't have an account yet
                <br /> you can create your account{" "}
                <Link to="/signup">here</Link>
              </p>
            </div>
          </LogWrapper>
        )}
      </MyContext.Consumer>
    );
  }
}
