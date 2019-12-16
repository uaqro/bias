import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FeedDiv, MediaCard } from "../styles/components";
import { MyContext } from "../context";
import MY_SERVICE from "../services/index";

export default class MediaSources extends Component {
  state = {
    media: [],
    searchValue: ""
  };
  componentDidMount = async () => {
    const { data } = await MY_SERVICE.getMedia();
    console.log(data.media);
    this.setState({ media: data.media });
  };
  searchQuery = e => {
    this.setState({ searchValue: e.target.value });
  };
  render() {
    const reg = new RegExp(this.state.searchValue);
    return (
      <MyContext.Consumer>
        {context => (
          <FeedDiv>
            <h1>Media Sources</h1>
            <tag>Search</tag>
            <input
              type="text"
              onChange={this.searchQuery}
              value={this.state.searchValue}
            />
            {this.state.media
              //.filter(article => article.headline.match(reg))
              .map(m => (
                <MediaCard>
                  <div className="media-card-header">
                    <h1>{m.name}</h1>
                  </div>
                  <h3>{m.description}</h3>
                  <div className="media-box">
                    <Link>Web</Link> <Link>Twitter</Link>
                    <Link>Facebook</Link>
                  </div>
                  <p>
                    <strong>{m.level}</strong> {m.country}, {m.state}, {m.city}
                  </p>
                </MediaCard>
              ))}
          </FeedDiv>
        )}
      </MyContext.Consumer>
    );
  }
}
