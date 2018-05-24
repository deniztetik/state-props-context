import React from 'react';

import { AppContext } from './app-context';

const Post = (props) => (
  <div className="post">
    <PostTitle title={props.title} />
    <PostContent content={props.content} />
    <AppContext.Consumer>
      {({ upvotes, addUpVote }) =>
        <button
          className="button"
          onClick={addUpVote}>
          + {upvotes}
        </button>}
    </AppContext.Consumer>
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
