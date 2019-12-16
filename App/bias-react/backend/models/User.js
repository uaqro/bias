const { Schema, model } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    city: String,
    state: String,
    country: String,

    // REVISAR EL MODELO DE PREFERENCIAS DE MEDIOS

    mediaPreferences: [
      {
        mediaName: Schema.Types.ObjectId,
        userValue: Number,
        totalArticlesMediaRead: Number
      }
    ],

    // Array de Schemas
    readArticles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Articles"
      }
    ],
    commentsPosted: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comments"
      }
    ],
    keepArticle: [
      {
        type: Schema.Types.ObjectId,
        ref: "Article"
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

userSchema.plugin(PLM, { usernameField: "email" });

module.exports = model("User", userSchema);
