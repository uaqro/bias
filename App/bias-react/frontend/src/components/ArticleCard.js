import React from "react";
import { ArticleLayout, MainButton } from "../styles/components";
import Tree from "./Tree";
import { MyContext } from "../context";

function ArticleCard(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <ArticleLayout>
          <div className="article-head">
            <h1>{props.article.headline}</h1>
            {context.usr.includes(props.article._id) ? (
              <img
                src="./bookmark-black.png"
                alt="Saved"
                onClick={e => context.removeArticle(e)}
                //value={context.usr.includes(props.article._id) ? "Saved" : "Save"}
                id={props.article._id}
                val={props.val}
              />
            ) : (
              <img
                src="./bookmark.png"
                alt="Save"
                onClick={e => context.saveArticle(e)}
                //value={context.usr.includes(props.article._id) ? "Saved" : "Save"}
                id={props.article._id}
                val={props.val}
              />
            )}
          </div>
          <p>{props.article.summary}</p>
          <div className="fonts-wrapper">
            <Tree name="Fonts">
              {props.article.fonts.map(f => {
                try {
                  return (
                    <>
                      <Tree name={f.media.name}>
                        <a href={f.link}>
                          <p>{f.headline}</p>
                        </a>
                      </Tree>
                    </>
                  );
                } catch {
                  return (
                    <>
                      <Tree name="Unknow Font">
                        <a href={f.link}>
                          <p>{f.headline}</p>
                        </a>
                      </Tree>
                    </>
                  );
                }
              })}
            </Tree>
          </div>
          <br />
          <div className="comments-wrapper">
            {props.article.comments.map((c, i) => (
              <div className="comment-box">
                <p>{c.body}</p>
                <p>by:{c.poster.username}</p>
                {String(context.state.user._id) === String(c.poster._id) ? (
                  <MainButton
                    onClick={e => {
                      context.deleteComment(e);
                    }}
                    id={c._id}
                    val={i}
                    articleinfo={props.article._id}
                  >
                    DeleteComment
                  </MainButton>
                ) : null}
              </div>
            ))}
            <form onSubmit={context.handleCommentSubmit}>
              <input
                type="text"
                name="comment-body"
                id={props.article._id}
                val={props.val}
                value={context.comment.body}
                onChange={context.handleCommentInput}
              />
              <button type="submit">Post Comment</button>
            </form>
          </div>
          <br />
          <hr />
          <br />
        </ArticleLayout>
      )}
    </MyContext.Consumer>
  );
}
export default ArticleCard;
