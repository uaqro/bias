import React, { Component } from "react";
//import { Home } from "../styles/components";
import styled from "styled-components";
import { MyContext } from "../context";
import { Link } from "react-router-dom";

const Home = styled.div``;

export default class Landing extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Home>
            <h1>bias.</h1>

            <h3>Be awake.</h3>

            <div>
              <img src="/images/data.png" alt="data" />
              <p>Keep your privacy.</p>
              <p>
                bias will not share your personal data. That means you are less
                likely to get political targeted adds or fake news campaings.
              </p>
              <img src="/images/data.png" alt="data" />
              <p>Be aware</p>
              <p>
                Get the full story from all sources availables. Know the shades
                by getting the counterparts to every truth.
              </p>
              <img src="/images/data.png" alt="data" />
              <p>Time efficient</p>
              <p>You will get the main news, clustered and summarized.</p>
            </div>
            <Link to="/signup">Register and Start Now</Link>
            <p>
              or <Link to="/login">login</Link> if you already have an account.
            </p>
          </Home>
        )}
      </MyContext.Consumer>
    );
  }
}
