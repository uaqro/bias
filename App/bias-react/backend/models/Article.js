const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    headline: String,
    resume: String,
    fonts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Font"
      }
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment"
      }
    ]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Article = mongoose.model("article", articleSchema);
module.exports = Article;
