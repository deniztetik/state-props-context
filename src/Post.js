import React from 'react';

const Post = (props) => (
  <div className="post">
    <PostTitle title={props.title} />
    <PostContent content={props.content} />
    <button
      className="button"
      onClick={props.addUpVote}>
      + {props.upvotes}
    </button>
  </div>
);

export default Post;

const PostTitle = (props) => (
  <header className="post__header">
    <h1 className="post__title">{props.title}</h1>
  </header>
);

const PostContent = (props) => (
  <p className="post__body">
    {props.content}
  </p>
);
