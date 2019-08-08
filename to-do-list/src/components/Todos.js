import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class Todos extends Component {
  render() {
    const { tasks, toggleComplete } = this.props;
    return (
      <React.Fragment>
        <h6>Todos</h6>
        {tasks.map(task => <TodoItem key={task.id} task={task} toggleComplete={toggleComplete} />)}
      </React.Fragment>
    );
  }
}
