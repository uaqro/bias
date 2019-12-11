const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Aquí en algún punto habría que añadir los dueños del medio de comunicación:

const mediaSchema = new Schema({
  name: String,
  logo: String,
  description: String,
  web: String,
  bias: Number,
  city: String,
  state: String,
  country: String,
  twitter: String,
  facebook: String,
  level: {
    type: String,
    enum: ["local", "state", "national"]
  },
  articles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Font"
    }
  ]
});

const Media = mongoose.model("Media", mediaSchema);
module.exports = Media;
