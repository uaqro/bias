import React, { Component } from "react";
import { FeedDiv, ArticleLayout } from "../styles/components";
import { MyContext } from "../context";

export default class SavedArticles extends Component {
  state = {
    feed: [],
    searchValue: ""
  };
  componentDidMount = async () => {
    this.setState({ feed: this.context.getSavedArticles() });
  };
  searchQuery = e => {
    this.setState({ searchValue: e.target.value });
  };
  didComponentUpdate = () => {
    if (this.context.savedArticlesFeed.length != this.state.feed.length) {
      this.setState({ feed: this.context.savedArticlesFeed });
    }
  };

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
            {this.feed
              .filter(article => article.headline.match(reg))
              .map((e, i) => (
                <ArticleLayout article={e} key={i} context={context} />
              ))}
          </FeedDiv>
        )}
      </MyContext.Consumer>
    );
  }
}

SavedArticles.contextType = MyContext;
