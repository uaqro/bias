require("dotenv").config();
const User = require("../models/User.js");
const Comment = require("../models/Comment.js");
const Article = require("../models/Article.js");
const Font = require("../models/Font.js");
const Media = require("../models/Media.js");

exports.getFeed = async (req, res) => {
  const articles = await Article.find();
  res.po;
  //Feed de noticias
};

//********* SAVED ARTICLES */
exports.getSavedArticles = async (req, res) => {
  const { id } = req.user;
  const usr = await User.findById(id).populate("keepArticle");
  res.render("/user/saved-articles", usr);
};

//********* CRUD */

exports.saveArticle = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;
  const usr = await User.findById(_id);
  usr.keepArticle.push(id);
};

exports.deleteSavedArticle = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;
  await user.findByIdAndUpdate(_id, {
    $pull: {
      keepArticle: {
        $in: id
      }
    }
  });
  res.redirect("/user/saved-articles");
};

// ********** COMMENTS *****************

exports.postNewComment = async (req, res) => {};
exports.deleteComment = async (req, res) => {}; // <- delete comentario
exports.updateComment = async (req, res) => {}; // <- Update
exports.updatedCommentPost = async (req, res) => {}; // <- post del patch
