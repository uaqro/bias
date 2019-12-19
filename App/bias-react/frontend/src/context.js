import React, { Component, createContext } from "react";
import MY_SERVICE from "./services/index";
import Swal from "sweetalert2";

export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    loggedUser: false,
    formSignup: {
      username: "",
      email: "",
      city: "",
      state: "",
      country: ""
    },
    loginForm: {
      username: "",
      password: ""
    },
    user: {},
    usr: [], // ARRAY DE IDS DE LOS ARTÍCULOS GUARDADOS DEL USUARIO PARA EL DISPLAY DE LOS BOTONES
    comment: {
      body: "",
      article: ""
    },
    articlesfeed: [],
    savedArticlesFeed: [],
    comment_article_update_key: 0,
    mediaDetail: {},
    loading: true
  };
  componentDidMount() {
    MY_SERVICE.getUser()
      .then(({ data }) => {
        console.log(data);
        this.setState({ loggedUser: true, user: data.user });
        Swal.fire(`Welcome back ${data.user.username} `, "", "success");
      })
      .catch(err => console.log(err));
  }
  //************ GET FEED */
  toggleOpen() {
    var hamburger = document.querySelector(".hamburger");
    var menu = document.querySelector(".navlinks");
    hamburger.classList.toggle("animate");
    if (menu.classList.contains("hide")) {
      menu.style.opacity = ".95";
      menu.style.width = "200%";
      menu.style.left = "36%";
      menu.classList.toggle("hide");
    } else {
      menu.style.opacity = "0";
      menu.style.width = "0%";
      menu.style.left = "110%";
      menu.classList.toggle("hide");
    }
  }
  getSArt = async () => {
    const { data } = await MY_SERVICE.getUserSavedArticles();
    const papitas = data.user.keepArticle;
    this.setState({ usr: papitas });
  };
  getFeed = async () => {
    this.setState({ loading: true });
    const { data } = await MY_SERVICE.getFeed();
    await this.getSArt();
    this.setState({ articlesfeed: data.articles });
    this.setState({ loading: false });
  };

  getSavedArticles = async () => {
    const { data } = await MY_SERVICE.getSavedArticles();
    this.getSArt();
    console.log(data);
    this.setState({ savedArticlesFeed: data.usr.keepArticle });
  };

  saveArticle = async e => {
    e.preventDefault();
    const newarticle = e.target.id;
    const { data } = await MY_SERVICE.addArticle(newarticle);
    this.setState({ usr: data.usr.keepArticle });
  };
  removeArticle = async e => {
    e.preventDefault(); //¿Será necesaria?
    const removedArticle = e.target.id;
    await MY_SERVICE.deleteArticle(removedArticle);
    this.getSArt();
    // const i = this.state.usr.indexOf(removedArticle);
    // const y = this.state.savedArticlesFeed.indexOf(removedArticle);
    // const nSAF = this.state.savedArticlesFeed.splice(y, 1);
    // const da = this.state.usr.splice(i, 1);
    // this.setState({ usr: da, savedArticlesFeed: nSAF });
  };
  getAllMediaArticles = async (e, cb) => {
    e.preventDefault();
    this.setState({ loading: true });
    const id = e.target.getAttribute("id");
    const { data } = await MY_SERVICE.getAllMediaArticles(id);
    this.setState({ mediaDetail: data.articles });
    this.setState({ loading: false });
    cb();
  };

  // deleteComment = async e =>{
  //   e.preventDefault();
  //   const arrayKey = e.target.key
  //   const article_comment_removed = e.target.articleinfo

  //   if (this.state.savedArticlesFeed.length > 0){
  //     const spliceIndex = this.state.savedArticlesFeed.indexOf(article_comment_removed)
  //     const usrFeed = this.state.savedArticlesFeed[spliceIndex].comments.splice(arrayKey, 1)
  //     const fid = this.state.savedArticlesFeed
  //     fid[spliceIndex].comments = usrFeed
  //     this.setState({savedArticlesFeed:fid})

  //   }
  //   if (this.state.articlesfeed.length > 0 ){
  //     const spliceIndex = this.state.articlesfeed.indexOf(article_comment_removed)
  //     const usrFeed = this.state.articlesfeed[spliceIndex].comments.splice(arrayKey, 1)
  //     const fid = this.state.articlesfeed
  //     fid[spliceIndex].comments = usrFeed
  //     this.setState({articlesfeed:fid})

  //   }
  //   deleteCommentObj = {
  //     Comment:e.target.id,
  //     Article:article_comment_removed
  //   }
  //   const {data} = await MY_SERVICE.deleteComment(deleteCommentObj)
  // }

  // handleCommentInput(e) {
  //   const newBody = e.target.value;
  //   this.setState({ comment: { body: newBody, article: e.target.id } });
  //   this.setState({ comment_article_update_key: e.target.key });
  // }
  // postComment = async com => {
  //   const newcomment = {
  //     ...com,
  //     poster: this.state.user._id
  //   };
  //   const { data } = await MY_SERVICE.postcomment(newcomment);
  //   return data;
  // };

  // DEFAULT FUNCTIONS

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
          user: this.state.user,
          usr: this.state.usr,
          comment: this.state.comment,
          articlesfeed: this.state.articlesfeed,
          savedArticlesFeed: this.state.savedArticlesFeed,
          comment_article_update_key: this.state.comment_article_update_key,
          getFeed: this.getFeed,
          getSArt: this.getSArt,
          getSavedArticles: this.getSavedArticles,
          saveArticle: this.saveArticle,
          removeArticle: this.removeArticle,
          // user: this.state.user,
          state: this.state,
          toggleOpen: this.toggleOpen,
          getAllMediaArticles: this.getAllMediaArticles,
          // allMediaArticles: this.state.allMediaArticles,
          mediaDetail: this.state.mediaDetail,
          loading: this.state.loading
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
