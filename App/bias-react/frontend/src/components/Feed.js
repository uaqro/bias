import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FeedDiv,
  CenterizeMe,
  Loader,
  LoginRedirectButton
} from "../styles/components";
import { MyContext } from "../context";
import ArticleCard from "./ArticleCard";
import { PushSpinner } from "react-spinners-kit";

export default class Feed extends Component {
  state = {
    feed: [],
    searchValue: ""
  };
  componentDidMount = async () => {
    this.context.getFeed();
    this.setState({ feed: this.context.articlesfeed });
  };
  searchQuery = e => {
    this.setState({ searchValue: e.target.value });
  };

  // componentDidUpdate = () => {
  //   if (this.context.state.usr.length != this.state.feed.length) {
  //     this.setState({ feed: this.context.savedArticlesFeed });
  //   }
  // }

  render() {
    const reg = new RegExp(this.state.searchValue);
    return (
      <MyContext.Consumer>
        {context => (
          <FeedDiv>
            {context.loggedUser ? (
              <>
                {context.loading ? (
                  <Loader>
                    <CenterizeMe>
                      <PushSpinner
                        size={30}
                        Color="#686769"
                        loading={context.loading}
                      />
                      <p>Getting todays world...</p>
                    </CenterizeMe>
                  </Loader>
                ) : (
                  <>
                    <h1>News Feed</h1>
                    <div>Search</div>
                    <input
                      type="text"
                      value={this.state.searchValue}
                      onChange={this.searchQuery}
                    />
                    <>
                      {context.articlesfeed
                        .filter(article => article.headline.match(reg))
                        .map((e, i) => (
                          <ArticleCard article={e} val={i} context={context} />
                        ))}
                    </>
                  </>
                )}
              </>
            ) : (
              <CenterizeMe>
                <p>You need to be logged in to see the content.</p>
                <LoginRedirectButton>
                  <Link to="/login">Log In</Link>
                </LoginRedirectButton>
                <br />
                <LoginRedirectButton>
                  <Link to="/signup">Sign Up</Link>
                </LoginRedirectButton>
              </CenterizeMe>
            )}
          </FeedDiv>
        )}
      </MyContext.Consumer>
    );
  }
}

Feed.contextType = MyContext;
