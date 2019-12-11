const router = require("express").Router();

const {
  getFeed,
  getMedia,
  getSavedArticles,
  saveArticle,
  deleteSavedArticle,
  postNewComment,
  deleteComment,
  getUserSavedArticlesArray
} = require("../controllers/userFunctions");

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});

//** DONE ROUTES & CONTROLLERS */
router.get("/news-feed", getFeed); // <- Página de noticias principal
router.get("/media", getMedia);
router.get("/saved-articles", getSavedArticles); // <- Feed de artículos guardados
router.post("/save-article", saveArticle); // <- Guardar un nuevo artículo
router.get("/get-usr", getUserSavedArticlesArray);
router.post("/post-new-comment", postNewComment);
//router.get("/topics-cloud", getTopics); // <- página de hashtags diarios

//********* SAVED ARTICLES CONTROLLERS **********

router.get("/:id/delete-article", deleteSavedArticle); // <- elimina artículo de la lista // <- Post de comentarios

// ********* COMMENT CONTROLLERS *********
router.get("/:id/delte-comment", deleteComment); // <- delete comentario
router.get("/:id/patch-comment", updateComment); // <- Update
router.post("/:id/patched-comment", updatedCommentPost); // <- post del patch

module.exports = router;
