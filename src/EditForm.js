import React, { Component } from 'react';

import { AppContext, context } from './app-context';

class EditForm extends Component {
  state = {
    title: context.title,
    content: context.content,
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

  render() {
    const {
      title: titleDirty,
      content: contentDirty,
    } = this.state;

    return (
      <AppContext.Consumer>
        {({ title, content, savePost }) => (
          <div className="edit-post">
            <label>Title:</label>
            <input
              className="edit-post__input"
              type="text"
              name="title"
              label="Title"
              defaultValue={title}
              onChange={this.handleInputChange}
            />
            <label>Content:</label>
            <textarea
              className="edit-post__content"
              type="text"
              name="content"
              defaultValue={content}
              onChange={this.handleInputChange}
            />
            <button
              className="button"
              onClick={() => {
                savePost({ title: titleDirty, content: contentDirty })
              }}>
              Save Post
          </button>
          </div>
        )}
      </AppContext.Consumer>
    )
  }
}

export default EditForm;
