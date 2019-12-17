import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { FeedDiv } from "../styles/components";
import { MyContext } from "../context";
import ArticleCard from "./ArticleCard";
import { PushSpinner } from "react-spinners-kit";

export default class Feed extends Component {
  state = {
    feed: [],
    searchValue: "",
    loading: true
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
    const { loading } = this.state;
    const reg = new RegExp(this.state.searchValue);
    return (
      <MyContext.Consumer>
        {context => (
          <FeedDiv>
            {loading ? (
              <PushSpinner size={30} color="#686769" loading={loading} />
            ) : null}
            <h1>News Feed</h1>
            <tag>Search</tag>
            <input
              type="text"
              value={this.state.searchValue}
              onChange={this.searchQuery}
            />
            {context.articlesfeed
              //.filter(article => article.headline.match(reg))
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
