import axios from "axios";
const baseURL = "https://desolate-basin-39120.herokuapp.com";

const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await service.get("/");
  },
  signup: async user => {
    return await service.post("/signup", user);
  },
  login: async user => {
    return await service.post("/login", user);
  },
  logout: async () => {
    return await service.post("/logout");
  },
  loggedIn: async () => {
    return await service.get("/loggedin");
  },
  getMedia: async () => {
    return await service.get("/media");
  },
  getFeed: async () => {
    return await service.get("/feed");
  },
  getUser: async () => {
    return await service.get("/loggedin");
  },
  getSavedArticles: async () => {
    return await service.get("/saved-articles");
  },
  postComment: async newcomment => {
    return await service.post("/post-new-comment", newcomment);
  },
  saveArticle: async id => {
    return await service.post("/save-article", { id });
  },
  deleteArticle: async e => {
    return await service.post("/delete-article", e);
  },
  getUserSavedArticles: async () => {
    return await service.get("/get-usr");
  },
  deleteComment: async deleteCommentObj => {
    return await service.post("/delete-comment", deleteCommentObj);
  },
  addArticle: async articleId => {
    return await service.post("/add-article", { id: articleId });
  },
  getAllMediaArticles: async id => {
    return await service.post("/media-articles", { id });
  }
};

export default MY_SERVICE;
