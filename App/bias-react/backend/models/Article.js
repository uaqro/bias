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
    ],
    bias: Number
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
