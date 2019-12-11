require("dotenv").config();
const User = require("../models/User.js");
const Comment = require("../models/Comment.js");
const Article = require("../models/Article.js");
const Font = require("../models/Font.js");
const Media = require("../models/Media.js");

exports.getProfile = async (req, res) => {
  const { id } = req.user;
  const usr = await User.findById(id).populate("readArticles keepArticle");
  res.render("user/profile", usr);
};

// ********** UPDATE ************

exports.patchUser = async (req, res) => {
    const { id } = req,user;
    const usr = await User.findById(id)
    res.render("user/edit", usr)
}

// HABRÁ QUE REVISAR ESTO CON LOS VALORES DEL FORMULARIO DE UPDATE PROFILE
exports.patchedUser = async (req, res)=> {
    const { city, state, country, email } = req.body
    res.redirect("/user/profile")
}

// REVISAR PREFERENCIAS

exports.patchPreferences = async (req, res )=> {
  const { id } = req.user
  const usr = await User.findById(id).populate("mediaPreferences")
}
exports.patchPreferences = async (req, res ) => {
  const { } = req.body // ALGO 
  const { id } = req.user
  // ¿Habrá que traerlo como objeto?
  const usr = await User.findByIdAndUpdate(id, {})
}

// ********* DELETE ********
exports.deleteProfile = async (req, res ) => {
  const {
    id
  } = req.user;
  req.logout();
  await user.findByIdAndDelete(id);
  res.redirect("/");
}
