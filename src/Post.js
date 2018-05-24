import React from 'react';

import { AppContext } from './app-context';

const Post = (props) => (
  <AppContext.Consumer>
    {({ upvotes, addUpVote }) =>
      <div className="post">
        <PostTitle title={props.title} />
        <PostContent content={props.content} />
        <button
          className="button"
          onClick={addUpVote}>
          + {upvotes}
        </button>
      </div>}
  </AppContext.Consumer>
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
