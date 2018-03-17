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
    titleDirty: 'My Very First Blog Post',
    contentDirty: 'Vim ex mucius tincidunt, at quo justo ceteros facilisis, te erat offendit cum.' + 
    'Errem oportere cu nam. An tale modus omittantur per, sed fierent detracto ne.' +
    'Semper inermis reprimique an mei, qui at probo illum accumsan.' +
    'Id quo quod tincidunt scriptorem, et solet prodesset sea.' + 
    'Sea an ullum similique interesset.',
  }

  upVote = () => {
    this.setState({
      upvotes: this.state.upvotes + 1,
    })
  }

  handleInputChange = (event) => {
    const {
      value,
      name,
    } = event.target;

    this.setState({
      [name]: value
    });
  }


  savePost = () => {
    this.setState({
      title: this.state.titleDirty,
      content: this.state.contentDirty,
    })
  }

  render() {
    const {
      title,
      content,
      titleDirty,
      contentDirty,
      upvotes,
    } = this.state;

    return (
      <div className="main">
        <div className="post">
          <header className="post__header">
            <h1 className="post__title">{title}</h1>
          </header>
          <p className="post__body">
            {content}
          </p>
          <button onClick={this.upVote}>
            + {upvotes}
          </button>
        </div>
        <div className="edit-post">
          <label>Title:</label>
          <input
            type="text"
            name="titleDirty"
            label="Title"
            value={titleDirty}
            onChange={this.handleInputChange}
          />
          <label>Content:</label>
          <textarea
            className="edit-post__content"
            type="text"
            name="contentDirty"
            value={contentDirty}
            onChange={this.handleInputChange}
          />
          <button onClick={this.savePost}>Save Post</button>
        </div>
      </div>
    );
  }
}

export default App;
