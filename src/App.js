import React, { Component } from 'react';
import './App.css';

import Post from './Post';
import EditForm from './EditForm';

import { AppContext, context } from './app-context';

class App extends Component {
  addUpVote = () => {
    this.setState({
      upvotes: this.state.upvotes + 1,
    });
  }

  state = {
    title: 'My Very First Blog Post',
    content: 'Vim ex mucius tincidunt, at quo justo ceteros facilisis, te erat offendit cum.' +
      'Errem oportere cu nam. An tale modus omittantur per, sed fierent detracto ne.' +
      'Semper inermis reprimique an mei, qui at probo illum accumsan.' +
      'Id quo quod tincidunt scriptorem, et solet prodesset sea.' +
      'Sea an ullum similique interesset.',
    upvotes: context.upvotes,
    addUpVote: this.addUpVote,
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
      <AppContext.Provider value={this.state}>
        <div className="main">
          <Post
            title={this.state.title}
            content={this.state.content}
          />
          <EditForm
            title={this.state.title}
            content={this.state.content}
            savePost={this.savePost}
          />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
