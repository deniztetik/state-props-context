import React, { Component } from 'react';
import './App.css';

import Post from './Post';
import EditForm from './EditForm';  

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
