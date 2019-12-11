import React, { Component, createContext } from "react";
import MY_SERVICE from "./services/index";
import Swal from "sweetalert2";

export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    loggedUser: false,
    formSignup: {
      username: "",
      campus: "",
      password: "",
      course: ""
    },
    loginForm: {
      username: "",
      password: ""
    },
    user: {},
    usr: [], // ARRAY DE IDS DE LOS ARTÍCULOS GUARDADOS DEL USUARIO PARA EL DISPLAY DE LOS BOTONES
    commment: {
      body: "",
      article: ""
    },
    articlesfeed:[],
    savedArticlesFeed:[],
    comment_article_update_key
  };
  componentDidMount() {
    if (document.cookie) {
      MY_SERVICE.getUser()
        .then(({ data }) => {
          this.setState({ loggedUser: true, user: data.user });
          Swal.fire(`Welcome back ${data.user.name} `, "", "success");
        })
        .catch(err => console.log(err));
    }
  }
  //************ GET FEED */

  getFeed = async => {
    const { data } = await MY_SERVICE.getFeed();
    this.getSArt() 
    this.setState({articlesfeed:data})
  };
  getSavedArticles = async => {
    const { data } = await MY_SERVICE.getSavedArticles();
    await getSArt()
    this.setState({savedArticlesFeed:data.keepArticle})
  };
  getSArt = async =>{
    const { data } = await MY_SERVICE.getUserSavedArticles();
    this.setState({usr:data})
  }
  saveArticle = async e => {
    e.preventDefault();
    const newarticle = e.target.id;
    const usrSavedArticles = this.state.usr.push(newarticle)
    this.setState({usr:usrSavedArticles})
    const { data } = await MY_SERVICE.addarticle(newarticle);
  };
  removeArticle = e => {
    e.preventDefault(); //¿Será necesaria?
    const removedArticle = e.target.id;
    this.deleteArticle(removedArticle);
    await MY_SERVICE.deletearticle(e);
    const i = this.state.usr.indexOf(removedArticle)
    const y = this.state.savedArticlesFeed.indexOf(removedArticle)
    const nSAF = this.state.savedArticlesFeed.splice(y,1)
    const da = this.state.usr.splice(i, 1);
    this.setState({ usr: da, savedArticlesFeed: nSAF});
  };
  handleCommentInput(e) {
    const newBody = e.target.value;
    this.setState({ comment: { body: newBody, article: e.target.id } });
    this.setState({ comment_article_update_key: e.target.key });
  }
  postComment = async com => {
    const newcomment = {
      ...com,
      poster: this.state.user._id
    };
    const { data } = await MY_SERVICE.postcomment(newcomment);
    return data;
  };

  handleInput = (e, obj) => {
    const a = this.state[obj];
    const key = e.target.name;
    a[key] = e.target.value;
    this.setState({ obj: a });
  };

  handleSignup = async e => {
    e.preventDefault();
    const { data } = await MY_SERVICE.signup(this.state.formSignup);
    Swal.fire(`Welcome ${data.user.name}`, "User created", "success");
  };

  handleLogin = (e, cb) => {
    e.preventDefault();
    MY_SERVICE.login(this.state.loginForm)
      .then(({ data }) => {
        console.log(data);
        this.setState({ loggedUser: true, user: data.user });
        cb();
      })
      .catch(err => {
        Swal.fire(`Quien sabe que paso`, "☠️", "error");
      });
  };

  handleLogout = async cb => {
    await MY_SERVICE.logout();

    window.localStorage.clear();
    this.setState({ loggedUser: false, user: {} });
    cb();
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          loggedUser: this.state.loggedUser,
          formSignup: this.state.formSignup,
          loginForm: this.state.loginForm,
          handleInput: this.handleInput,
          handleSignup: this.handleSignup,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          // user: this.state.user,
          state: this.state
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
