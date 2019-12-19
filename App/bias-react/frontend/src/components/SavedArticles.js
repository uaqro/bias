import React, { Component } from "react";
import {
  FeedDiv,
  CenterizeMe,
  LoginRedirectButton
} from "../styles/components";
import { MyContext } from "../context";
import ArticleCard from "./ArticleCard.js";
import { Link } from "react-router-dom";

export default class SavedArticles extends Component {
  state = {
    feed: [],
    searchValue: ""
  };
  componentDidMount = async () => {
    this.context.getSavedArticles();
  };
  searchQuery = e => {
    this.setState({ searchValue: e.target.value });
  };
  // didComponentUpdate = () => {
  //   if (this.context.savedArticlesFeed.length != this.state.feed.length) {
  //     this.setState({ feed: this.context.savedArticlesFeed });
  //   }
  // };

  render() {
    const reg = new RegExp(this.state.searchValue);
    return (
      <MyContext.Consumer>
        {context => (
          <FeedDiv>
            {context.loggedUser ? (
              <>
                <tag>Search</tag>
                <input
                  type="text"
                  value={this.state.searchValue}
                  onChange={this.searchQuery}
                />
                {context.savedArticlesFeed
                  .filter(article => article.headline.match(reg))
                  .map((e, i) => {
                    console.log(e);
                    return (
                      <ArticleCard article={e} key={i} context={context} />
                    );
                  })}
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

SavedArticles.contextType = MyContext;
