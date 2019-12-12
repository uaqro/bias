import React, { Component } from "react";
//import { Home } from "../styles/components";
import { NavBarLayout } from "../styles/components";
import { MyContext } from "../context";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <NavBarLayout>
          <div class="hamburgerMenuContainer" onClick={context.toggleOpen}>
            <div class="hamburger"></div>
          </div>
          <div className="navlinks">
            <div className="navbar-elements-wrapper">
              <h1>bias.</h1>
              <div className="top-items">
                <div className="navbar-item">
                  <Link to="/feed">
                    <img src="/newspaper.png" alt="icon" />
                    <h2>News Feed</h2>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link to="/saved-articles">
                    <img src="/bookmark.png" alt="icon" />
                    <h2>My Articles</h2>
                  </Link>
                </div>

                <div className="navbar-item">
                  <Link to="/media">
                    <img src="/hotel.png" alt="icon" />
                    <h2>Media Sources</h2>
                  </Link>
                </div>
              </div>
              <div className="bottom-items">
                <div className="navbar-item">
                  <Link to="/">
                    <img src="/cloud.png" alt="icon" />
                    <h2>Privacy Policy</h2>
                  </Link>
                </div>
                {context.loggedUser ? (
                  <div className="navbar-item">
                    <Link to="/logout">
                      <img src="/user.png" alt="icon" />
                      <h2>Logout</h2>
                    </Link>
                  </div>
                ) : (
                  <div className="navbar-item">
                    <Link to="/login">
                      <img src="/user.png" alt="icon" />
                      <h2>Login</h2>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </NavBarLayout>
      )}
    </MyContext.Consumer>
  );
}
export default NavBar;
