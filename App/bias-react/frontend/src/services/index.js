import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "here should be your production endpoint")
  : (baseURL = "http://localhost:3000");

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
    return await service.get("/profile");
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
    return await service.get("/media-articles", { id: id });
  }
};

export default MY_SERVICE;
