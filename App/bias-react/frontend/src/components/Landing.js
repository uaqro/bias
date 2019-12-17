import React, { Component } from "react";
import {
  Home,
  H2styled,
  Myh3,
  Myhr,
  H2styledInversed,
  PrimaryButton,
  Bordersections
} from "../styles/components";
import { MyContext } from "../context";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Home>
            <h1>bias.</h1>
            <h3>AI powered News</h3>
            <br />
            <Bordersections>
              <Myhr />
              <Myh3>What?</Myh3>
              <Myhr />
              <p>
                bias is a AI powered news source which will get you curated,
                organized and simplified information.
              </p>
            </Bordersections>
            <Bordersections>
              <Myhr />
              <Myh3>How?</Myh3>
              <Myhr />
              <p>
                bias is a AI powered news source which will get you curated,
                organized and simplified information.
              </p>
              <div className="stats-box">
                <div className="sub-stats-box">
                  <img src="./scrapp.png" alt="scrapppp" />
                  <H2styled>1. Get all sources</H2styled>
                  <p>
                    We get information from thousands of sources to double-check
                    information and get all different optics.
                  </p>
                  <br />
                </div>
                <div className="sub-stats-box">
                  <img src="./modeling.png" alt="scrapppp" />
                  <H2styled>2. Power and enhance</H2styled>
                  <p>
                    Out of all the information we put up, we create new,
                    neutralized, more accurate and summarized information.
                  </p>
                  <br />
                </div>
                <div className="sub-stats-box">
                  <img src="./contract.png" alt="scrapppp" />
                  <H2styled>3. Get the summary</H2styled>
                  <p>
                    You will read bias-free, structured, summarized information.
                  </p>
                  <br />
                </div>
              </div>
            </Bordersections>
            <Bordersections>
              <Myhr />
              <Myh3>Why?</Myh3>
              <Myhr />
              <div className="stats-box why-box">
                <div className="sub-stats-box">
                  <img src="./cloud.png" alt="data" />
                  <p>
                    <H2styledInversed>Keep your privacy.</H2styledInversed>
                  </p>
                  <p>
                    bias will not share your personal data. That means you are
                    less likely to get political targeted adds or fake news
                    campaings.
                  </p>
                  <br />
                </div>
                <div className="sub-stats-box">
                  <img src="./artificial-intelligence.png" alt="data" />
                  <p>
                    <H2styledInversed>Be aware</H2styledInversed>
                  </p>
                  <p>
                    Get the full story from all sources availables. Know the
                    shades by getting the counterparts to every truth.
                  </p>
                  <br />
                </div>
                <div className="sub-stats-box">
                  <img src="./clock.png" alt="data" />
                  <p>
                    <H2styledInversed>Time efficient</H2styledInversed>
                  </p>
                  <p>You will get the main news, clustered and summarized.</p>
                  <br />
                </div>
              </div>
            </Bordersections>
            <Myhr />
            <div className="register">
              <p>Register for Free</p>
              <Link to="/signup">
                <PrimaryButton>Start Now</PrimaryButton>
              </Link>
              <p>
                or <Link to="/login">login</Link> if you already have an
                account.
              </p>
            </div>
            <br />
            <Myhr />
          </Home>
        )}
      </MyContext.Consumer>
    );
  }
}
