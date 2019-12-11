const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fontSchema = new Schema({
  headline: String,
  subHead: String,
  link: String,
  articles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Article"
    }
  ],
  media: {
    type: Schema.Types.ObjectId,
    ref: "Media"
  }
});

const Font = mongoose.model("Font", fontSchema);
module.exports = Font;
