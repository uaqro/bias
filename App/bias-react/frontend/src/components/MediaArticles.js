import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FeedDiv,
  MediaArticle,
  H2styled,
  Myhr,
  CenterizeMe,
  LoginRedirectButton
} from "../styles/components";
import { MyContext } from "../context";
import ArticleCard from "./ArticleCard";

export default class Feed extends Component {
  state = {
    feed: [],
    searchValue: ""
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
                {/* <h1>{context.allMediaArticles[0].media.name}</h1> */}
                <h1>{context.mediaDetail.name}</h1>
                <tag>Search</tag>
                <input
                  type="text"
                  value={this.state.searchValue}
                  onChange={this.searchQuery}
                />
                <hr />
                {context.mediaDetail.articles
                  .filter(article => article.headline.match(reg))
                  .map((e, i) => (
                    <MediaArticle>
                      <Link to={e.link}>
                        <h2 className="font-secondary">{e.headline}</h2>
                      </Link>
                      <p>{e.subhead}</p>
                      <div>
                        <h4 className="bias-box">bias:{e.bias}</h4>
                      </div>
                      <Myhr></Myhr>
                    </MediaArticle>
                  ))}
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
