import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    title: 'My Very First Blog Post',
    content: `Vim ex mucius tincidunt, at quo justo ceteros facilisis, te erat offendit cum. 
    Errem oportere cu nam. An tale modus omittantur per, sed fierent detracto ne. 
    Semper inermis reprimique an mei, qui at probo illum accumsan. 
    Id quo quod tincidunt scriptorem, et solet prodesset sea. 
    Sea an ullum similique interesset.`,
    upvotes: 0,
  }

  upVote = () => {
    this.setState({
      upvotes: this.state.upvotes + 1,
    })
  }

  render() {
    return (
      <div className="main">
        <div className="post">
          <header className="post__header">
            <h1 className="post__title">{this.state.title}</h1>
          </header>
          <p className="post__body">
            {this.state.content}
          </p>
          <button onClick={this.upVote}>
            + {this.state.upvotes}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
