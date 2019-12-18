const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fontSchema = new Schema({
  headline: String,
  subhead: String,
  link: String,
  bias: Number,
  media: {
    type: Schema.Types.ObjectId,
    ref: "Media"
  }
});

const Font = mongoose.model("Font", fontSchema);
module.exports = Font;
