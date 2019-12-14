import React, { Component } from "react";
import { MyContext } from "../context";
import { Link } from "react-router-dom";
import { SignUpTag, MainButton } from "../styles/components";

function SignupContainer(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <SignUpTag>
          <h1>SignUp</h1>
          <hr />
          <div className="both-sides">
            <div className="privacy-alert">
              <h2>Your Privacy</h2>
              <br />
              <p>bias. has a strong privacy policy.</p>
              <br />
              <ul>
                <li>Your data will not be sold to any kind of advertisers.</li>
                <br />
                <li>You have control over your data.</li>
                <br />
                <li>Wanna know more? </li>
                <br />
                <br />
                <Link>
                  <MainButton>Check our privacy policy</MainButton>
                </Link>
              </ul>
            </div>
            <div className="signup-form">
              <h2>Create your account</h2>
              <br />
              <form
                onSubmit={e => {
                  context.handleSignup(e);
                  props.history.push("/login");
                }}
              >
                <tag>Username.</tag>
                <input
                  type="text"
                  name="username"
                  value={context.formSignup.username}
                  onChange={e => context.handleInput(e, "formSignup")}
                />
                <br />
                <tag>Email.</tag>
                <input
                  type="text"
                  name="email"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.email}
                />
                <br />
                <tag>Password.</tag>
                <input
                  type="password"
                  name="password"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.password}
                />
                <br />
                <tag>Country.</tag>
                <input
                  type="text"
                  name="country"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.country}
                />
                <br />

                <tag>State.</tag>
                <input
                  type="text"
                  name="state"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.state}
                />
                <br />
                <tag>City.</tag>
                <input
                  type="text"
                  name="city"
                  onChange={e => context.handleInput(e, "formSignup")}
                  value={context.formSignup.city}
                />
                <br />
                <MainButton type="submit">Create my Account</MainButton>
              </form>
              <p>
                Do you already have an account? <Link to="/login">Log In</Link>
              </p>
            </div>
          </div>
        </SignUpTag>
      )}
    </MyContext.Consumer>
  );
}

export default SignupContainer;
SignupContainer.contextType = MyContext;
