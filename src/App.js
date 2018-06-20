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

  addUpVote = () => {
    this.setState({
      upvotes: this.state.upvotes + 1,
    })
  }

  render() {
    const {
      title,
      content,
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
          <button
            className="post__plus-one-button"
            onClick={this.addUpVote}>
            + {upvotes}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
