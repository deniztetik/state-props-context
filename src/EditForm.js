import React, { Component } from 'react';
import './EditForm.css';

class EditForm extends Component {
  state = {
    title: this.props.title,
    content: this.props.content,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      nextTitle,
      nextContent,
    } = nextProps;

    const {
      prevTitle,
      prevContent,
    } = prevState;

    if (nextTitle !== prevTitle || nextContent !== prevContent) {
      return {
        nextTitle,
        nextContent,
      }
    }

    return null;
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
          className="edit-post__input"
          type="text"
          name="title"
          label="Title"
          value={title}
          onChange={this.handleInputChange}
        />
        <label>Content:</label>
        <textarea
          className="edit-post__content"
          type="text"
          name="content"
          value={content}
          onChange={this.handleInputChange}
        />
        <button
          className="button"
          onClick={() => {
            savePost({ title, content })
          }}>
          Save Post
          </button>
      </div>
    )
  }
}

export default EditForm;