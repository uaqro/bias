const router = require("express").Router();

const {
  getFeed,
  getMedia,
  getSavedArticles,
  saveArticle,
  deleteSavedArticle,
  postNewComment,
  deleteComment,
  getUserSavedArticlesArray,
  getMediaArticles
} = require("../controllers/userFunctions");

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});

//** DONE ROUTES & CONTROLLERS */
router.get("/feed", getFeed); // <- Página de noticias principal
router.get("/media", getMedia);
router.get("/saved-articles", getSavedArticles); // <- Feed de artículos guardados
router.post("/add-article", saveArticle); // <- Guardar un nuevo artículo
router.get("/get-usr", getUserSavedArticlesArray);
router.post("/delete-article", deleteSavedArticle);
router.get("/media-articles", getMediaArticles);
// router.post("/post-new-comment", postNewComment);
// router.get("/delete-comment", deleteComment);
//router.get("/topics-cloud", getTopics); // <- página de hashtags diarios

//********* SAVED ARTICLES CONTROLLERS **********

// router.get("/:id/delete-article", deleteSavedArticle); // <- elimina artículo de la lista // <- Post de comentarios // <- delete comentario

// // ********* COMMENT CONTROLLERS *********
// router.get("/:id/patch-comment", updateComment); // <- Update
// router.post("/:id/patched-comment", updatedCommentPost); // <- post del patch

module.exports = router;
