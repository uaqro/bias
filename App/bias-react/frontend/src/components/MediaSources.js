import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FeedDiv, MediaCard } from "../styles/components";
import { MyContext } from "../context";
import MY_SERVICE from "./services/index";

export default class MediaSources extends Component {
  state = {
    media: [],
    searchValue: ""
  };
  componentDidMount = async () => {
    const { data } = await MY_SERVICE.getMedia();
    this.setState({ media: data });
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
            <input type="text" onChange={this.searchQuery} />
            {this.state.media
              .filter(article => article.headline.match(reg))
              .map(m => (
                <MediaCard>
                  <img src={m.logo} alt="media-lolgo" />
                  <h1>{m.name}</h1>
                  <h3>{m.description}</h3>
                  <div className="media-box">
                    <Link>Web</Link> <Link>Twitter</Link>
                    <Link>Facebook</Link>
                  </div>
                  <p>
                    <strong>{m.level}</strong> {m.country},{m.state},{m.city}
                  </p>
                  {m.articles.map(a => (
                    <Link to={a.link}>
                      <h1>{a.headline}</h1>
                      <h3>{a.subHead}</h3>
                    </Link>
                    //   <img src = {a.media} alt="article-image" />
                  ))}
                </MediaCard>
              ))}
          </FeedDiv>
        )}
      </MyContext.Consumer>
    );
  }
}
