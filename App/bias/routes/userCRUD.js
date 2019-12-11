const express = require("express");
const router = express.Router();
const {
  getProfile,
  patchUser,
  patchedUser,
  deleteProfile
} = require("../controllers/userControllers.js");

//READ - USER PROFILE

router.get("/profile", getProfile);

//UPDATE - USER PROFILE

router.get("/profile/edit", patchUser);
router.get("/profile/edited", patchedUser);

//DELETE USER PROFILE

router.get("/profile/delete", deleteProfile);

module.exports = router;
