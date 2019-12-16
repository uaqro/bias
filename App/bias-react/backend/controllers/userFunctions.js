require("dotenv").config();
const User = require("../models/User.js");
const Comment = require("../models/Comment.js");
const Article = require("../models/Article.js");
const Font = require("../models/Font.js");
const Media = require("../models/Media.js");

//***********NEWS FEEDS */
exports.getFeed = async (req, res) => {
  const d = new Date();
  //d.setDate(d.getDate() - 1); query: { published: { $gt: d } }
  const articles = await Article.find().populate({
    path: "fonts",
    populate: {
      path: "Media",
      model: "Media"
    }
  });
  console.log(articles[0].fonts);
  res.status(200).json({ articles });
};

exports.getMedia = async (req, res) => {
  const media = await Media.find();
  res.status(200).json({ media });
};

//********* SAVED ARTICLES */
exports.getSavedArticles = async (req, res) => {
  const { id } = req.user;
  const usr = await User.findById(id).populate("keepArticle");
  res.status(200).json({ usr });
};

//********* CRUD */

exports.saveArticle = async (req, res) => {
  const { id } = req.body;
  const { _id } = req.user;
  const usr = await User.findByIdAndUpdate(
    _id,
    {
      $push: { keepArticle: id }
    },
    { new: true }
  );
  res.status(201).json({ usr });
};

exports.getUserSavedArticlesArray = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById(_id).populate({
    path: "keepArticle",
    populate: {
      path: "fonts",
      model: "Font"
    }
  });
  res.status(200).json({ user });
};
exports.deleteSavedArticle = async (req, res) => {
  const { _id } = req.user;
  const { article } = req.body;
  const papa = await User.findByIdAndUpdate(_id, {
    $pull: {
      keepArticle: {
        $in: article
      }
    }
  });
  res.status(201).json({ papa });
};

// ********** COMMENTS *****************

// exports.postNewComment = async (req, res) => {
//   const comment = req.body;
//   const { _id } = req.user;
//   const newComment = await Comment.create(comment);
//   const usr = await User.findById(_id);
//   usr.commentsPosted.push(newComment._id);
//   usr.save();
//   const art = await Article.findById(comment.article);
//   art.comments.push(newComment._id);
//   art.save();
//   res.status(201).json({ newComment });
// };
// exports.deleteComment = async (req, res) => {}; // <- delete comentario
// exports.updateComment = async (req, res) => {}; // <- Update
// exports.updatedCommentPost = async (req, res) => {}; // <- post del patch
