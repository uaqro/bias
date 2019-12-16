import React, { Component } from "react";
import { Home, H2styled } from "../styles/components";
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
            <hr />
            <H2styled>What?</H2styled>
            <p>
              bias is a AI powered news source which will get you curated,
              organized and simplified information.
            </p>
            <hr />
            <H2styled>How?</H2styled>
            <div className="stats-box">
              <div className="sub-stats-box">
                <img src="./scrapp.png" alt="scrapppp" />
                <p>
                  <strong>1. Get all sources</strong>
                </p>
                <p>
                  We get information from thousands of sources to double-check
                  information and get all different optics.
                </p>
                <br />
              </div>
              <div className="sub-stats-box">
                <img src="./modeling.png" alt="scrapppp" />
                <p>
                  <strong>2. Power and enhance</strong>
                </p>
                <p>
                  Out of all the information we put up, we create new,
                  neutralized, more accurate and summarized information.
                </p>
                <br />
              </div>
              <div className="sub-stats-box">
                <img src="./contract.png" alt="scrapppp" />
                <p>
                  <strong>3. Get the summary</strong>
                </p>
                <p>
                  You will read bias-free, structured, summarized information.
                </p>
                <br />
              </div>
            </div>

            <h2>Why?</h2>

            <div className="stats-box">
              <div className="sub-stats-box">
                <img src="./cloud.png" alt="data" />
                <p>
                  <strong>Keep your privacy.</strong>
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
                  <strong>Be aware</strong>
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
                  <strong>Time efficient</strong>
                </p>
                <p>You will get the main news, clustered and summarized.</p>
                <br />
              </div>
            </div>
            <div className="register">
              <Link to="/signup">
                <button>Register for Free and Start Now</button>
              </Link>
              <p>
                or <Link to="/login">login</Link> if you already have an
                account.
              </p>
            </div>
          </Home>
        )}
      </MyContext.Consumer>
    );
  }
}
