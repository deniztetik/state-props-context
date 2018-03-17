import React from 'react';

const Post = (props) => (
  <div className="post">
    <header className="post__header">
      <h1 className="post__title">{props.title}</h1>
    </header>
    <p className="post__body">
      {props.content}
    </p>
    <button
      className="post__plus-one-button"
      onClick={props.addUpVote}>
      + {props.upvotes}
    </button>
  </div>
);

export default Post;