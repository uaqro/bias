import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ArticleLayout } from "../styles/components";

function ArticleCard(props) {
  return (
    <ArticleLayout>
      <button
        onClick={e => {
          this.props.context.state.usr.includes(this.props.article._id)
            ? this.props.context.removeArticle(e)
            : this.props.context.deleteArticleSaved(e);
        }}
        value={
          this.props.context.state.usr.includes(this.props.article._id)
            ? "Saved"
            : "Save"
        }
        id={this.props.article._id}
        key={this.props.key}
      ></button>
      <h1>{this.props.article.headline}</h1>
      <h3>{this.props.article.resume}</h3>
      <div className="fonts-wrapper">
        {this.props.article.fonts.map(f => (
          <div className="fonts-box">
            <Link to={f.link}>{f.headline}</Link>
            <p>by:{f.media.name}</p>
          </div>
        ))}
      </div>
      <div className="comments-wrapper">
        {this.props.article.comments.map((c, i) => (
          <div className="comment-box">
            <p>{c.body}</p>
            <p>by:{c.poster.username}</p>
            {String(this.props.context.state.user._id) ===
            String(c.poster._id) ? (
              <button
                onClick={e => {
                  this.props.context.deleteComment(e);
                }}
                id={c._id}
                key={i}
                articleinfo={this.props.article._id}
              >
                DeleteComment
              </button>
            ) : null}
          </div>
        ))}
        <form onSubmit={this.props.context.handleCommentSubmit}>
          <input
            type="text"
            name="comment-body"
            id={this.props.article._id}
            key={this.props.key}
            value={this.props.context.state.comment.body}
            onChange={this.props.context.handleCommentInput}
          />
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </ArticleLayout>
  );
}
export default ArticleCard;
