import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    title: 'My Very First Blog Post',
    content: 'Vim ex mucius tincidunt, at quo justo ceteros facilisis, te erat offendit cum.' +
      'Errem oportere cu nam. An tale modus omittantur per, sed fierent detracto ne.' +
      'Semper inermis reprimique an mei, qui at probo illum accumsan.' +
      'Id quo quod tincidunt scriptorem, et solet prodesset sea.' +
      'Sea an ullum similique interesset.',
    upvotes: 0,
  }

  upVote = () => {
    this.setState({
      upvotes: this.state.upvotes + 1,
    })
  }


  savePost = (post) => {
    const {
      title,
      content,
    } = post;

    this.setState({
      title,
      content,
    })
  }

  render() {
    return (
      <div className="main">
        <Post
          title={this.state.title}
          content={this.state.content}
          upvotes={this.state.upvotes}
          upVote={this.upVote}
        />
        <EditForm
          title={this.state.title}
          content={this.state.content}
          savePost={this.savePost}
        />
      </div>
    );
  }
}

export default App;

const Post = (props) => (
  <div className="post">
    <header className="post__header">
      <h1 className="post__title">{props.title}</h1>
    </header>
    <p className="post__body">
      {props.content}
    </p>
    <button onClick={props.upVote}>
      + {props.upvotes}
    </button>
  </div>
);

class EditForm extends Component {
  state = {
    title: '',
    content: '',
  }

  static getDerivedStateFromProps(props) {
    const {
      title,
      content,
    } = props;

    return {
      title,
      content,
    }
  }

  modifyTitle = (event) => {
    const title = event.target.value;
    this.setState({
      title,
    })
  }

  modifyContent = (event) => {
    const content = event.target.value;
    this.setState({
      content,
    })
  }

  render() {
    const {
      savePost
    } = this.props;

    const {
      title,
      content
    } = this.state;

    return (
      <div className="edit-post">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          label="Title"
          value={title}
          onChange={this.modifyTitle}
        />
        <label>Content:</label>
        <textarea
          className="edit-post__content"
          type="text"
          name="content"
          value={content}
          onChange={this.modifyContent}
        />
        <button
          onClick={() => {
            savePost({title, content})
          }}>
          Save Post
        </button>
      </div>
    )
  }
}