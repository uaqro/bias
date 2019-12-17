import React, { Component } from "react";
import { MyContext } from "../context";
import { Link } from "react-router-dom";
import { LogWrapper, PrimaryButton } from "../styles/components";

export default class LogIn extends Component {
  componentDidMount() {
    if (this.context.loggedUser) {
      return this.props.history.push("/");
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
                    this.props.history.push("/feed");
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
                <PrimaryButton type="submit">Log Me In!</PrimaryButton>
              </form>
              <div className="create-ac">
                <p>
                  If you don't have an account yet, you can create your account
                  <Link to="/signup"> here</Link>
                </p>
              </div>
            </div>
          </LogWrapper>
        )}
      </MyContext.Consumer>
    );
  }
}
