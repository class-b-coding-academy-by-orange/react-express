import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { id, title, isCompleted } = this.props.task;
    const { toggleComplete } = this.props;
    return (
      <React.Fragment>
        <p style={{
          textDecoration: (isCompleted) ? 'line-through' : 'none'
        }}>
          <input type="checkbox" onChange={toggleComplete.bind(this, id)} />
          {title}</p>
      </React.Fragment>
    );
  }
}
