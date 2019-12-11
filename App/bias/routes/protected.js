const router = require("express").Router();
const uploadCloud = require("../config/cloudinary");
const {
  saveArticle,
  getSavedArticles,
  deleteSavedArticle,
  getFeed
} = require("../controllers/userControllers");

// **** MAIN FUNCS ******

router.get("/news-feed", getFeed); // <- Página de noticias principal
router.get("/topics-cloud", getTopics); // <- página de hashtags diarios

//********* SAVED ARTICLES CONTROLLERS **********

router.get("/saved-articles", getSavedArticles); // <- Feed de artículos guardados
router.post("/:id/save-article", saveArticle); // <- Guardar un nuevo artículo
router.get("/:id/delete-article", deleteSavedArticle); // <- elimina artículo de la lista

// ********* COMMENT CONTROLLERS *********
router.post("/:id/new-comment", postNewComment); // <- Post de comentarios
router.get("/:id/delte-comment", deleteComment); // <- delete comentario
router.get("/:id/patch-comment", updateComment); // <- Update
router.post("/:id/patched-comment", updatedCommentPost); // <- post del patch

module.exports = router;
