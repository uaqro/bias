import React, { Component } from "react";
//import { Home } from "../styles/components";
import { NavBarLayout, NavBarBox } from "../styles/components";
import { MyContext } from "../context";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function NavBar(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <NavBarBox>
          <NavBarLayout>
            <div className="nav-aligment">
              <div className="logo">
                <Link to="/">
                  <p>bias.</p>
                </Link>
              </div>
              <div
                className="hamburgerMenuContainer"
                onClick={context.toggleOpen}
              >
                <div className="hamburger"></div>
              </div>
            </div>
            <div className="navlinks hide">
              <Link to="/">
                <h1>bias.</h1>
              </Link>
              <div className="top-items">
                <div className="navbar-item">
                  <Link to="/feed">
                    <img src="/newspaper.png" alt="icon" />
                    <p>News Feed</p>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link to="/saved-articles">
                    <img src="/bookmark.png" alt="icon" />
                    <p>My Articles</p>
                  </Link>
                </div>

                <div className="navbar-item">
                  <Link to="/media">
                    <img src="/hotel.png" alt="icon" />
                    <p>Media Sources</p>
                  </Link>
                </div>
              </div>
              <div className="bottom-items">
                <div className="navbar-item">
                  <Link to="/">
                    <img src="/cloud.png" alt="icon" />
                    <p>Privacy Policy</p>
                  </Link>
                </div>
                {context.loggedUser ? (
                  <div className="navbar-item">
                    <div
                      className="logout"
                      onClick={() =>
                        context.handleLogout(() => {
                          props.history.push("/");
                        })
                      }
                    >
                      <img src="/user.png" alt="icon" />
                      <p>Logout</p>
                    </div>
                  </div>
                ) : (
                  <div className="navbar-item">
                    <Link to="/login">
                      <img src="/user.png" alt="icon" />
                      <p>Login</p>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </NavBarLayout>
        </NavBarBox>
      )}
    </MyContext.Consumer>
  );
}
export default withRouter(NavBar);
