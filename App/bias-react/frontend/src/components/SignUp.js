import React from "react";
import { MyContext } from "../context";
import { Link } from "react-router-dom";
import {
  SignUpTag,
  MainButton,
  H2styled,
  Bordersections,
  Myh3,
  Myhr,
  PrimaryButton,
  CenterizeMe
} from "../styles/components";

function SignupContainer(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <SignUpTag>
          <h1>SignUp</h1>
          <Bordersections>
            <Myhr />

            <H2styled>Your Privacy</H2styled>
            <Myh3>Your data will not be sold to any kind of advertisers.</Myh3>
            <Myhr />
            <div className="privacy-policy-box">
              <h3>
                a strong privacy policy.
                <br />
              </h3>
              <ul>
                <li>Your data will not be sold to any kind of advertisers.</li>
                <li>You have control over your data.</li>
              </ul>
              <H2styled>Wanna know more?</H2styled>
              <Link>
                <MainButton>Check our privacy policy</MainButton>
              </Link>
              <br />
            </div>
          </Bordersections>
          <div className="both-sides">
            <div className="privacy-alert">
              <br />
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
                <PrimaryButton type="submit">Create my Account</PrimaryButton>
              </form>
              <CenterizeMe>
                <p className="aligncenter-text">
                  Do you already have an account?
                </p>
                <Link to="/login">Log In</Link>
              </CenterizeMe>
            </div>
          </div>
        </SignUpTag>
      )}
    </MyContext.Consumer>
  );
}

export default SignupContainer;
SignupContainer.contextType = MyContext;
