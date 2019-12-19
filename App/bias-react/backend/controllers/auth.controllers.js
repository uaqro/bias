const User = require("../models/User");

exports.signup = async (req, res) => {
  await User.register(req.body, req.body.password)
    .then(user => {
      res.status(201).json({ user });
    })
    .catch(err => res.status(500).json({ err }));
};
exports.getUser = (req, res) => {
  const user = User.findById(req.user._id);
  res.status(200).json({ user });
};
exports.login = (req, res) => {
  const { user } = req;
  res.status(200).json({ user });
};
exports.logout = (req, res) => {
  req.logout();
  res.json({ msg: "The user logged out successfully" });
};
exports.loggedin = (req, res, next) => {
  User.findById(req.user._id)
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(500).json({ err }));
};
exports.edit = async (req, res) => {
  const { username, campus, course } = req.body;
  await User.findByIdAndUpdate(req.user._id, { username, campus, course })
    .then(user => res.status(200).json({ user }))
    .catch(err => console.log(err));
};
// exports.upload = async (req, res) => {
//     if (req.file) {
//         const { secure_url } = req.file;
//         await User.findByIdAndUpdate(req.user._id, { image: secure_url });
//     }
// }
