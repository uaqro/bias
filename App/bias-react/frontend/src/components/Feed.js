import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { FeedDiv } from "../styles/components";
import { MyContext } from "../context";
import ArticleCard from "./ArticleCard";

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
            <input
              type="text"
              value={this.state.searchValue}
              onChange={this.searchQuery}
            />
            {this.state.feed
              .filter(article => article.headline.match(reg))
              .map((e, i) => (
                <ArticleCard article={e} key={i} context={context} />
              ))}
          </FeedDiv>
        )}
      </MyContext.Consumer>
    );
  }
}

Feed.contextType = MyContext;
