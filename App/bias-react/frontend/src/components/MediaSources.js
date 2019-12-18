import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FeedDiv,
  MediaCard,
  Mediabox,
  Myh3,
  SecondaryButton,
  Loader,
  CenterizeMe,
  LoginRedirectButton
} from "../styles/components";
import { MyContext } from "../context";
import MY_SERVICE from "../services/index";
import { FlagSpinner } from "react-spinners-kit";

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
            {context.loggedUser ? (
              <>
                {context.loading ? (
                  <Loader>
                    <CenterizeMe>
                      <FlagSpinner
                        size={40}
                        Color="#000000"
                        loading={context.loading}
                      />
                      <p>Getting the news...</p>
                    </CenterizeMe>
                  </Loader>
                ) : (
                  <>
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
                            <Myh3 className="media-version-h3">{m.name}</Myh3>
                          </div>
                          <p>{m.description}</p>
                          <Mediabox>
                            <button>
                              <Link>
                                <i class="fas fa-globe"></i>
                                Web
                              </Link>
                            </button>
                            <button>
                              <i class="fab fa-twitter"></i>
                              <Link>Twitter</Link>
                            </button>
                            <button>
                              <i class="fab fa-facebook-f"></i>
                              <Link>Facebook</Link>
                            </button>
                          </Mediabox>
                          <p>
                            <strong>{m.level}</strong> {m.country}, {m.state},{" "}
                            {m.city}
                          </p>
                          <Link to="/media-articles">
                            <SecondaryButton
                              className="button-media-card"
                              id={m._id}
                              onClick={e =>
                                context.getAllMediaArticles(e, () =>
                                  this.props.history.push("/media-articles")
                                )
                              }
                            >
                              See articles
                            </SecondaryButton>
                          </Link>
                        </MediaCard>
                      ))}
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
