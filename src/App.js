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

  state = {
    title: context.title,
    content: context.content,
    savePost: this.savePost,
    upvotes: context.upvotes,
    addUpVote: this.addUpVote,
  }


  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="main">
          <Post />
          <EditForm />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
